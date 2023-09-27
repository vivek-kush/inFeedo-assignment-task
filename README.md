# Task Management System

This repository contains a Task Management System that allows you to create, update, and retrieve tasks via a RESTful API. Follow the steps below to get started.

## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/vivek-kush/inFeedo-assignment-task.git
   ```

2. Change your working directory to the cloned repository:
   ```bash
   cd inFeedo-assignment-task
   ```

3. Install the project dependencies using npm:
   ```bash
   npm install
   ```
   
4. Create a `.env` file by copying the content from the `env_template` file:
   ```bash
   cp env_template .env
   ```

## Running the Application

To run the application, follow these steps:

1. Start the server with the following command:
   ```bash
   npm start
   ```

2. The server will be running at `http://localhost:3000`.

## API Documentation

The API provides the following endpoints for managing tasks:

- **Create a Task:** `POST /tasks`
   - Sample curl request:
     ```bash
     curl --location 'http://localhost:3000/tasks' \
     --header 'Content-Type: application/json' \
     --data '{
         "title": "Task 1",
         "description": "Description Task 1",
         "status": "completed"
     }'
     ```

- **Update a Task:** `PUT /tasks/:id`
   - Sample curl request:
     ```bash
     curl --location --request PUT 'http://localhost:3000/tasks/1' \
     --header 'Content-Type: application/json' \
     --data '{
         "status": "open"
     }'
     ```

- **Get All Tasks:** `GET /tasks`
   - Sample curl request:
     ```bash
     curl --location 'http://localhost:3000/tasks?page=1'
     ```

- **Get Task Metrics:** `GET /tasks/metrics`
   - Sample curl request:
     ```bash
     curl --location 'http://localhost:3000/tasks/metrics/'
     ```

Feel free to use these API endpoints to manage your tasks efficiently.