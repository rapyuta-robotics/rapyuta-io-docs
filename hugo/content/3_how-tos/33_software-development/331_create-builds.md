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
  
  
  ## Creating Build by Catkin recipe 

To create a build using katkin receipe, do the following. 

1. On the left navigation bar, click **Development>Builds**.

2. Click on **ADD NEW BUILD**.

3. Under **Git info** tab, do the following.

    a. In the **Build Name** field, enter a name for the build.

    b. Select the build recipe as **Catkin**.

    c. In the **Repository (URL)** field, enter the URL of the git repository from which you want to create a build. For example, `https://github.com/rapyuta/io_tutorials`.

    d. Optionally, if the git repository is a private git, then click the **Private Git** radio button and select the credential from the **Credential** drop-down menu. If you have not created any secret for the repository, [create a source secret]({{< ref "/3_how-tos/31_account-management/313_authorize-access-to-private-git-repositories-using-secrets.md">}}).

    e. Optionally, you can specify the **Context Directory** field by entering the path of the directory where you want to create the build.

    f. Click **Next**. 

  ![goo](/images/core-concepts/builds/build-creation/catkin-recipe.png?classes=border,shadow&width=30pc)



4. Under the **Build Info** tab, do the following.

    a. In the **Architecture** area, select the processor architecture for the build. The available options are:
  ​    <ul>
  ​    <li>arm32v7</li>
  ​    <li>arm64v8</li>
  ​    <li>amd64</li>
  ​    </ul>

    b. Optionally, if the build has a simulation option, click the **Has Simulation** radio-button.

    c. In the **ROS Version** area, select the ROS version. The available options are:
  ​    <ul>
  ​    <li>Kinetic</li>
  ​    <li>Melodic</li>
  ​    </ul>

    d. Optionally, to add ROS parameter to the build, in the **CATKIN BUILD PARAMETERS** area, click **Add Parameter**.

    e. Click **Next**.

  ![goo](/images/core-concepts/builds/build-creation/catkin-build-info.png?classes=border,shadow&width=30pc)

5. The **rapyuta.io** platform allows you to push and save the build image to an external docker registry.To push and save the build image to the private registry, do the following.

    a. Under the **Docker Secret** tab, click the **Docker Push Secret**  toggle button.

    b. In the **Image Repository** field, enter the URL of the private repository where you want to push and save the image for later usage. For example, ```docker.io/your-username/repo-name.``` 

    c. From the **Push secret** drop-down menu, select the secret for the repository. If you have not created any secret for the repository, [create a secret]({{< ref "/3_how-tos/31_account-management/314_authorize-access-to-private-docker-registry-using-secrets.md">}}).

    d. Click **Next**.

  ![goo](/images/core-concepts/builds/build-creation/catkin-push-secret.png?classes=border,shadow&width=30pc)

  The build is created.

  ## Creating Build by Docker recipe 

 To create a build using docker recipe, do the following.

1. On the left navigation bar, click **Development>Builds**

2. Click on **ADD NEW BUILD**.

3. Under **Git info** tab, do the following.

    a. In the **Build Name** field, enter a name for the build.

    b. Select the build recipe as **Docker**.

    c. In the **Repository (URL)** field, enter the URL of the git repository from which you want to create a build. For example, `https://github.com/rapyuta/io_tutorials`.

    d. Optionally, if the git repository is a private git, then click the **Private Git** toggle button and select the credential from the **Credential** drop-down menu. If you have not created any secret for the repository, [create a source secret]({{< ref "/3_how-tos/31_account-management/313_authorize-access-to-private-git-repositories-using-secrets.md">}}).

    e. Optionally, you can specify the **Context Directory** field by entering the path of the directory where you want to create the build.

    f. Click **Next**. 

  ![goo](/images/core-concepts/builds/build-creation/docker-recipe.png?classes=border,shadow&width=30pc)

4. Under the **Build Info** tab, do the following.

    a. In the **Architecture** area, select the processor architecture for the build. The available options are:

    * arm32v7</li>
    * arm64v8</li>
    * amd64</li>


    b. In the **Dockerfile path** field, type the path of the docker file that contains the source code.

    c. Optionally, if the build has ROS component, then click the **Has ROS Components** radio-button, select the ROS version as either **Kinetic** or **Melodic**, and if the build has a simulation option, click the **Has Simulation** radio-button.

    d. Click **Next**.

  ![goo](/images/core-concepts/builds/build-creation/docker-build-info.png?classes=border,shadow&width=30pc)

  5. The **rapyuta.io** platform allows you to push and save the build image to an external docker registry or to pull an image from a private repository. To push or pull a docker image file, do the following.

  a. Under the **Docker Secret** tab, click the **Docker Push Secret**  toggle button.
  b. In the **Image Repository** field, enter the URL of the private repository where you want to push and save the image for later usage. ​For example, docker.io/your-username/repo-name. 

  c. From the **Push secret** drop-down menu, select the secret for the repository. If you have not created any secret for the repository, [create a secret]({{< ref "/3_how-tos/31_account-management/314_authorize-access-to-private-docker-registry-using-secrets.md">}}).

  d. Optionally, to pull a secured docker image to the docker file, click the **Docker Pull secret** toggle button and select the secret for the repository. If you have not created any secret for the repository, [create a secret]({{< ref "/3_how-tos/31_account-management/314_authorize-access-to-private-docker-registry-using-secrets.md">}}).

  e. Click **Next**.
  ![goo](/images/core-concepts/builds/build-creation/docker-push-secret.png?classes=border,shadow&width=30pc)


  * You can see the progress of the build, by clicking the build created in the **Builds** page. 

  * Click on **SHOW MORE** to get more details about the build, it will take you to the **Details** tab of the build.

  ## Viewing Build Details

  After you have created a build by either Catkin or Docker recipe, you can view the details of the available builds in your project. Perform the following steps to view the details of a build.

1. On the left navigation bar, click **Developemt>Builds**. All the available builds of the projects are displayed.

  ![goo](/images/core-concepts/builds/build-creation/builds.png?classes=border,shadow&width=45pc)

   The following table displays the details of the available builds.


|Field|Description|
|-----|-----------|
|**Name/ID**| Provides the name of the build.
|**Status**| Provides the following status of the build. <ul><li>BuildInProgress: Displays when the build creation process is in progress.</li><li>Complete: Displays when the build creation process has been successfully completed.</li><li>BuildFailed: Displays if the build creation process has failed.</li></ul>
|**Started**| Provides the time duration when the build creation process has started.
|**Repository**| Provides the repository from which the build has been created.
|**Action**| Allows you to [delete](/developer-guide/create-software-packages/builds/build-creation/#deleting-the-build), [trigger](/developer-guide/create-software-packages/builds/trigger-rollback/), or [clone](/developer-guide/create-software-packages/builds/build-cloning/)  a build. 

2. To view the details of a particular build, click the build. The following image is displayed.

  ![goo](/images/core-concepts/builds/build-creation/build-detail-action.png?classes=border,shadow&width=25pc)

  
  The **Build Details** page allows you to do the following.</br>


  * Click **Delete** to delete the build. 
  * Click [Trigger](/5_deep-dives/52_software-development/522_trigger-and-rollback-builds) to trigger a build. 
  * Click [Clone]({{< ref "/5_deep-dives/52_software-development/521_cloning-builds" >}}) to clone a build within the same or to different projects.
  * Click **Show More** to view the details of the build and view the [build log]({{< ref "/3_how-tos/35_tooling_and_debugging/354_view-deployment-logs" >}}).

  After clicking **Show More**,  the following image is displayed.

  ![goo](/images/core-concepts/builds/build-creation/build-details.png?classes=border,shadow&width=45pc)

  ## Deleting the build

  Follow the below steps to delete the build :

>  Please note that if the build **Status** is *_BuildInProgress_*, then user will not be able to **Delete** the build. Deletion of such builds will fail with the error message : **can't delete the build since its corresponding build request is still in progress**.

1. On the left navigation bar, click **Development>Builds**. It  displays all the builds available for a project.

2. Select the build that you want to delete. 

3. Click **Delete**.

4. Confirm on the build deletion message.

## Cloning a Build

The rapyuta.io platform allows you to clone a build within the same or different project and reduces the time and effort required to create a build from scratch.

Perform the following procedure to clone a build.

1. On the left navigation bar, click **BUILDS**. It displays all the builds available within a project.
2. Select the build that you want to clone and click **Clone Build**. 
3. A dialog box appears and prompts you to select the project where you want to clone the build. Select the project from the drop-down and click **Clone Build**.
![build-clone](/images/core-concepts/builds/build-clone.png?classes=border,shadow&width=25pc)

{{% notice info %}}
If you want to clone a project within the same project, you must rename the build name.
{{% /notice %}}


4. If the build that you are cloning has a secret, the rapyuta.io platform also allows you to clone the secret to the destined project or select a different secret that you want to use in the cloned build. From the **Destination** drop-down menu, select the secret that you want to use in the cloned build and click **Clone**.
![secret-clone](/images/core-concepts/builds/build-creation/secret-clone.png?classes=border,shadow&width=35pc)

{{% notice note %}}
The dialog box to clone secret appears only for the builds that have a secret.
{{% /notice %}}
5. The build creation page appears and allows you to modify the build details. For more information about build creation, [click here](/developer-guide/create-software-packages/builds/build-creation).</br>
6. After reviewing the field details of the build creation pages, click **Next**. The build is cloned to the selected project.

## Related Links

* [About Build](/1_understanding-rio/12_core-concepts/#builds)
* [Trigger and Rollback](/5_deep-dives/52_software-development/522_trigger-and-rollback-builds)
*  [ROS Support](/5_deep-dives/52_software-development/523_ros-support-for-builds)