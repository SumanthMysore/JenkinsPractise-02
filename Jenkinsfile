pipeline {
    agent any
    tools {
        maven "maven"
    }
    environment {
        tag = "${currentBuild.number}"
    }

    stages {
        stage('Git Checkout') {
            steps {
                git credentialsId: 'ghcr_pat', url: 'https://github.com/SumanthMysore/JenkinsPractise-02'
            }
        }
        stage('Building and pushing docker images for backend microservices') {
            steps {
                dir('backend/') {
                    sh 'mvn clean package -DskipTests'
                }
                dir('backend/api-gateway') {
                    sh 'docker build . -t ghcr.io/sumanthmysore/jenkins-bc67-be-api-gateway:${tag}'
                }
                dir('backend/businessdetails') {
                    sh 'docker build . -t ghcr.io/sumanthmysore/jenkins-bc67-be-businessdetails:${tag}'
                }
                dir('backend/service-registry') {
                    sh 'docker build . -t ghcr.io/sumanthmysore/jenkins-bc67-be-service-registry:${tag}'
                }
                dir('backend/transactions') {
                    sh 'docker build . -t ghcr.io/sumanthmysore/jenkins-bc67-be-transactions:${tag}'
                }
                dir('backend/users') {
                    sh 'docker build . -t ghcr.io/sumanthmysore/jenkins-bc67-be-users:${tag}'
                }
                withCredentials([gitUsernamePassword(credentialsId: 'ghcr_pat', gitToolName: 'Default')]) {
                    sh 'docker push ghcr.io/sumanthmysore/jenkins-bc67-be-api-gateway:${tag}'
                    sh 'docker push ghcr.io/sumanthmysore/jenkins-bc67-be-businessdetails:${tag}'
                    sh 'docker push ghcr.io/sumanthmysore/jenkins-bc67-be-service-registry:${tag}'
                    sh 'docker push ghcr.io/sumanthmysore/jenkins-bc67-be-transactions:${tag}'
                    sh 'docker push ghcr.io/sumanthmysore/jenkins-bc67-be-users:${tag}'   
                }
            }
        }
        stage('Building and pushing docker image for frontend') {
            steps {
                dir('frontend/') {
                    sh 'docker build . -t ghcr.io/sumanthmysore/jenkins-bc67-fe:${tag}'
                }
                withCredentials([gitUsernamePassword(credentialsId: 'ghcr_pat', gitToolName: 'Default')]) {
                    sh 'docker push ghcr.io/sumanthmysore/jenkins-bc67-fe:${tag}'
                }
            }
        }
        stage('Delete the built docker images') {
            steps {
                sh 'docker rmi ghcr.io/sumanthmysore/jenkins-bc67-be-api-gateway:${tag} 2>/dev/null'
                sh 'docker rmi ghcr.io/sumanthmysore/jenkins-bc67-be-businessdetails:${tag} 2>/dev/null'
                sh 'docker rmi ghcr.io/sumanthmysore/jenkins-bc67-be-service-registry:${tag} 2>/dev/null'
                sh 'docker rmi ghcr.io/sumanthmysore/jenkins-bc67-be-transactions:${tag} 2>/dev/null'
                sh 'docker rmi ghcr.io/sumanthmysore/jenkins-bc67-be-users:${tag} 2>/dev/null'
                
                sh 'docker rmi ghcr.io/sumanthmysore/jenkins-bc67-fe:${tag} 2>/dev/null'
            }
        }
        stage('Connect to EKS cluster') {
            steps {
                sh 'aws eks update-kubeconfig --name jenkins-test --region us-east-2'
            }
        }
        stage('Update the deployments with latest image') {
            steps {
                sh 'kubectl set image deployment be-api-gateway-deployment be-api-gateway-container=ghcr.io/sumanthmysore/jenkins-bc67-be-api-gateway:${tag}'
                sh 'kubectl set image deployment be-businessdetails-deployment be-businessdetails-container=ghcr.io/sumanthmysore/jenkins-bc67-be-businessdetails:${tag}'
                sh 'kubectl set image deployment be-service-registry-deployment be-service-registry-container=ghcr.io/sumanthmysore/jenkins-bc67-be-service-registry:${tag}'
                sh 'kubectl set image deployment be-transactions-deployment be-transactions-container=ghcr.io/sumanthmysore/jenkins-bc67-be-transactions:${tag}'
                sh 'kubectl set image deployment be-users-deployment be-users-container=ghcr.io/sumanthmysore/jenkins-bc67-be-users:${tag}'
            
                sh 'kubectl set image deployment fe-deployment fe-container=ghcr.io/sumanthmysore/jenkins-bc67-fe:${tag}'
            }
        }
    }
}