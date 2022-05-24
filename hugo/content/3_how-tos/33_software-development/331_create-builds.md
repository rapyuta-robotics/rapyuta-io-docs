---
title: "Creating a Build"
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.
weight: 331
versions:
  free-pro-team: '*'
  enterprise-server: '*'

layout: false
permissions: 'rapyuta.io'

showMiniToc: true
miniTocMaxHeadingLevel: 4

allowTitleToDifferFromFilename: false
mapTopic: false
hidden: false


redirect_from: []
gettingStartedLinks : []
popularLinks: []
guideLinks: []
introLinks: {}
tags:
  - How to
---
  
  
## Creating Build Using the Catkin or Docker Recipe 

To create a build using the Catkin or Docker recipe: 

1. In the rapyuta.io console, on the left navigation bar, click **Development > Builds**.

2. Click **ADD NEW BUILD**.

3. In the **Create new build** dialog, under **Git info**, enter:

  | Field | Description |
  | --- | -------|
  | Name | Enter a build name. The name should only contain alphanumeric characters, underscore and hyphen. It should not start with a digit and the length should be between 3 and 75  characters.|
  | Build Recipe | Select **Catkin** or **Docker**.|
  | Repository (URL) | Enter the URL of the git repository from which you want to create a build. For example, `https://github.com/rapyuta/io_tutorials`.|
  | Branch | Enter the branch name of the repository for the build. <br> **Note:**<br>In the Branch field, you can also provide any Git reference as valid input. For example, Commit ID, Tag name, or Branch name. If you don’t specify any branch name in the Branch field, then the default branch name of the repository is considered. |
  | Private Git | Enable the **Private Git** toggle button if it is a private git repository. Additionally, select the **Credentials** from the dropdown list. To create a secret for the repository, see [Create a Source Secret](/how-to-guides/account-management/setup-private-git-access/#creating-source-secret). |
  | Context Directory | Enter the directory path to create the build.|

4. Click **Next**.
   
5. Under **Build Info**, enter:
   
  | Field | Description |
  | --- | -------|
  | Architecture | Select the processor architecture for the build. The available options are; **arm32v7**, **arm32v7**, or **amd64**.|
  | Dockerfile Path (applicable only for Docker recipe) | Enter the path of the docker file that contains the source code. The docker file path is relative to the Context Directory field.  |
  | Has ROS Components (applicable only for Docker recipe) | Enable if the build has ROS components. |
  | Has Simulation | Enable the **Has Simulation** toggle button if the build has a simulation.|
  | ROS Version | Select either **Kinetic** or **Melodic**. <br> {{%notice note%}} As Kinetic has reached the EOL, it is suggested to select **Melodic** as the ROS version  while creating a build.
  {{%/notice%}}|
  | Add Parameter (applicable only for Catkin recipe) | Select this option to add ROS parameter to the build. For more information about adding parameters, see  [Builds: ROS Support](/5_deep-dives/52_software-development/523_ros-support-for-builds).|
  
6. Click **Next**.
  
5. rapyuta.io platform allows you to push and save the build image to an external docker registry or to pull an image from a private repository. Under **Docker Secret**, enter:

  | Field | Description |
  | --- | -------|
  | Docker Pull Secret (applicable only for Docker recipe)| Enable and select the secret for the repository if you want to pull a secured docker image to the docker file. You can enable this option if the docker file requires a base image from the private registry. To create a secret for the repository, see [Create a Secret](/how-to-guides/account-management/setup-private-docker-registry/#creating-a-docker-secret).|
  | Docker Push Secret | Enable if you want to push the build image to a private registry and select the secret for the repository. To create a secret for the repository, see [Create a Secret](/how-to-guides/account-management/setup-private-docker-registry/#creating-a-docker-secret).|
  | Image Repository | Enter the URL of the private repository where you want to push and save the image for later usage. For example, ```docker.io/your-username/repo-name```.|
  | Push Secret | Select the secret from the dropdown list.  To create a secret for the repository, see [Create a Source Secret](/how-to-guides/account-management/setup-private-git-access/#creating-source-secret). |
  | Trigger Name | Enter a name for the trigger. This is used to identify the build requests. |
  | Tag Name | The tag name is an optional field and can be used as a docker tag in the external docker registry. |
  | Same as Trigger Name | Select this checkbox if you wish to use the **Trigger Name** as the **Tag Name**. |

 7. Click **Next**. The build is created.

 * Click **Show Build** to view the build details.  To view the build history, select the **Build History** tab. 
 * To view the build progress, select the build in the **Development > Builds** page. 

{{%notice info%}}
The **Build History** tab displays the trigger/tag name added during the build creation. If you haven't added any trigger name to the build, it displays a default trigger name.
{{%/notice%}}

## Viewing Build Details

After you have created a build by either Catkin or Docker recipe, you can view the details of the available builds in your project. 

To view the details of a build: 

1. In the rapyuta.io console, on the left navigation bar, click **Development > Builds**.  
All the available builds of the projects are displayed.

The following table displays the details of the available builds.

|Field|Description|
|-----|-----------|
|Name/ID| Specifies the name of the build.
|Status| Specifies the build status. <ul><li>BuildInProgress: Displays when the build creation process is in progress.</li><li>Complete: Displays when the build creation process has been completed.</li><li>BuildFailed: Displays if the build creation process has failed.</li></ul>
|Started| Provides the time at which the build creation process started.
|Repository| Provides the repository from which the build has been created.
|Action| Allows you to delete, trigger, or clone a build. 

2. To view the details of a particular build, select the build. 
The following operations can be performed on the **Build Details** page:</br>

  * Click **Delete** to delete the build. 
  
{{% notice info %}}
If the build **Status** is *_BuildInProgress_*, you cannot **Delete** the build. Deletion of such builds will fail with the error message: **can't delete the build since its corresponding build request is still in progress**.
{{% /notice %}}

  * Click **Trigger** to trigger a build. 

  * Click **Clone** to clone a build within the same or to different projects. This reduces the time and effort to create a build from scratch.<br>
    **Note:**
    <ul><li>If you want to clone a project within the same project, you must rename the build name.</li>
    <li>If the build that you are cloning has a secret, the rapyuta.io platform also allows you to clone the secret to the destined project or select a different secret that you want to use in the cloned build. From the **Destination** drop-down menu, select the secret that you want to use in the cloned build and click **Clone**.</li>
    <li>The dialog box to clone secret appears only for the builds that have a secret.</li>
    <li>The build creation page appears and allows you to modify the build details. </li>

  * Click **Edit** to update the details of the build.<br>
    **Note:**
    <ul><li> If you provide a branch name in the **Repository** field and provide another branch name in the **Branch** field, the **Branch** field name takes precedence.</li> <li>Docker Pull Secret and Image Repository fields can be updated only for docker build recipe.</li><li>Catkin Parameters can be updated only for catkin build recipe. </li><li> After you edit and update the build, you must trigger the build for the updates to be applied. </ul>

  * Click **More** to view the build details.

## Related Links

* [About Build](/1_understanding-rio/12_core-concepts/#builds)
* [Trigger and Rollback](/5_deep-dives/52_software-development/522_trigger-and-rollback-builds)
* [ROS Support](/5_deep-dives/52_software-development/523_ros-support-for-builds)