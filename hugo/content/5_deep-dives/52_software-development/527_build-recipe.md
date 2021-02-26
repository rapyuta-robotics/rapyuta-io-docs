---
title: "Build Recipe"
description:
type: developer-guide
date: 2019-10-25T12:34:38+05:30
# pre: "3. "
weight: 527
tags:
    - Deep Dive
---

## Build Recipes
rapyuta.io builds as *catkin* and *docker* build recipes. 
The goal of each build recipe is to generate a running docker container at the end of the build creation process.

The rapyuta.io platform also allows you to push a docker image to a private registry and you can use the image while creating a package. This helps the user who wants to try out the image on their local machine before deploying it on the device or cloud.

{{% notice note %}}
If you are creating a build with *Docker* recipe and the Dockerfile contains a reference to a private image, then you must specify a docker Secret. The platform will use the docker secret to fetch the private image while building the Dockerfile. If you have not created any secret for the repository, [create a secret](/how-to-guides/account-management/setup-private-git-access/).
{{% /notice %}}

In the **Builds** section to add a new build, add the Build name and provide 
the URL address of git repository. Suppose you want to add the address of a git repositorysay https://github.com/rapyuta-robotics/io_tutorials,
where ***io_tutorials*** is the project folder that contains the source
code on the master branch and is hosted on GitHub.

If you want to add source code located on a different branch, say
***io_turtlesim_qos*** of the same project, your git repository URL
will look like:
https://github.com/rapyuta-robotics/io_tutorials#io_turtlesim_qos

You may analyse [build logs](/3_how-tos/35_tooling_and_debugging/debugging-logs/) for
debugging build failures. If you have pushed a new commit, you can
[trigger new builds or roll back previous builds](/5_deep-dives/52_software-development/522_trigger-and-rollback-builds/).

### Catkin Recipe
This recipe builds ros based source code using catkin into a container image. We allow our users to add any valid [catkin parameters](/5_deep-dives/52_software-development/523_ros-support-for-builds/) in this recipe. 
 

The [ROS Publisher Subscriber](/4_tutorials/41_beginner/415_preinstalled-runtime/) walkthrough is an example of the catkin build recipe.

{{% notice info %}}
rapyuta.io supports cross-compilation of source code
to be able to run on devices with *arm64*, *arm32* CPU
architectures.
{{% /notice %}}

{{% notice note %}}
rapyuta.io supports cloning and fetching from repositories
that deal with large files (as large as a couple of GB in size) with
[Git Large File System (LFS)](https://git-lfs.github.com/) extension.
If you want to use Git LFS with a private git repository, you must select *SSH authentication* while [adding a source secret](/how-to-guides/account-management/setup-private-git-access/) because the LFS extension will fail with the *Basic authentication*, and the corresponding source secret will not be applied to the private repository.
{{% /notice %}}



### Docker Recipe
This recipe builds source code using [Dockerfile](https://docs.docker.com/engine/reference/builder/) into a container image. The Dockerfile is usually saved in your git repository. You may explicitly specify the absolute path of the Dockerfile, or the root of the git repository is set as the location of the Dockerfile.

The [Basic Web Application](/4_tutorials/41_beginner/412_basic-web-app/) walkthrough is an example of the docker build recipe.

{{% notice info %}}
Follow this walkthrough to create and use a [build](/3_how-tos/33_software-development/331_create-builds/).
If it is a private git repository, you need to 
[add a source secret](/how-to-guides/account-management/setup-private-git-access/)
to access the repository contents. 
{{% /notice %}}

If you are going to deploy a docker container image onto a device, ensure that the
CPU architecture of the device is compatible with that of the image being
deployed. You may select the appropriate target architecture while creating the build.


#### Docker Mulitstage Build support

Multistage builds are useful to anyone who has struggled to optimize Dockerfiles while keeping them easy to read and maintain. The rapyuta.io platform supports [multistage build](https://docs.docker.com/develop/develop-images/multistage-build/). For security reasons we do not allow aliases of images to be used in another `FROM`.

#### Working Dockerfile
```python
FROM golang:1.11.0-stretch as builder 
COPY . /build WORKDIR /build 
RUN CGO_ENABLED=0 GOOS=linux go build -o test 
FROM scratch 
COPY --from=builder /build/* /root/
CMD ["/root/test"] 
```


Here golang:1.11-0 stretch is aliased once as builder and COPY command works from it. 


#### Nonworking Dockerfile

```python
FROM golang:1.11.0-stretch as builder

COPY . /build
WORKDIR /build

RUN CGO_ENABLED=0 GOOS=linux go build -o test

FROM scratch as anotherimage

FROM anotherimage

COPY --from=builder /build/* /root/

CMD ["/root/test"]
```

In this command `scratch` image gets aliased into `anotherimage` and we try to `FROM` it. This will cause an error. 
