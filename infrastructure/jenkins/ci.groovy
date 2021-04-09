pipeline {
	agent any
	environment {
		DOCKER_IMAGE = "755952719952.dkr.ecr.eu-west-1.amazonaws.com/webcompbuild:latest"
	}
	options {
		ansiColor('xterm')
	}
	stages {
		stage('AWS ECR login') {
			steps {
				sh '''
					aws ecr get-login --region eu-west-1 --no-include-email | bash
				'''
			}
		}
		stage('Agent: Docker webcompbuild') {
			agent {
				docker {
					alwaysPull true
					image "${DOCKER_IMAGE}"
				}
			}
			// TODO: Delete either all yarn or all npm scripts
			stages {
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
			}
		}
	}
}
