---
title: "Trigger and Rollback"
description:
type: developer-guide
date: 2019-10-25T12:39:12+05:30
pre: "a. "
weight: 320
---
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

![View details or logs](/images/core-concepts/builds/trigger-rollback-view-deails.png?classes=border,shadow&width=50pc)

You may also **Rollback** to a previous build generation number, if there is any,
irrespective of the previous build status. Rollbacking to a previous build does
not restart the build process. Instead, it would run the corresponding docker
container that was created for that build generation.

The **Current build generation** number is shown below the package ID.

![Current build generation number](/images/core-concepts/builds/current-build-number.png?classes=border,shadow&width=50pc)

When you deploy a package, the deployment process automatically chooses the
current build generation number. Once a package is deployed, the build generation
number used in the deployment process is displayed adjacent to the package name.

![Build generation number during deployment](/images/core-concepts/builds/build-number-deploy.png?classes=border,shadow&width=50pc)

The builds are automatically restarted on software infrastructure failures.
If you observe that the build logs are abruptly disconnected or stopped,
click **Refresh**.

When a build fails, you should analyse the corresponding
[build logs](/developer-guide/tooling-automation/logging/build-logs/)
for debugging.