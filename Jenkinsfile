pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t vitalsync-backend:latest .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker rm -f vitalsync-backend-auto || true

                docker run -d \
                --name vitalsync-backend-auto \
                -p 5001:5000 \
                vitalsync-backend:latest
                '''
            }
        }
    }
}