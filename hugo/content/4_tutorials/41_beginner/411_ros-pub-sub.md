---
title: "Ros Publisher Subsciber"
description:
type: build-solutions
date: 2019-10-24T13:47:13+05:30
# pre: "b. "
weight: 411
---
A _ROS publisher_ is part of a ROS package. It is a public git
repository, which is built into a running docker container on the
fly when the package is being deployed. A _ROS subscriber_ is also
a part of the same ROS package. It is downloaded on a device and
is launched when the package is deployed.

## Learning objectives
The tutorial will show you how to deploy a basic ROS package
with a _ROS publisher_ running on the cloud and a
_ROS subscriber_ running on a device such as Raspberry PI.
It also shows how to use dockercompose runtime on a device.

## Prerequisites
1. Device requirements
	1. You should have access to a device (computer or Raspberry PI 2 or 3)
	with an internet connection.
	2. Ensure that the [Google Chrome](https://www.google.com/chrome) browser is installed on the computer.
	3. Ensure that the [ROS Kinetic Kame](https://wiki.ros.org/kinetic/Installation) is installed on the device.
{{% notice note %}}
If the device has [ROS Melodic Morenia](http://wiki.ros.org/melodic)
installed on it, replace ***Kinetic*** with ***Melodic*** in all places
where a specific version of ROS is asked for. The tutorial should still
work the same.
{{% /notice %}}
1. You should be familiar with the below tools:
	1. [Git](https://git-scm.com/doc)
	2. UNIX/LINUX [command terminal](https://www.digitalocean.com/community/tutorials/an-introduction-to-the-linux-terminal)
	3. [ROS topics](https://wiki.ros.org/Topics)
	4. [ROS services](https://wiki.ros.org/Services)

## Difficulty
Beginner

## Estimated time
15 minutes

## Learning objectives
The walkthrough gives an overview of how to:

1. configure and provision a package
2. create a routed network
3. deploy a package on the cloud
4. deploy a package on a device


programmatically using
[rapyuta.io Python SDK](/developer-guide/tooling-automation/python-sdk/) in your
python application.

## Prerequisites
1. Read the [developer guide](/developer-guide/)
   of rapyuta.io
2. [Install rapyuta.io SDK](/developer-guide/tooling-automation/python-sdk/#installation)
   in your development environment.
3. Learn how to obtain:
   1. [authorization token](/developer-guide/tooling-automation/python-sdk/sdk-tokens-parameters/#auth-token)
   2. [project ID](/developer-guide/tooling-automation/python-sdk/sdk-tokens-parameters/#project-id)
   3. [package ID](/developer-guide/tooling-automation/python-sdk/sdk-tokens-parameters/#package-id)
   4. [plan ID](/developer-guide/tooling-automation/python-sdk/sdk-tokens-parameters/#plan-id)
   5. [device ID](/developer-guide/tooling-automation/python-sdk/sdk-tokens-parameters/#device-id)

## Difficulty
Beginner

## Estimated time
15 minutes

## Assumptions
1. ***Talker*** is a ROS package created in rapyuta.io,
   and it behaves as a ROS publisher.
2. ***Listener*** is another ROS package created in
   rapyuta.io, and it behaves as a ROS subscriber. **LISTENER** is the
   component of the package that will be deployed on a device.
3. ***PROJECT_ID*** is a unique identification value
   of the project in which **Talker** and **Listener**
   packages are created. It is of type *string*.
4. ***TALKER_ID*** and ***LISTENER_ID*** are the
   package IDs of the ***Talker*** and ***Listener*** packages
   respectively. The values are of type *string*.
5. ***TALKER_PLAN_ID*** and ***LISTENER_PLAN_ID***
   are the plan IDs of the default plan of ***Talker*** and
   ***Listener*** packages, respectively. The values are of
   type *string*.
6. ***AUTH_TOKEN*** is the authorization token for accessing rapyuta.io 
   resources and services. Its value is of type *string*.
7. ***DEVICE ID*** is a unique identification value of a device on
   rapyuta.io, and it is of type *string*.


### Creating the **io-tutorial** build
 
To create the build, follow below steps. Skip the following steps if you have already created an *io-tutorials* build earlier.

1. On the left navigation bar, click **BUILDS**
2. Click on **ADD NEW BUILD**
3. In the Build Name box, enter a name for the build say `io-tutorials`
4. In the Git repository box, enter the url address : `https://github.com/rapyuta/io_tutorials` 
and select **Build Recipe** as Catkin.
5. Go to the next step and click on next, the build will be created.

The build takes about two to five minutes to build the source code in the *io_tutorials* repository into a running docker container. You may analyze the corresponding
[build logs](/developer-guide/tooling-automation/logging/build-logs/), which helps in debugging failed builds.
Please proceed to creation of package once the build is Complete.

### Create Talker Package

1. On the left navigation bar, click **CATALOG**.
2. Click **ADD PACKAGE**.
3. In the **Package Name** box, type in a name for the package like `Talker`.
4. In the **Package Verison** box, enter the version of the package
   you are creating. The default value is *1.0.0*
5. Make sure **Is singleton package** is ***not selected***.
6. Ensure **Is bindable package** is ***selected***.
7. In the **Description** box, explain what the package is about,
   for instance, the description of this package is `ROS Publisher`.
8. Click **NEXT**.
9.  In the **Component Name** box, enter a name for the component say `TALKER`.
10. Select **Cloud** for **Component Runtime**.
11. Ensure **Is ROS Component** is selected.
12. Select **Kinetic** for **ROS Version**.
13. The default value of **Replicas to run the component** is set to 1
14. In the **Executable Name** box, enter a name for an executable,
    say `talker_executable`.
15. Click **Builds** for **Executable Type**.
16. Select **io-tutorials** builds from the dropdown
17. In the **Command to run in the docker container** box, enter the command:
    `roslaunch talker talker.launch`
18. The ***talker_executable*** publishes a ROS topic `/telemetry`.
    To add a ROS topic, click **Add ROS topic**. In the **Name** box,
    type in the ROS topic. Select **Maximum** as the value for **QoS**.
19. Click **NEXT** > **CONFIRM PACKAGE CREATION**.

### Create Listener Package

1. On the left navigation bar, click **CATALOG**.
2. Click **ADD PACKAGE**.
3. In the **Package Name** box, type in a name for the package
   like `Listener`.
4. In the **Package Version** box, enter the version of the package
   you are creating. The default value is *1.0.0*
5. Make sure **Is singleton package** is ***not selected***.
6. Ensure **Is bindable package** is ***selected***.
7. In the **Description** box, explain what the package is about,
   for instance, the description of this package is `ROS Subscriber`.
8. Click **NEXT**.
9.  In the **Component Name** box, enter a name for the component say `LISTENER`.
10. Select **Device** for **Component Runtime**.
11. Ensure **Is ROS Component** is selected.
12. Select **Kinetic** for **ROS Version**.
13. Set **Restart Policy** to **Never**.
14. In the **Executable Name** box, enter a name for an
    executable say `listener_executable`.
15. Set **Executable Type** to **Default**.
16. In the **Command to run in the docker container** box, enter
    the command: `roslaunch listener listener.launch`
17. Click **NEXT** > **CONFIRM PACKAGE CREATION**.



## Create a Cloud Routed Network
A routed network allows you to establish ROS communication between different ROS package deployment. Binding a routed network resource to your deployment will enable other deployments on the same routed network to consume ROS topics/services/actions as defined in the package. If you have already created a routed network, you can skip this procedure.

Perform the following procedure to create a routed network.

1. On the left navigation bar, click **NETWORKS**.
2. Click **ADD NEW ROUTED NETWORK**.
3. Enter `cloud_routed_network_1` as the name for the routed network.
4. Select **ROS Distro**, as   **Kinetic**.
5. Select the **Runtime** as **Cloud**.
6. From the **Resource limit** field, select the memory allocation and computational ability of the routed network. These resources are reserved in the platform for effective ROS communication. For this tutorial, you can select **Small: 1cpu core, 4 GiB memory** as the resource limit.
![goo](/images/tutorials/routed-networks/create-cloud-routed-network.png?classes=border,shadow&width=35pc)
7. Click **CONTINUE** and wait for the routed network to be successfully running.



## Deploying the package
To deploy a package using the [console](https://console.rapyuta.io),
follow the steps:

1. On the left navigation bar, click **CATALOG**.
2. Select the _Docker publisher subscriber_ package.
3. Click **Deploy package**.
4. In the **Name of deployment** box, enter a name for the deployment you are
   creating say `Docker Publisher Subscriber Deployment`
5. Since _listener_ has device runtime, you must select the device you want to
   deploy the component on. Click **Refresh the list of online devices** to retrieve an updated list of online devices.
6. Select the device from the **Select device for deploying the component**
   dropdown list.
7. Click **CREATE DEPLOYMENT** > **Confirm**.

You will be redirected to the newly created deployment's **Details** page where a green colored bar
moves from **In progress** to **Succeeded** with **Status:Running** indicating that the **DEPLOYMENT PHASE** has **Succeeded**, and the **STATUS** is **Running**.

You may also analyse the corresponding [deployment logs](/developer-guide/tooling-automation/logging/deployment-logs/)
to check if everything is working OK.

![Docker Publisher Subscriber Deployment](/images/tutorials/docker-pub-sub/docker-pubsub-deployment.png?classes=border,shadow&width=50pc)

The **listener-listenerExecutable** will be streaming */listener I heard hello_world* logs.

![ROS Subscriber logs](/images/tutorials/docker-pub-sub/listener-logs.png?classes=border,shadow&width=50pc)

while **talker-talkerExecutable** will be publishing *hello_world* logs.

![ROS Publisher logs](/images/tutorials/docker-pub-sub/talker-logs.png?classes=border,shadow&width=50pc)