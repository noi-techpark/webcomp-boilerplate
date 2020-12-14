pipeline {
    agent {
        dockerfile {
            filename 'infrastructure/docker/node.dockerfile'
            additionalBuildArgs '--build-arg JENKINS_USER_ID=$(id -u jenkins) --build-arg JENKINS_GROUP_ID=$(id -g jenkins)'
        }
    }
    options {
        ansiColor('xterm')
    }
    parameters {
        string(name: 'VERSION', defaultValue: '1.0.0', description: 'Version (without a leading "v")', trim: true)
    }
    environment {
        GIT_REPOSITORY = "git@github.com:noi-techpark/webcomp-meteo-generic.git"
        GIT_BRANCH = "infra"
        DIST_FOLDER = "dist"
        YOUR_ENVVAR = "..."
    }
    // TODO: Delete either all yarn or all npm scripts
    stages {
        stage('Clean') {
            steps {
                sh '''
                    rm -rf dist node_modules
                    yarn cache clean
                '''
            }
        }
        stage('Configure') {
            steps {
                sh '''
                    rm -rf .env
                    echo "YOUR_ENVVAR=${YOUR_ENVVAR}" >> .env
                '''
            }
        }
        stage('Dependencies') {
            steps {
                sh 'yarn'
                sh 'npm ci'
            }
        }
        stage('Test') {
            steps {
                sh '''
                    yarn lint
                    yarn test
                '''
                sh '''
                    npm run lint
                    npm run test
                '''
            }
        }
        stage('Build') {
            steps {
                sh 'yarn build'
                sh 'npm run build'
            }
        }
        stage('Git Tag') {
            steps {
                sshagent (credentials: ['jenkins_github_ssh_key']) {
                    sh """
                        mkdir -p ~/.ssh
                        ssh-keyscan -H github.com >> ~/.ssh/known_hosts
                        git config --global user.email "info@opendatahub.bz.it"
                        git config --global user.name "Jenkins"
                        git remote set-url origin ${GIT_REPOSITORY}
                        git add ${DIST_FOLDER}/*
                        git add -A
                        git commit --allow-empty -m "Version ${VERSION}"
                        git tag --delete v${VERSION} || true
                        git push origin :v${VERSION} || true
                        git tag -a v${VERSION} -m "Version ${VERSION}"
                        git push origin HEAD:${GIT_BRANCH}
                        git push origin v${VERSION}
                    """
                }
            }
        }
    }
}
