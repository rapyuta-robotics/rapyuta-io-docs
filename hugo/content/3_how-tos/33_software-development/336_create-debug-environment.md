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

You can create a debug environment for the cloud runtime component/package for a deployment in 2 ways in the rapyuta.io platform.

{{%notice note%}}
Debug environment works best if your deployments are atleast above 1 core i.e small.
{{%/notice%}}

{{%notice note%}}
Same debug environment with different names throws an error  in the same project.
{{%/notice%}}

1. In the rapyuta.io console, go to **Development > Debug Environment** and click **Add Debug Environment**.
The **Create New Debug Environment** page is displayed.

2. In the **Create New Debug Environment** page, do the following.

  a. In the **Name** field, type a name for the debug environment.
  b. From the **Deployment Name** drop-down menu, select the deployment for which you want to connect to a debug environment.
  c. From the **component Name** and **Executable Name** drop-down menus, select the component and the component that you want to debug respectively.
  d. Click the capabilities that you want to use to debug the executable.

    * **IDE**: 
    * **Shell**
    * **Rviz**
    * **RQT**

  e. Click **Connect**. It takes few minutes and the debug environment is created.

  {{%notice note%}}
  After the debug environment is created, copy the **Access Key**. You will need the access key as the password to log into any debug environment.

  {{% /notice%}}

### Debugging using Capabilities

After you have created a debug environment, click the environment to debug your application. You can use one of the following capabilities to debug your executable. 

#### IDE
To debug using IDE capability, do the following.
1. Click the debug environment and then click **IDE**. You will be prompted to enter a password.

2. Enter the access Key as the password when prompted. An online VS code editor is displayed. The browser based editor allows you to do the following.

  * To edit the source code, navigate to the directory and click the file to edit your executable.
  * To open a terminal from the IDE, click the hamberger menu in the VS code editor and click **Terminal > New Terminal**.
  * After you make the required changes, to restart your deployment for catkin build, type `restart-deployment-executable` in the terminal. It takes few minutes to restart and the updated changes are reflected in the deployment.
  

####

#### Shell



## Updating a Cloud Debug Environment

## Related Links
* [](/1_understanding-rio/12_core-concepts/#storage)
* [](/3_how-tos/33_software-development/334_deploy-packages)