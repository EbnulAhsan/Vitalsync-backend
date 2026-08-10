pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/EbnulAhsan/Vitalsync-backend.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t vitalsync-backend:jenkins .'
            }
        }
    }
}