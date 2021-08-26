pipeline {
	agent any
	stages {
		stage('Clone Git Repo'){
				steps{
					git branch: 'main', url: 'https://github.com/LIKHIT1993/CypressTest1.git'
		    }
		}
		stage('Install Dependencies'){
				steps{
					bat 'npm install'
				}
		}
		stage('Run Tests'){
				steps{
					bat 'npm run runtests'
				}
		}
		stage('Publish HTML Report'){
				steps{
					publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
				}
		}
	}
}
