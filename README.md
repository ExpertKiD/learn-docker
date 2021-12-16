# Learn Docker in a day

## Table of Contents

1. [Why use Docker?](#1-why-use-docker)<br/>
2. [Introduction to Docker](#2-introduction-to-docker)<br/>
 
    2.1. [What are docker image and docker container?](#21-what-are-docker-image-and-container)<br/>

3. [Using the Docker Client](#3-using-the-docker-client)<br/>
    3.1. [Using the docker run command](#31-using-the-docker-run-command)<br/>

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

### 2.1. What are Docker Image and Container?

Linux OS has two features that really make docker happen. The two features are:

1. NameSpacing
   - **Definition** - Isolating resources per process (or group of processes)

2. Control Groups(cgroups)
   - **Definition** - Limit amount of resources used per process.

You use these two features to separate the file system and the physical resources into small modules or *containers*.

Hence, an *image* is a single file with all the dependencies and configuration required to run a program. It includes the
*file snapshot* and the *startup command* to execute when starting the container. A container then, is an instance of an
image that runs a program. The container is isolated from the main operating system and has its own resources and filesystem.

**Note:** Containers can only exist on Linux. So, when you install docker on your system, you are actually installing a Linux
VM if you are not using Linux as OS.

## 3. Using the Docker Client

The **docker client** provides us with the `docker` cli command. You can run `docker` on the command line to see the list
of commands.

Command:
```
docker 

or

docker --help
```

**Syntax:** `docker [options] command`

**Example:**
```
suman@ubuntu-local:~$ docker 

Usage:  docker [OPTIONS] COMMAND

A self-sufficient runtime for containers

Options:
      --config string      Location of client config files (default "/home/suman/.docker")
  -c, --context string     Name of the context to use to connect to the daemon (overrides DOCKER_HOST env var and default
                           context set with "docker context use")
  -D, --debug              Enable debug mode
  -H, --host list          Daemon socket(s) to connect to
  -l, --log-level string   Set the logging level ("debug"|"info"|"warn"|"error"|"fatal") (default "info")
      --tls                Use TLS; implied by --tlsverify
      --tlscacert string   Trust certs signed only by this CA (default "/home/suman/.docker/ca.pem")
      --tlscert string     Path to TLS certificate file (default "/home/suman/.docker/cert.pem")
      --tlskey string      Path to TLS key file (default "/home/suman/.docker/key.pem")
      --tlsverify          Use TLS and verify the remote
  -v, --version            Print version information and quit

Management Commands:
  app*        Docker App (Docker Inc., v0.9.1-beta3)
  builder     Manage builds
  buildx*     Build with BuildKit (Docker Inc., v0.6.3-docker)
  config      Manage Docker configs
  container   Manage containers
  context     Manage contexts
  image       Manage images
  manifest    Manage Docker image manifests and manifest lists
  network     Manage networks
  node        Manage Swarm nodes
  plugin      Manage plugins
  scan*       Docker Scan (Docker Inc., v0.9.0)
  secret      Manage Docker secrets
  service     Manage services
  stack       Manage Docker stacks
  swarm       Manage Swarm
  system      Manage Docker
  trust       Manage trust on Docker images
  volume      Manage volumes

Commands:
  attach      Attach local standard input, output, and error streams to a running container
  build       Build an image from a Dockerfile
  commit      Create a new image from a container's changes
  cp          Copy files/folders between a container and the local filesystem
  create      Create a new container
  diff        Inspect changes to files or directories on a container's filesystem
  events      Get real time events from the server
  exec        Run a command in a running container
  export      Export a container's filesystem as a tar archive
  history     Show the history of an image
  images      List images
  import      Import the contents from a tarball to create a filesystem image
  info        Display system-wide information
  inspect     Return low-level information on Docker objects
  kill        Kill one or more running containers
  load        Load an image from a tar archive or STDIN
  login       Log in to a Docker registry
  logout      Log out from a Docker registry
  logs        Fetch the logs of a container
  pause       Pause all processes within one or more containers
  port        List port mappings or a specific mapping for the container
  ps          List containers
  pull        Pull an image or a repository from a registry
  push        Push an image or a repository to a registry
  rename      Rename a container
  restart     Restart one or more containers
  rm          Remove one or more containers
  rmi         Remove one or more images
  run         Run a command in a new container
  save        Save one or more images to a tar archive (streamed to STDOUT by default)
  search      Search the Docker Hub for images
  start       Start one or more stopped containers
  stats       Display a live stream of container(s) resource usage statistics
  stop        Stop one or more running containers
  tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
  top         Display the running processes of a container
  unpause     Unpause all processes within one or more containers
  update      Update configuration of one or more containers
  version     Show the Docker version information
  wait        Block until one or more containers stop, then print their exit codes

Run 'docker COMMAND --help' for more information on a command.
```

### 3.1 Using the `docker run` command

The first command to run is `docker run hello-world`. When we run the command, following things happen in specific order.

```
docker run hello-world
```

1. The **Docker Client** sends the command to **Docker Server**.
2. The server then checks for the image in the **Image Cache**.
   1. If it finds the image, it moves to step 3.
   2. If it does not find the image, it connects to **Docker Hub** and downloads the *image snapshot* into the Image Cache.
3. The Docker Server then *creates* the **Container** along with the commands.
4. The Docker Server then *starts* the container.
5. After that, the docker server stops the container or continually runs the container until it finishes.

You can verify the above run command from below output.

**Output:**
```
suman@ubuntu-local:~$ docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
2db29710123e: Pull complete 
Digest: sha256:cc15c5b292d8525effc0f89cb299f1804f3a725c8d05e158653a563f15e4f685
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit: https://docs.docker.com/get-started/
```


###


