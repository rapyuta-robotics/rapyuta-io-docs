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

You can create a debug environment for any cloud runtime component in a deployment. 
To create a debug environment:

{{%notice note%}}
Debug environment works best if your cloud runtime component is above 1 core i.e small.
{{%/notice%}}

1. In the rapyuta.io console, on the left navigation bar, click **Development > Deployments** and select the deployment.

2. In the deployment details page, from the **Debug Environment** drop-down, select the component and then select the executable for which you want to create a debug environment. 

3. In the **Create New Debug Environment** page: 

  - Enter the **Name** for the debug environment.
  - Select the capability to debug the executable. The available options are; IDE, SHELL,Rviz, RQT <!-- rviz and rqt not available, confirm -->
  
4. Click **Connect**. 
It takes a few minutes to connect. Once the connection status is **Complete**, the debug environment is created successfully. <!-- where to check connection status ?>
For more information, see [Connection Status of a Debug Environment](/5_deep-dives/52_software-development/529_debug-environment/#connection-status-of-a-debug-environment).

{{%notice note%}}
* Once the debug environment is created, copy the **Access Key** to a clipboard. The access key will be used as the password to access any capability in this debug environment.
* In case your cloud component contains multiple replicas, debug environment will always be connected to the first running replica.
{{%/notice%}}

### Debug using Capabilities

After you have created a debug environment, select the environment to debug your application. You can use one or more of the following capabilities to debug your executable. 

#### IDE
To debug using IDE capability:

1. After you create the debug environment, navigate to the debug environment from the deployments details page.

2. Click **IDE**.

3. Enter the access key as the password and click **Connect**.  
An online VS code editor is displayed. You can perform the following operations:

  * To edit the source code, navigate to the directory and click the file to start editing.
  * To open a terminal from the IDE, select **Application Menu** in left navigation bar and click **Terminal > New Terminal**.
  * After you make the required changes, to restart your executable using catkin build recipe, type `restart-deployment-executable` in the terminal. It takes few minutes to restart and the updated changes are reflected in the deployment. For more information, see [Docker Image Support for Debug Environment](/5_deep-dives/52_software-development/529_debug-environment/#docker-image-support-for-debug-environment).

![IDE](/images/core-concepts/deployments/ide.png?classes=border,shadow&width=50pc)


#### Shell
To debug using the Shell capability:

1.  After you create the debug environment, navigate to the debug environment from the deployments details page.

2. Click **Shell**.

3. Enter the access key as the password and click **Connect**. 
A GUI based shell is displayed and allows you to run custom commands or open tools like RQT and RVIZ.

4. The shell interface also allows you to copy a command from a different window and paste it. To do so, paste the copied command in the clipboard. You can copy commands from the clipboard and paste it in the shell. 
Similarly, if you want to copy any text from the shell, paste it in the clipboard and from the clipboard you can copy the text and use it in other interfaces.

![shell](/images/core-concepts/deployments/shell.png?classes=border,shadow&width=50pc)


#### RQT

To visualize your ROS components in a deployment using the RQT tool:

1. After you create the debug environment, navigate to the debug environment from the deployments details page.

2. Click **RQT**.

3. Enter the access key as the password and click **Connect**. 
 A RQT tool is displayed. You can visualize the graphical representation of your ROS nodes in your deployment. For more information, see [Using RQT Tool](http://wiki.ros.org/rqt)

![rqt](/images/core-concepts/deployments/rqt.png?classes=border,shadow&width=50pc)
 

#### RVIZ

To view the 3D model of your robot using the RVIZ capability:

1. After you create the debug environment, navigate to the debug environment from the deployments details page.

2. Click **RVIZ**.

3. Enter the access key as the password and click **Connect**. 
A RVIZ tool is displayed with a 3D model of your components.

![rviz](/images/core-concepts/deployments/rviz.png?classes=border,shadow&width=50pc)
 
4. To add a new display, click **Add** in the RVIZ UI. For more information, see [Using the RVIZ tool](http://wiki.ros.org/rviz/UserGuide).


## Managing a Cloud Debug Environment

1. To update a debug environment:

  - Navigate to the debug environment in the deployments details page and click **Update**.

  - Select/De-select the capability that you want to add/remove from the debug environment and click **Update**.

2. To view all the available debug environments, navigate to the **Debug Environment** page. All the available debug environments are displayed in a list view.

3. To delete a cloud debug environment, navigate to the debug environment in the deployments details page, click **Delete** and confirm.
  {{%notice note%}}
  Before you start deleting or deprovisioning a deployment, ensure that you have deleted the debug environment connected with the deployment.
  {{%/notice%}}

## Related Links
* [About Debug Environment](/5_deep-dives/52_software-development/529_debug-environment/)
