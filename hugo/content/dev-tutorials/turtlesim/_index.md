---
title: "Turtlesim"
description:
type: dev-tutorials
date: 2018-11-23T10:44:42+05:30
pre: "e. "
weight: 325
---
This tutorial will show you how to set up and run a variation of the ROS
Turtlesim on rapyuta.io. Some of the packages that are used in this tutorial
can be reused to control real robots such as [Turtlebot](https://www.turtlebot.com/).

## Learning objectives
In this tutorial you will learn how to add and deploy packages using
[rapyuta.io console](https://closed-beta.rapyuta.io). Specifically, you'll
learn how to:

1. Source your packages from a public docker registry and from a public git
   repository.
2. Expose ROS topics, services, actions and network endpoints as component-level
   interfaces and as package-level inbound interfaces.
3. Create dependent deployments.
4. Control a Turtlebot in simulation through a web browser.

## Prerequisites

1. You are recommended to complete the [Dynamic map server](../dynamic-map-server)
   tutorial.
2. You should have access to a computer with an internet connection.
   Ensure that the latest [Google Chrome](https://www.google.com/chrome/) browser
   is installed on it.
3. You should be familiar with the [core concepts](/core-concepts/) of rapyuta.io
4. You should be familiar with the following tools:
	* [Git](https://git-scm.com/doc)
	* [Docker](https://docs.docker.com/get-started/)
	* Robot Operating System ([ROS](http://wiki.ros.org/kinetic)) and its
	[topics](http://wiki.ros.org/Topics), [nodes](http://wiki.ros.org/Nodes)
	and [services](http://wiki.ros.org/Services).

## Difficulty
Intermediate

## Estimated time
It will take nearly about 60 minutes to complete the tutorial.

## Software architecture
Turtlesim’s software consists of packages or modules. Each package has a
specific purpose and contributes to the whole of Turtlesim. A modularised
software is easy to maintain, share and scale. A package contains interfaces
that determine how it may interact with other packages. A deployment of a
package may depend on deployments of other packages. Learn more about
Turtlesim's [software architecture](./software-architecture).

## Create Turtle package
The Turtle package emulates the behaviour of a Turtlebot through the Simulator.
There may be multiple instances (deployments) of Turtle component, each
representing a single robot entity. In the real world implementation,
the Turtle package would directly control a robot. Since this is a simulation,
the dynamics of the Turtle's behaviour is obtained from the Simulator. Learn
more about [Turtle package](./packages/#turtle-package).

To add _Turtle_ package using [rapyuta.io console](https://closed-beta.rapyuta.io),
follow the steps:

1. Click **CATALOG** > **ADD NEW PACKAGE**.
2. You should provide information about the package such as the name of the
   package, its version, whether it is a singleton package and a short
   description.
   1. In the **Package Name** box, enter a name say _Turtle_
   2. In the **Package Version** box, specify a version for the package. Initially,
      the version is set to the default value _1.0.0_
   3. Make sure **Is singleton package** is not selected.
   4. Ensure **Is bindable package** is not selected.
   5. In the **Description** box, provide short summary of the package. For
      example, _An emulation of Turtlebot_
   6. Click **NEXT**.
3. In the **Component Name** box, enter a name for the component such as _turtle_        
   The name of a component must consist of alphabets [A-Z, a-z], digits [0-9]
   and _ character, and must not start with a digit.
4. Select **Cloud** as the **Component Runtime**.
5. Select **Is ROS Component**.
6. Set **Replicas to run the component** to a number greater than 1 (default value)
   if you require to do so.
7. In the **Executable Name** box, type in a name for the executable. For example,
   _turtle_executable_        
   The name of an executable must consist of alphabets [A-Z, a-z], digits [0-9]
   and _ character, and must not start with a digit.
8. Select **Git** for the **Executable Type**.
9. In the **Git repository** box, enter the url address of the git
   repository: https://github.com/rapyuta/io_tutorials
10. In the **Command to run in the docker container** box, enter the command:
    ```bash
	roslaunch io_turtle turtle.launch
    ```

	Ensure you always execute the command `roslaunch` to explicitly start the
	[ROS Master](http://wiki.ros.org/Master). However, it's not recommended to
	run the command `rosrun` because the ROS Master will fail to start, and thus,
	the deployment fails.
11. Add `/pose` ROS topic with low QoS because there is no need to guarantee
    the delivery of each control message. Instead, it is essential to receive
	the most recent message at the expense of losing some information.
	Click **Add ROS topic** > enter `/pose` in the **Name** box > click **Low** for **QoS**.
12. Add `/sim/cmd_vel` ROS topic with high QoS because you will expect the
    Turtle to react when given such a command.
	Click **Add ROS topic** > enter `/sim/cmd_vel` in the **Name** box > select **High** for **QoS**.
13. To add a ROS action, click **Add ROS action**. In the **Name** box,
    enter `/turtle_0/goto_action`. Similarly, add another ROS action `/turtle_1/goto_action`
14. Click **NEXT** > **CONFIRM PACKAGE CREATION**.

You can deploy multiple instances of the _Turtle_ package. To deploy up to two
instances of the package, you define two ROS actions. However, you may define
as many ROS actions as you would want to, and also deploy them on many Turtles.
The ROS actions are dynamically created when the _Turtle_ registers with the
_Command Center_. Each _Turtle_ uses one of the defined actions.

## Create User Interface package
The _User Interface_ is an interactive, web based visualisation of the original
ROS Turtlesim. You can visualise the state of the Turtles, pass control commands
to the Turtles. A docker container encapsulates its application code and
dependencies. It communicates with the _Command Center_ through a WebSecureSocket.
It is the only non-ROS package based on Nginix. Learn more about
[User Interface package](./packages/#user-interface-package).

To add _User Interface_ package using the [console](https://closed-beta.rapyuta.io),
follow the instructions:

1. Click **CATALOG** > **ADD NEW PACKAGE**.
2. You should provide information about the package such as the name of the package,
   its version, whether it is a singleton package and a short description of the package.
   1. In the **Package Name** box, enter a name say _User Interface_
   2. In the **Package Version** box, specify a version for the package. Initially,
      the version is set to the default value _1.0.0_
   3. Make sure **Is singleton package** is not selected.
   4. Ensure **Is bindable package** is not selected.
   5. In the **Description** box, enter short summary of the package such as
      _An interactive, web based version of ROS Turtlesim's user interface_
   6. Click **NEXT**.
3. In the **Component Name** box, enter a name for the component say *user_interface*    
   The name of a component must consist of alphabets [A-Z, a-z], digits [0-9]
   and _ character, and must not start with a digit.
4. Select **Cloud** for **Component Runtime**.
5. Deselect **Is ROS Component** because _User Interface_ is a non-ROS package.
6. Set **Replicas to run the component** to a number greater than 1 (default value)
   if you require to do so.
7. In the **Executable Name** box, enter a name for the executable say _uiexecutable_    
   The name of an executable must consist of alphabets [A-Z, a-z], digits [0-9]
   and _ character, and must not start with a digit.
8. Select **Docker** for **Executable Type**.
9. In the **Docker image** box, enter the address of the docker image that contains
   the application code. The address of the image is *rrdockerhub/io_turtlesim_ui*
   as the image is held in the public docker registry, [DockerHub](https://hub.docker.com/).
10. The **Command to run in the docker container** remains empty because the docker
    image will automatically execute when you deploy the _User Interface_ package.
11. Deselect **Run command from bash shell** checkbox.
12. Expose a communication endpoint to access _User Interface_ as well as interact
    with the Turtles. To add an endpoint, follow the steps:
	1. Click **Add endpoint**.
	2. In the **Endpoint Name** box, enter a name say _UserInterface_
	3. Select **Exposed externally**.
	4. Click **HTTPS/WSS** for **Protocol**.
	5. The **Port** is set to the default value 443 for the HTTPS/WSS protocol.
	6. In the **Target Port** box, enter the value _8080_ (default port for Nginix).
13. Click **NEXT** > **CONFIRM PACKAGE CREATION**.

## Create Simulator package
The _Simulator_ package replicates the physical dynamics of 2D robots and
their sensors. Learn more about [Simulator package](./packages/#simulator-package).

To add the _Simulator_ package, follow the steps:

1. Click **CATALOG** > **ADD NEW PACKAGE**.
2. You must provide information about the package such as the name of the package,
   its version, whether it is a singleton package, and a short description.
   1. In the **Package Name** box, type in the name for the package say
      _Simulator_
   2. In the **Package Version** box, enter the version of the package.
      The default value is set to _1.0.0_
   3. Ensure **Is singleton package** checkbox is not selected.
   4. Ensure **Is bindable package** is selected.
   5. In the **Description** box, enter a short summary of the package such as
      _Simulator simulates physical dynamics of 2D robots and their sensors_
   6. Click **NEXT**.
3. In the **Component Name** box, type in a name for the component say _simulator_    
   The name of a component must consist of alphabets [A-Z, a-z], digits [0-9]
   and _ character, and must not start with a digit.
4. Select **Cloud** for **Component Runtime**.
5. Select **Is ROS Component** checkbox.
6. Set the value of **Replicas to run the component** to a number greater than 1
   (default value) if you require to do so.
7. In the **Executable Name** box, enter a name for the executable say
   _simulator_executable_    
   The name of an executable must consist of alphabets [A-Z, a-z], digits [0-9]
   and _ character, and must not start with a digit.
8. For the **Executable type**, click **Git**.
9. In the **Git Repository** box, enter the url address of the git repository,
   that is, https://github.com/rapyuta-robotics/io_tutorials
10. In the **Command to run in the docker container** box, enter the command:
    ```bash
    roslaunch io_turtle_sim_env simulation.launch
    ```

    Ensure you always execute the command `roslaunch` to explicitly start the
    [ROS Master](http://wiki.ros.org/Master). However, it's not recommended to
    run the command `rosrun` because the ROS Master will fail to start, and
    thus the deployment fails.
11. To add `/sim/pose` ROS topic, click **Add ROS topic**. In the **Name** box, type in
    `/sim/pose` and select **Low** for **QoS**.
12. To add another ROS topic, `/sim/sensors`, click **Add ROS topic** again.
    In the **Name** box, type in `/sim/sensors` and select **Low** for **QoS**.    
    The value of QoS is set to Low because it is not necessary to guarantee
    the delivery of each topic. Instead it is essential to receive the most
    recent message at the expense of losing some information.
13. To add a ROS service, click **Add ROS service**. In the **Name** box, enter the
    name of the service `/register_sim_turtle`. Similarly, add another
    ROS service `/teleport_turtle`.
14. Click **NEXT**.
15. Since _Simulator_ subscribes to the ROS topic `/sim/cmd_vel` published by
    _Turtle_, you must add `/sim/cmd_vel` as an **INBOUND ROS INTERFACE** topic.
    Click **Add Topic** > enter `/sim/cmd_vel` in the **Name** box.
16. Click **CONFIRM PACKAGE CREATION**.

## Create Command Center package
The _Command Center_ is a node for registering _Turtles_, and a router for
passing control commands and telemetry messages between _User Interface_
and _Turtles_. Learn more about [Command Center package](./packages/#command-center-package).

To add _Command Center_ package, follow the steps:

1. Click **CATALOG** > **ADD NEW PACKAGE**.
2. You must provide information about the package such as the name of the
   package, its version, whether it is a singleton package, and a
   short description.
   1. In the **Package Name** box, type in the name for the package
      say _Command Center_
   2. In the **Package Version** box, enter the version of the package.
      The default value is _1.0.0_
   3. Ensure **Is singleton package** checkbox is not selected.
   4. Ensure **Is bindable package** is selected.
   5. In the **Description** box, enter a short description of the package such
      as _Command Center_ is responsible for communication between
      _User Interface_ and _Turtle_
   6. Click **NEXT**.
3. In the **Component Name** box, enter a name for the component
   say *command_center*    
   The name of a component must consist of alphabets [A-Z, a-z], digits
   [0-9] and _ character, and must not start with a digit.
4. Select **Cloud** for the **Component Runtime**.
5. Ensure **Is ROS Component** checkbox is selected.
6. Set the value of **Replicas to run the component** to a number greater
   than 1 (default value) if you require to do so.
7. In the **Executable Name** box, type in a name for the executable
   say _ccexecutable_    
   The name of an executable must consist of alphabets [A-Z, a-z],
   digits [0-9] and _ character, and must not start with a digit.
8. For **Executable type**, click **Git**.
9. In the **Git Repository** box, enter the url address of the git repository:      https://github.com/rapyuta-robotics/io_tutorials
10. In the **Command to run in the docker container** box, enter the command:
    ```bash
    roslaunch io_turtle_command_center command_center.launch
    ```

    Ensure you always execute the command `roslaunch` to explicitly start
    the ROS Master. However, it's not recommended to run the command
    `rosrun` because the ROS Master will fail to start, and thus the
    deployment fails.
11. You must expose a communication network endpoint for
    publicly accessing _Command Center_.
    1. Click **Add endpoint**.
    2. In the **Endpoint Name** box, enter *WS_ROSBRIDGE*
    3. Make **Exposed externally** checkbox is selected.
    4. Click **HTTPS/WSS** under **Protocol**.
    5. The value of **Port** is automatically set to _443_ because the Protocol is HTTPS/WSS.
    6. In the **Target Port** box, type in _9090_
12. To add a ROS topic, click **Add ROS topic** > enter `/cmd_vel` in the **Name** box > click **Low** for **QoS**.
13. To add a ROS service, click **Add ROS service** > enter `/register_turtle` in the **Name** box.
14. The environment variables: *WS_ADDR* and *WS_PORT*, defined in the ROS launch
    file, determine the WebSecureSocket address and port. You can adjust
    their values as configuration parameters defined in the console
    during the process of deploying the *command_center* component.
    To add *WS_ADDR* as configuration parameter, follow the steps:
    1. Under **CONFIGURATION PARAMETERS**, click **Add Parameter**.
    2. In the **Name** box, enter *WS_ADDR*
    3. In the **Default** value box, type in _0.0.0.0_
    4. In the **Description** box, type in _WebSocket Address_
    5. Deselect **This parameter is exposed externally** checkbox.    
    Similarly, add *WS_PORT* configuration parameter. Set **Name** as *WS_PORT* and
    **Default** value to _9090_, and describe it as _WebSocket Port_.
15. Click **NEXT** to move to **Additional Information** page.
16. The _Command Center_ is responsible for coordination among the _Turtles_.
    The inbound ROS interfaces help recognise ROS topics, services and
    actions broadcasted from the various Turtles' deployments.
    1. To add `/pose` as an Inbound ROS topic, click **Add Topic** under
       **INBOUND ROS INTERFACES** > enter `/pose` in the **Name** box.
    2. To add `/teleport_turtle` as an Inbound ROS service, click **Add Service**
       under **INBOUND ROS INTERFACES** > enter `/teleport_turtle` in the **Name** box.
    3. To add `/turtle_0/goto_action` as Inbound ROS actions, click **Add Action**
       under **INBOUND ROS INTERFACES** > enter `/turtle_0/goto_action` in the
       **Name** box. Similarly, add another Inbound ROS action,
       `/turtle_1/goto_action`.
17. Click **CONFIRM PACKAGE CREATION**.

## Package build status
Each package takes about 5 minutes to build the source code into a running
docker executable. You can view the [build logs](/core-concepts/logging/build-logs)
of a specific package, which help in debugging failing builds.

A flickering yellow dot against the package name indicates that
the **Build Status : New**.

A green dot against the package name indicates that
the **Build Status : Complete**.

## Deploy packages
In this tutorial, you have created four packages. They are:

1. Turtle
2. User Interface
3. Simulator
4. Command Center

You may click **CATALOG** to view all of the above packages in one place.

Since a deployment may depend on another deployment(s), you will initially
deploy the package that is independent of other deployments, and you will
work your way up the dependency chain.

ROS publisher subscriber describes the standard procedure for deploying
a ROS package. In this tutorial, the _Simulator_ deployment is independent of
any other deployment. The _Command Center_ deployment relies on that of
_Simulator_, while the _User Interface_ deployment is based on that of
_Command Center_. Lastly, the _Turtle_ deployment depends on deployments of
both the _Simulator_ and the _Command Center_.

The table summarises dependency relationships between all of the
packages in Turtlesim tutorial.

| Package | Dependent Deployment(s) |
| ------- | ----------------------- |
| Simulator | None |
| Command Center | Simulator |
| User Interface | Command Center |
| Turtle | Command Center, Simulator |

The below diagram illustrates the dependencies among packages in
Turtlesim tutorial.

![Dependent deployment block diagram](/images/tutorials/turtlesim/turtlesim-ddeploy-blk-diagram.png?classes=border)

## Deploy Simulator package
To deploy the _Simulator_ package whose deployment is independent of
any other deployment, follow the steps:

1. Click **CATALOG** > select _Simulator_ package > click **Deploy package**.
2. In the **Name of the deployment** box, type in a name for the deployment
   you are creating say _SIMULATOR deployment_
3. Click **CREATE DEPLOYMENT** > **Confirm**.

You will be redirected to the deployment **Details** page where a green progress
bar moves up to **Succeeded** along with **Status:Running** point indicating that the
**DEPLOYMENT PHASE** has **Succeeded** and the deployment **STATUS** is **Running**.

## Deploy Command Center package
The _Command Center_ deployment depends on the deployment of _Simulator_. That is
the _Simulator_ deployment is a dependent deployment of _Command Center_ deployment.
To deploy the _Command Center_ package, follow the steps:

1. click **CATALOG**  >  select **COMMAND CENTER** package  >  click **Deploy package**.
2. In the **Name of deployment** box, enter a name for the deployment say
   _COMMAND CENTER deployment_
3. Ensure that the value of **WS_ADDR** is **0.0.0.0** and **WS_PORT** is **9090**
4. Under **DEPENDENT DEPLOYMENTS**, click **Add dependency**  >  select the Simulator's
   deployment ID from the dropdown list.
5. Click **CREATE DEPLOYMENT**  >  **Confirm**.

You are redirected to the deployment's **Details** page where a green progress bar
moves up to **Succeeded** and **Status:Running** point indicating that the
**DEPLOYMENT PHASE** has **Succeeded** and the deployment **STATUS** is **running**.
Since _COMMAND CENTER deployment_ depends on _SIMULATOR deployment_,
ensure that the dependent deployment's **STATUS** is **running** as well.

## Deploy User Interface package
When you deploy _User Interface_ package (non-ROS package), ensure you add the
_Command Center_ deployment as a dependent deployment. That is a deployment of
_User Interface_ is based on that of _Command Center_.

The procedure to deploy the _User Interface_ package is the same as deploying
the _Command Center_ package. However, provide a different name for the deployment
say _USER INTERFACE deployment_. To add a dependent deployment, click **Add dependency**
and select the **COMMAND CENTER deployment** ID from the drop-down list.
Click **CREATE DEPLOYMENT**  >  **Confirm**.

If the **DEPLOYMENT PHASE** is **Succeeded** and the **STATUS** is running for
the dependent deployment as well, _User Interface_ package is successfully deployed.

The **NETWORK ENDPOINTS** generates a URL on the deployment **Details** tab.
Copy this specific URL (your URL address will be different from that shown in the screen
capture), paste it in the web browser, and run it. You will view the
Turtlesim user interface without any Turtles. However, if you do not
see the Turtlesim user interface, try refreshing the web page for
couple of times.

![Network Endpoint for User Interface package](/images/tutorials/turtlesim/UI-endpoint.png?classes=border)

## Deploy Turtle package
The procedure for deploying the _Turtle_ package is similar to that of any
package whose deployment depends on another deployments. A deployment of
_Turtle_ depends on the running deployments of the _Command Center_ and the
_Simulator_, that is **COMMAND CENTER deployment** and **SIMULATOR deployment**.
You may provide a name for the deployment say _TURTLE deployment_.
To add multiple dependent deployments, click **Add dependency** and select the
desired deployment ID for each dependent deployment.

If the deployment fails, click **Deprovision deployment**; delete the
corresponding package; create the package and deploy it again.

On the left navigation bar, click **DEPLOYMENTS** to view a list of
four deployments that you created.

An illustration of the resultant dependency graph is:

![Dependency graph of Turtlesim](/images/tutorials/turtlesim/dependency-graph.png?classes=border)

Refresh the Turtlesim User Interface web page to view a single Turtle
randomly placed in the environment.

![Turtlesim simulation](/images/tutorials/turtlesim/turtlesim-viewer.png?classes=border)

Try moving the Turtle around using the command interface. If the Turtle
behaves as you expect, you have successfully finished the tutorial.

You can deploy a second Turtle (in the same way as the first). You can now
command two turtles simultaneously.

## Cleaning up
A running deployment of a package consumes cloud resources. It is recommended
to stop a running deployment when you do not need it. To deprovision (stop) a
running deployment, follow the steps:

1. On the left navigation bar, click **DEPLOYMENTS**.
2. Click **Deprovision** against the running deployment ID you want to stop.

If the deployment is successfully deprovisioned, you will view a
**DEPLOYMENT STOPPED** message and the corresponding deployment ID's **PHASE**
reads **Deployment stopped**.
