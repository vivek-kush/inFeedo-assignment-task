# inFeedo-assignment-task

# Task Management System

## Installation

1. Clone this repository.
2. Install dependencies with `npm install`.
3. create .env file and copy the content from env_template file 


## Running the Application

1. Start the server with `npm start`.
2. The server will be running at `http://localhost:3000`.

## API Documentation

- Create a Task: `POST /tasks` sample curl request: `curl --location 'http://localhost:3000/tasks' \
--header 'Content-Type: application/json' \
--data '{
    "title": "Task 1",
    "description": "Description Task 1",
    "status": "completed"
}'`
- Update a Task: `PUT /tasks/:id` sample curl request: curl --location --request PUT 'http://localhost:3000/tasks/1' \
--header 'Content-Type: application/json' \
--data '{
    "status": "inprogress"
}'
- Get All Tasks: `GET /tasks` sample curl request: curl --location 'http://localhost:3000/tasks?page=1'
- Get Task Metrics: `GET tasks/metrics` sample curl request: curl --location 'http://localhost:3000/tasks/metrics/'

