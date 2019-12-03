pipeline {
    agent {
        dockerfile {
            filename 'docker/Dockerfile'
            additionalBuildArgs '--build-arg JENKINS_USER_ID=`id -u jenkins` --build-arg JENKINS_GROUP_ID=`id -g jenkins`'
        }
    }

    parameters {
        string(name: 'VERSION', defaultValue: '1.0.0', description: 'Version')
    }

    environment {
        GIT_REPOSITORY = "git@github.com:noi-techpark/webcomp-boilerplate.git"
    }

    stages {
        stage('Clean') {
            steps {
                sh 'rm -rf dist'
            }
        }
        stage('Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run lint'
                sh 'npm run test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Git Tag') {
            steps {
                ansiColor('xterm') {
                    sshagent (credentials: ['jenkins_github_ssh_key']) {
                        sh 'git config --global user.email "info@opendatahub.bz.it"'
                        sh 'git config --global user.name "Jenkins"'
                        sh 'git remote set-url origin ${GIT_REPOSITORY}'
                        sh 'git add -A'
                        sh 'git commit -m "Verion ${VERSION}"'
                        sh 'git tag -s -a v${VERSION} -m "Version ${VERSION}"'
                        sh 'git push origin HEAD:master'
                        sh 'git push origin --tags'
                    }
                }
            }
        }
    }
}
