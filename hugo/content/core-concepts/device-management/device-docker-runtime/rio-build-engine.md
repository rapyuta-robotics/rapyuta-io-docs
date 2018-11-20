---
title: "rapyuta.io Build Engine"
description:
type: core-concepts
date: 2018-11-15T10:06:45+05:30
weight: 70
---
The rapyuta.io _Build Engine_ builds source code into a docker image based on the
chosen builder. It supports source, [Dockerfile](https://docs.docker.com/engine/reference/builder/)
and docker image build strategies. Furthermore, it supports builds for
**arm32v7**, **amd64** and **arm64v8** CPU architectures.

* **Source strategy**    
  The source build strategy fetches and builds source code from a git repository.
  If you provide a private git repository, add source secret.
* **Dockerfile strategy**    
  The Dockerfile build strategy requires a Dockerfile. The builder expects a
  valid Dockerfile in the git repository's root. You may also provide the
  absolute path of the Dockerfile.
* **Docker image strategy**    
  In the docker image build strategy, the builder expects the path of a docker
  image registry. If you specify a private docker registry, use docker secret.

Currently, rapyuta.io Build Engine supports only ROS builder.

## ROS builder
ROS builder builds your ROS application(s). Based on the build strategy,
ROS builder builds the source code into a docker image; pushes the image to a
secure docker registry; pulls the image from the secure registry during
deployment and runs the image as a docker container on a device.
