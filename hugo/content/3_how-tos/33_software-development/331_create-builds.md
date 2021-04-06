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
  
  
## Creating Build by Catkin Recipe 

To create a build using the Catkin recipe, do the following. 

1. On the left navigation bar, click **Development>Builds**.

2. Click on **ADD NEW BUILD**.

3. Under **Git info** tab, do the following.

    a. In the **Build Name** field, enter a name for the build.

    b. Select the build recipe as **Catkin**.

    c. In the **Repository (URL)** field, enter the URL of the git repository from which you want to create a build. For example, `https://github.com/rapyuta/io_tutorials`.

    d. In the **Branch** field, enter the branch name of the repository for the build. 
  {{%notice info%}}
  In the **Branch** field, you can also provide any Git reference as valid input. For example, **Commit ID**, **Tag name**, or **Branch name**. If you don't specify any branch name in the **Branch** field, then the default branch name of the repository is considered.
  {{%/notice%}}

    e. Optionally, if the git repository is a private git, then click the **Private Git** radio button and select the credential from the **Credential** drop-down menu. If you have not created any secret for the repository, [create a source secret](/how-to-guides/account-management/setup-private-git-access/#creating-source-secret).

    f. Optionally, you can specify the **Context Directory** field by entering the path of the directory to be used to create the build.

    g. Click **Next**. 

  ![goo](/images/core-concepts/builds/build-creation/catkin-recipe.png?classes=border,shadow&width=30pc)



4. Under the **Build Info** tab, do the following.

    a. In the **Architecture** area, select the processor architecture for the build. The available options are:  **arm32v7**, **arm32v7**, or **amd64**.

    b. Optionally, if the build has a simulation option, click the **Has Simulation** radio button.

    c. In the **ROS Version** area, select either **Kinetic** or **Melodic**.
    
    d. Optionally, to add ROS parameter to the build, in the **CATKIN BUILD PARAMETERS** area, click **Add Parameter**. For details about Catkin build parameters, [Click here](/5_deep-dives/52_software-development/523_ros-support-for-builds).

    e. Click **Next**.

  ![goo](/images/core-concepts/builds/build-creation/catkin-build-info.png?classes=border,shadow&width=30pc)

5. The **rapyuta.io** platform allows you to push and save the build image to an external docker registry. To push and save the build image to the private registry, do the following.

    a. Under the **Docker Secret** tab, click the **Docker Push Secret**  toggle button.

    b. In the **Image Repository** field, enter the URL of the private repository where you want to push and save the image for later usage. For example, ```docker.io/your-username/repo-name``` 

    c. From the **Push secret** drop-down menu, select the secret for the repository. If you have not created any secret for the repository, [create a secret](/how-to-guides/account-management/setup-private-docker-registry/#creating-a-docker-secret).

    d. Optionally, in the **Trigger Name** field, type a name for the trigger. The trigger name can be used to identify the build requests. 

    e. If you have enabled the **Docker Push Secret** toggle button, you can also add a tag name to the build. The tag name is an optional field and can be used as a docker tag in the external docker registry. The trigger name and the tag name can be either the same or different. If you want to have a different tag name, de-select the **Same as Trigger Name** field and type a tag name in the **Tag Name** field.
 {{%notice note%}}
  **Tag Name** field is only available if the **Docker Push Secret** toggle button is enabled.
  {{%/notice%}}

    f. Click **Next**. The build is created.

  ![goo](/images/core-concepts/builds/build-creation/catkin-push-secret.png?classes=border,shadow&width=30pc)

  

## Creating Build by Docker Recipe 

 To create a build using the docker recipe, do the following.

1. On the left navigation bar, click **Development>Builds**

2. Click on **ADD NEW BUILD**.

3. Under **Git info** tab, do the following.

    a. In the **Build Name** field, enter a name for the build.

    b. Select the build recipe as **Docker**.

    c. In the **Repository (URL)** field, enter the URL of the git repository from which you want to create a build. For example, `https://github.com/rapyuta/io_tutorials`.

    d. In the **Branch** field, enter the branch name of the repository for the build. 
  {{%notice info%}}
  In the **Branch** field, you can also provide any Git reference as valid input. For example, **Commit ID**, **Tag name**, or **Branch name**. If you don't specify any branch name in the **Branch** field, then the default branch name of the repository is considered.
  {{%/notice%}}

    e. Optionally, if the git repository is a private git, then click the **Private Git** toggle button and select the credential from the **Credential** drop-down menu. If you have not created any secret for the repository, [create a source secret](/how-to-guides/account-management/setup-private-git-access/#creating-source-secret).

    f. Optionally, you can specify the **Context Directory** field by entering the path of the directory to be used to create the build.

    g. Click **Next**. 

  ![goo](/images/core-concepts/builds/build-creation/docker-recipe.png?classes=border,shadow&width=30pc)

4. Under the **Build Info** tab, do the following.

    a. In the **Architecture** area, select the processor architecture for the build. The available options are:  **arm32v7**, **arm32v7**, or **amd64**.
   
    b. In the **Dockerfile path** field, type the path of the docker file that contains the source code. The docker file path is relative to the **Context Directory** field.

    c. Optionally, if the build has ROS component, then click the **Has ROS Components** radio button, select the ROS version as either **Kinetic** or **Melodic**, and if the build has a simulation option, click the **Has Simulation** radio button.

    d. Click **Next**.

  ![goo](/images/core-concepts/builds/build-creation/docker-build-info.png?classes=border,shadow&width=30pc)

5. The **rapyuta.io** platform allows you to push and save the build image to an external docker registry or to pull an image from a private repository. To push or pull a docker image file, do the following.

    a. Optionally, to pull a secured docker image to the docker file, click the **Docker Pull secret** toggle button and select the secret for the repository. You can enable this option if the docker file requires a base image from the private registry. If you have not created any secret for the repository, [create a secret](/how-to-guides/account-management/setup-private-docker-registry/#creating-a-docker-secret).

    b. Optionally, if you want to push the build image to a private registry, click the **Docker Push Secret**  toggle button and select the secret for the repository. If you have not created any secret for the repository, [create a secret](/how-to-guides/account-management/setup-private-docker-registry/#creating-a-docker-secret).

    c. Optionally, in the **Trigger Name** field, type a name for the trigger. The trigger name can be used to identify the build requests. 

    d. If you have enabled the **Docker Push Secret** toggle button, you can also add a tag name to the build. The tag name is an optional field and can be used as a docker tag in the external docker registry. The trigger name and the tag name can be either the same or different. If you want to have a different tag name, de-select the **Same as Trigger Name** field and type a tag name in the **Tag Name** field.
 {{%notice note%}}
  **Tag Name** field is only available if the **Docker Push Secret** toggle button is enabled.
  {{%/notice%}}
    e. Click **Next**.

![goo](/images/core-concepts/builds/build-creation/docker-push-secret.png?classes=border,shadow&width=30pc)


  * You can see the progress of the build, by clicking the build created in the **Development>Builds** page. 

  * Click on **SHOW MORE** to get more details about the build, it will take you to the **Details** tab of the build. If you want to view the build history, click the **Build History** tab. 

{{%notice info%}}
The **Build History** tab displays the trigger/tag name if added during the build creation. If you haven't added any trigger name to the build, it displays a default trigger name.
{{%/notice%}}

## Viewing Build Details

After you have created a build by either Catkin or Docker recipe, you can view the details of the available builds in your project. Perform the following steps to view the details of a build.

1. On the left navigation bar, click **Developemt>Builds**. All the available builds of the projects are displayed.

  ![goo](/images/core-concepts/builds/build-creation/builds.png?classes=border,shadow&width=45pc)

   The following table displays the details of the available builds.


|Field|Description|
|-----|-----------|
|**Name/ID**| Provides the name of the build.
|**Status**| Provides the following status of the build. <ul><li>BuildInProgress: Displays when the build creation process is in progress.</li><li>Complete: Displays when the build creation process has been completed.</li><li>BuildFailed: Displays if the build creation process has failed.</li></ul>
|**Started**| Provides the time duration when the build creation process has started.
|**Repository**| Provides the repository from which the build has been created.
|**Action**| Allows you to delete, trigger, or clone a build. 

2. To view the details of a particular build, click the build. The following image is displayed.

  ![goo](/images/core-concepts/builds/build-creation/build-detail-action.png?classes=border,shadow&width=25pc)
  
  The **Build Details** page allows you to do the following.</br>


  * Click **Delete** to delete the build. 
  * Click **Trigger** to trigger a build. 
  * Click **Clone** to clone a build within the same or to different projects.
  * Click **More** to view the details of the build and view the build logs.
  * Click **Edit** to update the details of the build.


  After clicking **More**,  the following image is displayed.

  ![goo](/images/core-concepts/builds/build-creation/build-details.png?classes=border,shadow&width=45pc)

## Updating the Build

The rapyuta.io platform also allows you to edit and update your build. Perform the following procedure to edit or update your build.

1. On the left navigation bar, click **Development>Builds**. It displays all the builds available for a project.

2. Click the build that you want to edit. The **Build Details** page appears. 

3. In the **Build Details** page, click **Edit**. The **Edit Build Details** page appears.
   In the **Edit Build Details** page, you can edit the following fields of the build.    For the following field descriptions, see the procedures to create builds by using [Catkin](/3_how-tos/33_software-development/331_create-builds/#creating-build-by-catkin-recipe) or [Docker](/3_how-tos/33_software-development/331_create-builds/#creating-build-by-docker-recipe) recipe.
   * **Repository**
   * **Branch**
   {{%notice info%}}
   If you provide a branch name in the **Repository** field and provide another branch name in the **Branch** field, the **Branch** field name takes precedence.
   {{%/notice%}}
   * **Private Git?** and **Credentials** for a private repository
   * **Context Directory**
   * **Dockerfile Path**
   * **Catkin Parameters**: This field is editable for Catkin build recipe only.
   * **Docker Pull Secret**: This field is editable for Docker build recipe only.
   * **Image Repository**: This field is editable for Docker build recipe only.


4. Click **Next**. The build is getting updated, and you can view the updated details by clicking the build on the **Development>Builds** page.

{{%notice note%}}
After you edit and update the build, you must [trigger](/5_deep-dives/52_software-development/522_trigger-and-rollback-builds) the build for the updates to be applied. 

{{%/notice%}}

## Deleting the Build

{{% notice info %}}
Note that if the build **Status** is *_BuildInProgress_*, then the user will not be able to **Delete** the build. Deletion of such builds will fail with the error message: **can't delete the build since its corresponding build request is still in progress**.
{{% /notice %}}

To delete a build, do the following.

1. On the left navigation bar, click **Development>Builds**. It displays all the builds available for a project.

2. Select the build that you want to delete. 

3. Click **Delete**.

4. Confirm the build deletion message. The build is deleted from the rapyuta.io platform.

## Cloning a Build

The rapyuta.io platform allows you to clone a build within the same or different project and reduces the time and effort required to create a build from scratch.

Perform the following procedure to clone a build.

1. On the left navigation bar, click **Development>Builds**. It displays all the builds available within a project.
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

5. The build creation page appears and allows you to modify the build details. 

6. After reviewing the field details of the build creation pages, click **Next**. The build is cloned to the selected project.

## Related Links

* [About Build](/1_understanding-rio/12_core-concepts/#builds)
* [Trigger and Rollback](/5_deep-dives/52_software-development/522_trigger-and-rollback-builds)
* [ROS Support](/5_deep-dives/52_software-development/523_ros-support-for-builds)