pipeline {
    agent any  // Use any available agent

    environment {
        // Define any environment variables here if needed
        NODE_ENV = 'development'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the repository
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                script {
                    // Ensure Node.js is installed, otherwise use nvm or n
                    sh 'npm install'
                }
            }
        }

        stage('Run Playwright Tests') {
            steps {
                // Run Playwright tests
                script {
                    // Run the tests using Playwright
                    sh 'npx playwright test'
                }
            }
        }

        stage('Archive Test Results') {
            steps {
                // Archive the test results if needed
                junit '**/test-results/*.xml' // This depends on your test framework and its output format
            }
        }
    }

    post {
        always {
            // This section runs after the pipeline finishes, regardless of success/failure
            echo 'Cleaning up resources...'
        }
        success {
            // Actions to take if the pipeline is successful
            echo 'Pipeline completed successfully!'
        }
        failure {
            // Actions to take if the pipeline fails
            echo 'Pipeline failed. Check logs for errors.'
        }
    }
}
