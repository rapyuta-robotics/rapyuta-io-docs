---
title: "Builds"
description:
type: developer-guide
date: 2019-10-25T12:38:46+05:30
pre: "7. "
weight: 315
---
When defining packages rapyuta.io allows the developer to directly
reference source code from a VCS like GitHub or Bitbucket. The
platform then takes the responsibility of cloning, building and
delivering the software across the cloud and device.

Under the hood, rapyuta.io solves the hard problems of native arm
compiles, software versioning, artifact delivery, transactional
upgrades and provisioning.

With all these features backed by a complete API, it makes it
possible for the developer to automate the flow from
*git to operations* and integrate it with existing CI/CD
systems and QA processes.

## Build Strategies
rapyuta.io builds ROS and non-ROS packages using various build strategies.
The ***Build Engine*** selects an appropriate build strategy based on
whether the package contains a git repository with Dockerfile or
without it or a docker image.

The goal of each build strategy is to generate a running docker container
at the end of the package creation process.

You may analyse [build logs](/developer-guide/tooling-automation/logging/build-logs/) for
debugging build failures. In the case of source code and Dockerfile
strategies, you can
[trigger new builds or roll back previous builds](/developer-guide/create-software-packages/builds/trigger-rollback/).

### Source code strategy
This strategy builds source code into a docker image. The source code
is usually stored in a git repository. If it is a private git repository,
you need to [add a source secret](/developer-guide/create-software-packages/secrets/sourcecode-repository/#creating-source-secret)
to access the repository contents. rapyuta.io uses ***ROS Builder***, a subset of *catkin build*, to build source code into a docker image. If a package contains a ROS component, the component's ROS version can be *Kinetic* or *Melodic*. When building the source code, the ***ROS Builder*** takes into account its corresponding component's ROS version. 

In the **Builds** section to add a new build, add the Build name and provide 
the URL address of git repository. Suppose you want to add the address of a git repository
say https://github.com/rapyuta-robotics/io_tutorials,
where ***io_tutorials*** is the project folder that contains the source
code on the master branch and is hosted on GitHub.

If you want to add source code located on a different branch, say
***io_turtlesim_qos*** of the same project, your git repository URL
will look like:
https://github.com/rapyuta-robotics/io_tutorials#io_turtlesim_qos

The [ROS Publisher Subscriber](/build-solutions/sample-walkthroughs/basic-ros-pubsub/preinstalled-runtime/) walkthrough is an example of
the source code build strategy.

{{% notice info %}}
rapyuta.io supports cross-compilation of source code
to be able to run on devices with *arm64*, *arm32* CPU
architectures.
{{% /notice %}}

{{% notice note %}}
rapyuta.io supports cloning and fetching from repositories
that deal with large files (as large as a couple of GB in size) with
[Git Large File System (LFS)](https://git-lfs.github.com/) extension.
If you want to use Git LFS with a private git repository, you must select *SSH authentication* while [adding a source secret](/developer-guide/create-software-packages/secrets/sourcecode-repository/#creating-source-secret)because the LFS extension will fail with the *Basic authentication*, and the corresponding source secret will not be applied to the private repository.
{{% /notice %}}

### Dockerfile strategy
This strategy builds a [Dockerfile](https://docs.docker.com/engine/reference/builder/) into a docker image. The Dockerfile is
usually saved in a git repository. If it is a private git repository,
you need to [add a source secret](/developer-guide/create-software-packages/secrets/sourcecode-repository/#creating-source-secret)
to access the repository contents.

You may explicitly specify the absolute path of the Dockerfile, or
the root of the git repository is set as the location of the Dockerfile.

The [Basic Web Application](/build-solutions/sample-walkthroughs/basic-web-app/) walkthrough is an example of the dockerfile build strategy.

### Docker image strategy
This strategy uses a pre-built docker image. The docker image is usually
stored in either a public docker registry (i.e., Dockerhub) or a private
docker registry. You need to [add a docker pull secret](/developer-guide/create-software-packages/secrets/docker-registry/) for rapyuta.io to access a private docker image.

{{% notice info %}}
The maximum size of a docker image for cloud deployment is **10GB**.
{{% /notice %}}

If you are going to deploy a docker image onto a device, ensure that the
CPU architecture of the device is compatible with that of the image being
deployed. You may use the ***Build Engine*** for compiling for a different
target architecture.

The [Hardware Interfacing](/build-solutions/sample-walkthroughs/hardware-interfacing/) walkthrough illustrates the docker image strategy.