---
title: "Trigger and Rollback"
description:
type: developer-guide
date: 2019-10-25T12:39:12+05:30
pre: "a. "
weight: 320
---
As a developer you may want to trigger a new build or rollback to a previous build generation. 
The rapyuta.io **BUILDS** allow you to do that.

In the **BUILDS** page select the particular build from the build list and click on **SHOW MORE**, 
this will open the **Details** tab of the selected build. 
It displays information on the build, current build generation number, git repository etc. 

Suppose the current build generation number is _i_. If you update the
source code in the git repository, you may want to trigger a new build to reflect the new code changes. 
As a result, a new build generation number _(i+1)_ is generated. To trigger a new build, 
select the particular build and click **Trigger build** for that build.

You may always **Trigger** a new build irrespective of the status of the previous
build. That is you can trigger a new build from either a **Complete** build or an
**Error** build. However, only those builds that are **Complete** are suitable for
provisioning. The **Failed** builds are unfit for provisioning.

You may also view details such as the git repository URL where the source code is hosted, 
the latest commit SHA number, the commit message and the commit owner’s name by clicking **View details/logs** 
in the **Build history** tab of the build.

![View details or logs](/images/core-concepts/builds/trigger-rollback-view-deails.png?classes=border,shadow&width=50pc)

You may also **Rollback** to a previous build generation number if there
is any, irrespective of the previous build status. Rollbacking to a
previous build does not restart the build process. Instead, it would
run the corresponding docker container that was created for that build generation.

The **Current build generation** number (Gen) is shown below the build ID.

![Current build generation number](/images/core-concepts/builds/current-build-number.png?classes=border,shadow&width=30pc)


The builds are automatically restarted on software infrastructure failures.
Click **Refresh** if you observe that the build logs are abruptly disconnected or stopped

When a build fails, you should analyze the corresponding
[build logs](/developer-guide/tooling-automation/logging/build-logs/) to debug.