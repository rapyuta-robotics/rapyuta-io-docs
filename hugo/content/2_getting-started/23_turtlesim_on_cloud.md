---
title: Turtlesim
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.
draft: false
versions:
  free-pro-team: '*'
  enterprise-server: '*'
layout: false
permissions: rapyuta.io
showMiniToc: true
miniTocMaxHeadingLevel: 4
allowTitleToDifferFromFilename: false
mapTopic: false
hidden: false
redirect_from: []
gettingStartedLinks: []
popularLinks: []
guideLinks: []
introLinks: {}
tags:
  - Getting Started
---

Turtlesim is a tool made for teaching ROS and ROS packages.
This tutorial will show you how to set up and run a variation of the ROS Turtlesim on the cloud using rapyuta.io. 

In order to attain a deeper understanding of rapyuta.io, it is highly recommended that developer refer to the following sections in the documentation
- [How To Gudies](/how-to-guides/) for step-by-step instructions on completing tasks on rapyuta.io
- [Deep Dives](/5_deep-dives/) for in-depth documentation 
- [Tutorials](/4_tutorials/) for more nuanced examples


## Learning objectives
The tutorial will show you how to deploy a basic Turtlesim ROS package on the cloud.
The steps mentioned here would help you
 - Create a routed network for ROS Communication
 - Understand packages and how they can be added to your account. 
 - Deploy packages to the cloud
 - Access network endpoints of the cloud deployment
 - Bonus: ROS communication using across deployments and a common routed network


The tutorial will also have a few optional and exploratory steps covering
 - Recording ROS Bag jobs on running deployments
 - Remote SSH for accessing deployments
 - Accessing logs of deployments


### Estimated Time
15 - 30 minutes

### Difficulty
Beginner

### Prerequisites
1. Ensure that the [Google Chrome](https://www.google.com/chrome) browser is installed on the computer.
2. You should have your account setup completed and have 1 Project created. 
3. You should be familiar with the below tools:
	1. UNIX/LINUX [command terminal](https://www.digitalocean.com/community/tutorials/an-introduction-to-the-linux-terminal)
	2. [ROS topics](https://wiki.ros.org/Topics)
	3. [ROS services](https://wiki.ros.org/Services)


## Step 1: Create a Routed Network

rapyuta.io  offers seamless communication between different ROS nodes running on the cloud or on a device. This automaic communication reduces the need to manage shared ROS masters and allows you to focus on building your robotics solution. 

Lets begin by creating a **melodic-cloud-rnet** routed network. 

1. On the left navigation menu, click **Networking** > **Routed Networks**.
2. Click **Add Routed Network**.
3. In the In the **Create new routed network** dialog-box, enter the following details in the respective fields.
   - **Name** : Type ```melodic-cloud-rnet``` as the name of the routed network.
   - **ROS Distro**: From the drop-down menu, select the ROS distro as ```Melodic```.
   - **Runtime**: Select the runtime as ```Cloud```.
   - **Resource Limit**: Select the resource limit as ```Small: 1cpu core, 4Gib memory```.
4. Click **Continue**. 

Your new network would now be provisioned in a few minutes.


> {{%expand "💡 Understand : Routed Networks" %}}

For people familiar with ROS1, discovery & communication between nodes and their advertised topics,services and actions is facilitated via a ROS Master. 
This communication pattern works well on a single machine, or in a local area network [LAN]. 

Key limitation of the ROS1 communication mechanism comes from the fragility of a single ROS Master shared between nodes both on the same device or on the same LAN.  This makes the system specially susceptible to network fluctuations and ROS Master failures. 

ROS Routed networks are a key component in this seamless communication scheme. 
{{%/expand%}}

## Step 2: Import Packages

Software are distributed on rapyuta.io's cloud platform using Packages. 

We will begin with importing the TurtleSim packages into your account. 

1. Import ```Turtle-World``` pacakge into your account
{{< importpackage manifest="https://raw.githubusercontent.com/rapyuta-robotics/io_tutorials/feature/turtlesim-v2/io_turtlesim/manifests/turtle-world.json" >}}


If you want to create your own pacakges, refer to the [how to guide](/3_how-tos/33_software-development/333_create-packages/) and [deep dives](/5_deep-dives/52_software-development/525_package-internals/) on Packages.


> {{%expand "💡 Understand : Packages" %}}
Packages are a way of defining components which need to be deployed together. 

The two packages imported above help to simulate a simple flat 2D world where multiple turtles can be spawned and moved. 

**Turtle-World** provides the simulated world with simple rectangular walls. It also provides services to add and move one or more turtles. 
By default a single turtle is added to the world on staartup. 
Along with running the ros components for the turtle world's rudimentary simulation, 
the package also comes with a Web application to visualize the turtle world and a few developer friendly additions like a notebook server and desktop UI access over WebVNC.

More turtles can be added by deploying the **Turtle Melodic** package. 

It has a simple ros node, no GUI environment and communicates with **Turtle-World** using ROS topics, services and actions over a Routed Network


First examine **Turtle-World** in detail. 

<!---You can go to **Turtle-World**` > **Turtle-World** > Click **Turtle-World**
On the detail page you should try and find the following definitions.-->

- **Turtle-World** has a component which runs on the cloud.
  > In package specification terminology, this is refered to as a component with a cloud runtime. 
- This component runs a simple Docker image on the cloud. 
  > In package specification terminology, this is reffered to as an executable with a docker image reference

  > 💡 Did you find the docker image used in the package?  Look for the docker image name under the executable section

- Cloud Endpoints allow for tcp/http based services in your component to be accesible on the public internet  or to other deployments.
  > In the world package we have added a few note-worthy endpoints. 
  - HTTP endpoint for a simple web-ui to visualize turtles and their world
  - TCP endpoint for websocket connections to  ```rosbridge_server``` 
  - HTTP endpoint exposing a notebook server for you to play with the turtle example and explore the ros workspace
  - VNC endpoint to access the desktop remotely. 

  > 💡 Did you notice the fifth endpoint exposed by the package?
  > - We expose the ssh service as an endpoint. but don't recommend exposing SSH in production environments.
  >  - For accessing your running deployment's shell rapyuta.io offers Remote SSH access from any running deployment's detail page. 

- Configuration Parameters
  - We have defined the default user ```rapyuta```'s password using configuration parameters of the package. 
  > 💡 Did you find the default password set by the package?

{{%/expand%}}



## Step 3: Deploy Packages 

Deployments are instances of running packages. Begin by deploying the **Turtle-World** package.


1. On the left navigation menu, click **Development** >  **Catalog**
2. Click the package **Turtle-World**, and click **Deploy package**.
3. In the **Name of deployment** field, type ```turtlesim-cloud```.
4. Optionally, to add a new ROS bag job to the deployment, click ```Add ROS bag Job```. In the **Name** field, type ```rosbag-all``` and select ```All Topics``` to record.
5. From the  **Routed Network** drop-down menu, select ```melodic-cloud-rnet```.
6. Click **Create Deployment** to proceed. 


Deployment should now start running in the cloud. This usually takes a few minutes. You would be taken to the detail page of the deployment where the progress of the provisioning can be seen. 

When the deployment is running its status should show up as ```Succeeded``` with a green dot next to it. 


## Step 4: Explore Turtle World
Congratulations! You have your first deployment running on rapyuta.io.

Open the **TURTLESIM_WEB** endpoint to access turtlesim world web-ui in a new browser tab. 
   - Try moving the Turtle around using the command interface. 
   - If the Turtle behaves as you expect, you have successfully finished the basic tutorial.


Additionally you can also,
1. Open the **JUPYTER** endpoint to access the notebook server. 
   - Jupyter server has been configured with the python 2 kernel and has python-ros packages installed.
   - Try moving the turtle programatically 
2. Open the **VNC** endpoint to access a complete desktop environment

> 💡 Endpoints can be found on the Deployment Detail Page. They are of the format http://inst-xxxxxxxx:80 ,  https://inst-xxxxxxx:443 


## Bonus : Tools & Debugging

### Remote SSH 
rapyuta.io allows you to access running deployment over a web SSH terminal right from your browser. 
1. Go to **Development** > **Deployment** 
2. Click on the deployment you created above : **turtlesim-cloud**
3. Click on **Shell Access**
4. Click **SSH** on the turtlesim component.

Remote SSH helps you in debugging deployments which are running on the platform, but don't come bundled with remote-debugging tools like webVNC or notebook servers. 

### Logs 
rapyuta.io captures and stores terminal output for your running deployments. 
You can access both the live-logs of a running deployment as well as the historical logs of a deployment which is running or has been stopped recently. 
Historical logs of a deployment are retained for 7 days or more as per your subscription plan. 

To access logs for **turtlesim-cloud**
1. Go to **Development** > **Deployment** 
2. Click on the deployment you created above : **turtlesim-cloud**
3. Click on either **Live Logs**  or **Historical Logs** to see the output generated by the deployment

Read more about logs [here](/3_how-tos/35_tooling_and_debugging/debugging-logs/)
### ROS Bag
rapyuta.io can record rosbags on your running deployments. 

Recording jobs added at the time of deployment creation start and stop with the deployment. 
You can additionally start new rosbag jobs on any running deployment.
You can also stop any rosbag job manually while a deployment is still running.

Rosbag jobs upload the recorded bags to Cloud storage and these bags are avaiable for easy access and archiving even after your deployment stops running. 

To access rosbags recorded on our deployment
1. Go to **Development** > **Deployment** 
2. Click on the deployment you created above : **turtlesim-cloud**
3. Click on **ROS Bag jobs**
4. Click on **Stop** to stop a running job
5. In a few minutes, rosbag job will go from **Stopping** to **Stopped**
6. Rosbags uploaded to cloud storage will appear under **Collected Bags**

Read more about Rosbags on rapyuta.io  [here](/3_how-tos/35_tooling_and_debugging/working-with-rosbags/)



## Bonus : More Turtles
We will now add another turtle into the sim world. 

To do this, import and deploy the **Turtle Melodic** package over the same routed network as **Turtle-World**

1. Import ```Turtle Melodic``` pacakge into your account
{{< importpackage manifest="https://raw.githubusercontent.com/rapyuta-robotics/io_tutorials/feature/turtlesim-v2/io_turtlesim/manifests/turtle-melodic.json" >}}
2. Once the package is imported, you would be automatically taken to the package detail page
3. On the deatil page, press **Deploy package**.
4. Enter the following details in the respective fields.
   - Name of deployment: ```turtle-1```
   - Routed Network: Press Add and select ```melodic-cloud-rnet``` from the network drop-down menu.
5. Click **Create Deployment** to proceed. 

The second turtle should now show up in the Web-UI. 

You can deploy a more Turtles if you want. You can now command two turtles simultaneously.
  
## Cleanup
> 💡 Deployments consume cloud resources which are chargeable beyond your free-tier usage limit. Its advised to deprovision deployments when not in use. 


To deprovision (stop) a running deployment, follow the steps:

1. Go to **Development** > **Deployments**
2. Click **Deprovision** against the running deployment you want to stop.
3. Deployment is successfully deprovisioned when you get a  **DEPLOYMENT STOPPED** message and the corresponding deployment status reads Stopped.
4. Repeat these steps for any deployment you may have created but aren't using anymore. 




