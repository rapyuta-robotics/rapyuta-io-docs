---
title: "Builds"
description:
type: core-concepts
date: 2018-11-15T14:01:26+05:30
pre: "f. "
weight: 150
---
An executable of a component can be either a source code file or a docker
file in a git repository or a docker image file.

## Build strategies
rapyuta.io builds ROS and non-ROS packages using various build strategies.
The ***ROS Engine*** selects an appropriate build strategy based on
whether the package contains a git repository with Dockerfile or
without it or a docker image.

If the **Executable Type** is **Git**, you must provide a git repository
url address.

The goal of each build strategy is to generate a running docker container
at the end of package creation.

You may analyse [build logs](/core-concepts/logging/build-logs) for
debugging build failures. In the case of source code and Dockerfile
strategies, you can
[trigger new builds or roll back previous builds](/core-concepts/builds/trigger-rollback).

### Source code strategy
This strategy builds source code files into a docker image. The source code
is usually stored in a git repository. If it is a private git repository,
you need to [add a source secret](/core-concepts/secrets/source-secret)
to access the repository contents. rapyuta.io uses ***ROS Builder***, a
subset of *catkin build*, to build source code into a docker image.

Suppose you want to add a git repository url say
https://github.com/rapyuta-robotics/io_tutorials,
where *io_tutorials* is the project repository (folder) containing source
code on the master branch and is hosted on GitHub.

If you want to add source code located on a different branch say
*io_turtlesim_qos* of the same project, your git repository url
will look like:
https://github.com/rapyuta-robotics/io_tutorials#io_turtlesim_qos

The [ROS Publisher Subscriber](/dev-tutorials/ros-publisher-subscriber)
tutorial is an example of source code build strategy.

### Dockerfile strategy
This strategy builds a [Dockerfile](https://docs.docker.com/engine/reference/builder/) into a docker image. The Dockerfile is
usually saved in a git repository. If it is a private git repository,
you need to [add a source secret](/core-concepts/secrets/source-secret)
to access the repository contents.
{{% notice info %}}
The maximum size of a docker image for cloud deployment is **10GB**.
{{% /notice %}}

You may explicitly specify the absolute path of Dockerfile, or
rapyuta.io defaults the root of the git repository as the location of the Dockerfile.

### Docker image strategy
This strategy builds a docker image locally. The docker image is usually
stored in either a public docker registry (i.e., Dockerhub) or a private
docker registry. You need to [add a docker pull secret](/core-concepts/secrets/docker-pull-secret/) for rapyuta.io to access a private docker image.

The [Control onboard LED tutorial](/dev-tutorials/control-onboard-led)
illustrates docker image build strategy.
