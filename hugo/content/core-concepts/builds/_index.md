---
title: "Builds"
description:
type: core-concepts
date: 2018-11-15T14:01:26+05:30
draft: true
weight: 100
---
An application build is the result of building source code into runnable docker
container. The _Build Engine_ uses a build recipe to build source code.
Builds are automatically triggered when you specify a build recipe and a git
repository while creating a package.

If the **Executable Type** is **Git**, you must provide a git repository url address.
rapyuta.io builds the source code in the git repository into an executable
docker container.

Suppose you want to add a git repository url - https://github.com/rapyuta-robotics/io_tutorials,
where *io_tutorials* is the project repository (folder) containing source code on
the master branch and is hosted on GitHub.

If you want to add source code located on a different branch say *io_turtlesim_qos*
of the same project, your git repository url will look like -  https://github.com/rapyuta-robotics/io_tutorials#io_turtlesim_qos

### Trigger new builds and Rollback to previous builds
Consider a package whose executable is a git repository. The source code in the
git repository is built into a runnable docker container. Each time you update
the source code in the repository you expect the changes to be reflected the
next time you deploy the package, that is you expect the executable to pick up
the latest git commit hash of the repository. Thus, you’ll trigger a new build
for the package.

When you add a package, the **Builds** tab displays information about the current
build such as build generation number, time of build generation, name of the
user who triggered the build, the status of build and error message if there is
any.

Suppose the current build generation number is _i_. If you update the source code
in the git repository, you may want to trigger a new build for building the same
package so as to reflect the new code changes. As a result, a new build
generation number _(i+1)_ is generated. To trigger a new build for a package,
click **Trigger build**.

You may always **Trigger** a new build irrespective of the status of the previous
build. That is you can trigger a new build from either a **Complete** build or an
**Error** build. However, only those builds that are **Complete** are suitable for
provisioning. The **Failed** builds are unfit for provisioning.

Besides the names of the components and the executables that constitute a
package, you may also view details such as the git repository url where the
source code is hosted, the latest commit SHA number, the commit message and
the commit owner’s name by clicking **View details/logs**.

<!--->
insert view details/logs image
<--->

You may also **Rollback** to a previous build generation number, if there is any,
irrespective of the previous build status. Rollbacking to a previous build does
not restart the build process. Instead, it would run the corresponding docker
container that was created for that build generation.

The **Current build generation** number is shown below the package ID.
<!--->
insert build generation image
<--->

When you deploy a package, the deployment process automatically chooses the
current build generation number. Once a package is deployed, the build generation
number used in the deployment process is displayed adjacent to the package name.

<!--->
insert build number after package deployment image
<--->

The builds are automatically restarted on software infrastructure failures.
If you observe that the build logs are abruptly disconnected or stopped,
click **Refresh**.

When a build fails, you should analyse the corresponding build logs for debugging.
