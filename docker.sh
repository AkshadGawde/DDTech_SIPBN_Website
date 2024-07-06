#!/bin/bash

# Build the Docker image with the tag "akshad_website"
docker build -t akshad_website .

# Run a Docker container from the "akshad_website" image and map port 3000
docker run -p 3000:3000 akshad_website  
