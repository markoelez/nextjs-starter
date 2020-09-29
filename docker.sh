#!/bin/bash
docker build -t client .
docker run --name CLIENT_CONTAINER -p 5000:3000 client

