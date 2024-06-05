# SmartTraker-Challenge
Smart Traker blog application repository

# Project Deployment Guide

## Local Deployment

To deploy this project locally, follow these steps:

1. **Environment Setup**
   - Place the `.dev.env` and `.prod.env` files in the `server/` directory. These files should contain your environment-specific variables.

2. **Start the Application**
   - Run the following command to start the application using Docker Compose:
     ```
     docker-compose up -d
     ```

3. **Containers Overview**
   - The Docker Compose process will create three containers:
     - `mongodb`: The MongoDB database service.
     - `react-app`: The React front-end application.
     - `node-app`: The Node.js back-end application.

4. **Accessing the Application**
   - Once the containers are up and running, you can access the application at:
     - **Frontend**: `http://localhost:3000`
     - **Backend**: `http://localhost:8080`
     - **Database**: MongoDB service will be available on port `27017`.

## Additional Notes

- Ensure Docker and Docker Compose are installed on your local machine.
- The `.dev.env` and `.prod.env` files should be properly configured with all necessary environment variables for your application to run smoothly.


