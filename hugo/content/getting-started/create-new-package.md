---
title: "Creating New Package"
description:
type: getting-started
date: 2018-11-26T15:13:07+05:30
pre: "g. "
weight: 235
---
To create a new rapyuta.io package using the [console](https://closed-beta.rapyuta.io),
follow the steps:

1. Click **CATALOG** > **ADD NEW PACKAGE**.
2. You should provide basic package information such as the name of the
package, its version, and a brief summary of the package.
	1. In the **Package Name** box, type in a name for the package you are adding.
	2. In the **Package Version** box, enter the version of the package. By default,
	it is set to _1.0.0_
	3. Ensure that **Is a singleton package** checkbox is not selected.
	4. Ensure that **Is bindable package** checkbox is selected.
	4. In the **Description** box, write a short summary of the package. It is optional.
3. Click **NEXT**.

![Package Information](/images/getting-started/pkg-info.png?classes=border,shadow&width=20pc)

Fill in **COMPONENT METADATA** details as follows:

1. In the **Component Name** box, enter the name of the component. For example,
you may enter _Talker_.   
The name of a component must consist of alphabets [A-Z, a-z], digits [0-9]
and an underscore _ character, and must not begin with a digit.
2. A component of a package can either have a device runtime or a cloud runtime.
Select **Cloud** as **Component Runtime** in this example.
3. Ensure that **Is ROS Component** checkbox is selected.
4. You can set the value of the **Replicas to run the component** to a number
greater than one. Otherwise, the default value is 1.
5. In the **Executable Name** box, type in the name of the executable. For instance,
type in _talkerExecutable_.  
The name of an executable must consist of alphabets [A-Z, a-z], digits [0-9]
and an underscore _ character, and must not begin with a digit.
6. You can either use a git repository or a docker image as an executable of a
component. In this example, select **Git** as the **Executable Type**.
7. In the **Git Repository** box, enter the git repository URL address : https://github.com/rapyuta/io_tutorials
8. In the **Command to run in the docker container** box, enter the command :
	```bash
	roslaunch talker talker.launch
	```

	Ensure that you always execute the `roslaunch` command to explicitly start the [ROS
	Master](http://wiki.ros.org/Master) instead of running the `rosrun` command,
	because the ROS Master will fail to start on `rosrun` command in the console,
	and eventually, the deployment will fail.
	![Executable Information](/images/getting-started/exec-details.png?classes=border,shadow&width=40pc)
9. If you prefer to explicitly specify the path of the Dockerfile in the git repository,
select **Specify docker file path** checkbox.
10. Alternatively, you can provide a docker image for the executable. Select
**Docker** as the **Executable Type**, and then enter the docker image URL in the
**Docker image** box.
{{% notice info %}}
The maximum size of the docker image is 10 GB for cloud deployment
{{% /notice %}}
11. Add a ROS topic by clicking **Add ROS topic**, specify the name of
the ROS topic in the **Name** box, and choosing **Maximum QoS**. In this example,
the ROS topic `/telemetry` is added.
![Add ROS Topic](/images/getting-started/add-ros-topic.png?classes=border,shadow&width=40pc)
12. Click **NEXT** > **CONFIRM PACKAGE CREATION**.

A flickering yellow dot against the newly added package name indicates that
the **Build Status** is **BuildInProgress**. You have successfully added a
rapyuta.io package only when the dot against the package's name turns green in
colour, which indicates that the package has been successfully built, and is
ready to be deployed.

![](/images/getting-started/pkg-build-status.png?classes=border,shadow&width=40pc)

Additionally, the package is successfully built and is ready to be deployed
when the **Deploy package** button is active and enabled.
