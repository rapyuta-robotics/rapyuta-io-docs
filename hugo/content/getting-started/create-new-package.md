---
title: "Creating New Package"
description:
type: getting-started
date: 2018-11-26T15:13:07+05:30
pre: "l. "
weight: 335
---
To add a new package using [rapyuta.io](https://console.rapyuta.io),
follow the steps:

1. Click **CATALOG** > **ADD NEW PACKAGE**.
2. **Package information** contains basic information of a package like the name of the package, its version, and a brief summary of the package.
   1. In the **Package Name** box, type in the name for the package. For instance, let's call the package as `Demo Package`.
   2. In the **Package Version** box, enter the version of the package. It is set to _1.0.0_ by default.
   3. Ensure that **Is a singleton package** is ***not selected***.
   4. Ensure that [**Is bindable package**](/core-concepts/packages/#bindable-attribute) checkbox ***is selected***.
   5. Write a line or two describing the package in the **Description** box. However, it is optional.
3. Click **NEXT**.
4. **Components** contains details about the package's components, and executables of each component. Fill in the **COMPONENT METADATA** information.
   1. In the **Component Name** box, enter the name of the component. For example, you may enter `Talker`.
{{% notice info %}}
The name of a component must consist of alphabets [A-Z, a-z], digits [0-9] and an underscore _ character, and must not begin with a digit.
{{% /notice %}}
   2. A component of a package can either have a device runtime or a cloud runtime. Select **Cloud** as **Component Runtime** in this example.
   3. Ensure that **Is ROS Component** is selected.
   4. You can set the value of the **Replicas to run the component** to a number greater than one. Otherwise, the default value is 1.
![Component metadata](/images/getting-started/create-new-pkg/component-metadata.png?classes=border,shadow&width=30pc)
1. Add one or more **EXECUTABLES** to the component.
   1. In the **Executable Name** box, type in the name of the executable. For instance, type in `talkerExecutable`.
{{% notice info %}}
The name of a executable must consist of alphabets [A-Z, a-z], digits [0-9] and an underscore _ character, and must not begin with a digit.
{{% /notice %}}
   2. An executable can be either a source code in a git repository or a Dockerfile or a docker image. In this example, you will provide source code as the executable. So, select **Git** as the **Executable Type**.
{{% notice note %}}
The maximum size of the docker image is 10 GB for cloud deployment
{{% /notice %}}
   3. In the **Git Repository** box, enter the git repository address:`https://github.com/rapyuta/io_tutorials`
   4. In the **Command to run in the docker container** box, enter the command:`roslaunch talker talker.launch`     
    Ensure that you always execute the *roslaunch* command to explicitly start the [ROS
	Master](http://wiki.ros.org/Master) instead of running the *rosrun* command,
	because the ROS Master will fail to start on *rosrun* command in the console,
	and eventually, the deployment will fail.
![Executable information](/images/getting-started/create-new-pkg/exec-details.png?classes=border,shadow&width=50pc)
1. Add a ROS topic by clicking **Add ROS topic**, specify the name of the ROS topic in the **Name** box, and choosing **Maximum QoS**. In this example, the ROS topic `/telemetry` is added.
![Add ROS topic](/images/getting-started/create-new-pkg/add-ros-topic.png?classes=border,shadow&width=50pc)
2. To add another component to the same package, click **+** as shown in the image and repeat instructions in steps 4 through 6.
![Add another component](/images/getting-started/create-new-pkg/add-another-component.png?classes=border,shadow&width=30pc) 
3. Click **NEXT** > **CONFIRM PACKAGE CREATION**.

A flickering yellow dot next to the newly added package indicates that its
***Build Status*** is ***BuildInProgress***. You have successfully added
the package when the dot turns green in color, which indicates that
the package is successfully built and is ready to be deployed.

Additionally, the package is successfully built and is ready to be deployed
when the **Deploy package** button is enabled.

![Demo package](/images/getting-started/create-new-pkg/demo-pkg.png?classes=border,shadow&width=50pc)

You can download the manifest of the package by clicking
**Download Manifest**. You may also clone the package so as to modify it by
clicking **Clone Package**. You can [trigger a new build](/core-concepts/builds/#trigger-new-builds-and-rollback-to-previous-builds) by clicking
**Trigger build** and [deploy the package](/getting-started/deploy-package/) by
clicking **Deploy package**.
