#!/bin/bash

# Get all tasks
curl http://localhost:3000/tasks

# Add a new task
curl -X POST -H "Content-Type: application/json" -d '{"title":"Task 1","description":"Description of Task 1"}' http://localhost:3000/tasks

# Update a task
curl -X PUT -H "Content-Type: application/json" -d '{"title":"Updated Task 1","description":"Updated description"}' http://localhost:3000/tasks/0

# Delete a task
curl -X DELETE http://localhost:3000/tasks/0