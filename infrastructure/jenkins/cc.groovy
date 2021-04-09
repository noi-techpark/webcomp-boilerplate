pipeline {
	agent any
	options {
		ansiColor('xterm')
	}
	stages {
		stage('CC: REUSE') {
			steps {
				sh 'reuse lint'
			}
		}
	}
}
