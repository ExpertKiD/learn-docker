# Learn Docker in a day

## Table of Contents

[1. Why use Docker?](#1-why-use-docker)

[2. Introduction to Docker](#2-introduction-to-docker)

## 1. Why use Docker?

Docker wants to make it really easy and really straightforward for you to install and run software on any given 
computer. 

## 2. Introduction to Docker

Docker is a platform or ecosystem around creating and running containers. The ecosystem includes:

1. Docker Client
2. Docker Server
3. Docker Machine
4. Docker Images
5. Docker Containers
6. Docker Hub

## 3. Using the Docker Client

The first command to run is `docker run hello-world`. When we run the command, following things happen in specific order.

1. The **Docker Client** sends the command to **Docker Server**.
2. The server then checks for the image in the **Image Cache**.


    a. If it finds the image, it moves to step 3.
    b. If it does not find the image, it connects to **Docker Hub** and downloads the *image snapshot* into the Image Cache.


