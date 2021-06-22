---

title: "Creating Debug Environment"
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.
weight: 336
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


## Creating a Cloud Debug Environment

You can create a debug environment for any cloud runtime component in a deployment. Do the following to create a debug environment

{{%notice note%}}
Debug environment works best if your cloud runtime component is at least above 1 core i.e small.
{{%/notice%}}

1. On the deployment details page, click the **Debug Environment** drop-down menu, select the component and then select the executable for which you want to create a debug environment. The **Create New Debug Environment** page is displayed.
![debug-capability](/images/core-concepts/deployments/create-debug-env.png?classes=border,shadow&width=25pc)

3. In the **Name** field, type a name for the debug environment.
{{%notice note%}}
Same debug environment with different names throws an error  in the same project.
{{%/notice%}}

4. Click the capabilities that you want to use to debug the executable.

    * **IDE**
    * **Shell**
    * **Rviz**
    * **RQT**

5. Click **Connect**. It takes few minutes and the debug environment is created.

  {{%notice note%}}
  After the debug environment is created, copy the **Access Key** to a clipboard. You will need the access key as the password to access any capability of this debug environment.

  {{% /notice%}}

### Debugging using Capabilities

After you have created a debug environment, click the environment to debug your application. You can use one or more of the following capabilities to debug your executable. 

#### IDE
To debug using IDE capability, do the following.

1. After your debug environment is created, navigate to the debug environment by clicking the **Debug environment** drop-down.

2. Click **IDE** as the capability.

3. Enter the access key as the password when prompted. An online VS code editor is displayed. The browser based editor allows you to do the following.

![IDE](/images/core-concepts/deployments/ide.png?classes=border,shadow&width=50pc)
  * To edit the source code, navigate to the directory and click the file to edit your executable.
  * To open a terminal from the IDE, click the hamburger menu in the VS code editor and click **Terminal > New Terminal**.
  * After you make the required changes, to restart your executable using catkin build recipe, type `restart-deployment-executable` in the terminal. It takes few minutes to restart and the updated changes are reflected in the deployment. For other types of docker images [click here](/5_deep-dives/52_software-development/529_debug-environment/#docker-image-support-for-debug-environment).
  
#### Shell
To debug using the Shell capability, do the following.

1. After your debug environment is created, navigate to the debug environment by clicking the **Debug environment** drop-down.

2. Click **Shell** as the capability.

3. Enter the access key as the password when prompted. A GUI based Shell is displayed and allows you to run custom commands or open tools like RQT and RVIZ. 

![shell](/images/core-concepts/deployments/shell.png?classes=border,shadow&width=50pc)

#### RQT
To visualize your ROS components in a deployment using the RQT tool, do the following.

1. After your debug environment is created, navigate to the debug environment by clicking the **Debug environment** drop-down.

2. Click **RQT** as the capability.

3. Enter the access key as the password when prompted. A RQT tool is displayed. You can visualise the graphical representation of your ROS nodes in your deployment. For more information about using the RQT tool, [click here](http://wiki.ros.org/rqt)

![rqt](/images/core-concepts/deployments/rqt.png?classes=border,shadow&width=50pc)
 

#### RVIZ
To view the 3D model of your robot using the RVIZ capability, do the following.

1. After your debug environment is created, navigate to the debug environment by clicking the **Debug environment** drop-down.

2. Click **RVIZ** as the capability.

3. Enter the access key as the password when prompted. A RVIZ tool is displayed with a 3D model of your components.

![rviz](/images/core-concepts/deployments/rviz.png?classes=border,shadow&width=50pc)
 
4. To add a new display, click **Add** in the RVIZ UI. For more information about using the RVIZ tool, [click here](http://wiki.ros.org/rviz/UserGuide).

## Updating a Cloud Debug Environment

The update functionality of a debug environment allows you to add or remove debug capability for the environment. Do the following to update a debug environment.

1. Navigate to the debug environment in the deployments details page and click **Update**.

2. Select the capability that you want to add to the debug environment or de-select the capability to remove any capability from the debug environment. 

3. Click **Update**. The debug environment is updated.

## Deleting a Cloud Debug Environment

To delete a cloud debug environment, do the following.
{{%notice note%}}
Before you start deleting or deprovisioning a deployment, ensure that you have deleted the debug environment connected with the deployment.
{{%/notice%}}

1. Navigate to the debug environment in the deployments details page and click **Delete**.
2. A confirmation page is displayed. 
## Related Links
* [About Debug Environment](/5_deep-dives/52_software-development/529_debug-environment/)
