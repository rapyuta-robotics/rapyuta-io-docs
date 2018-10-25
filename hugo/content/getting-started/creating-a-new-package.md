---
title: "Creating a new package"
date: 2018-09-12T10:58:48+05:30
weight: 22
---
To create a new rapyuta.io package using the [console](https://closed-beta.rapyuta.io), follow the steps:

1. Click **CATALOG** > **ADD NEW PACKAGE**.
2. You should provide information about the package such as the name of the
package, its version, and a brief summary on the package. Click **NEXT**.
3. In the **Component Name** box, enter the name of the component. For example,
you may enter _Talker_.  
The name of a component must consist of alphabets [A-Z, a-z], digits [0-9]
and an underscore [ _ ] character, and must not begin with a digit.
4. A component of a package can either have a device runtime or a cloud runtime.
Select **Cloud** as **Component Runtime** in this example.
5. Ensure that **Is ROS Component** checkbox is selected.
6. You can set the value of the **Replicas to run the component** to a number
greater than one. Otherwise, the default value is 1.
7. In the **Executable Name** box, type in the name of the executable. For instance,
type in _talkerExecutable_.  
The name of an executable must consist of alphabets [A-Z, a-z], digits [0-9]
and an underscore [ _ ] character, and must not begin with a digit.
8. You can either use a git repository or a docker image as an executable of a
component. In this example, select **Git** as the **Executable Type**.
9. In the **Git Repository** box, enter the git repository URL address : https://github.com/rapyuta/io_tutorials
10. In the **command to run in the docker container** box, enter the command : `roslaunch talker talker.roslaunch`  
Ensure that you always execute the `roslaunch` command to explicitly start the ROS
Master instead of running the `rosrun` command, because the ROS Master will fail
to start on `rosrun` command in the console, and eventually, the deployment will
fail.
11. To explicitly specify the path of the Dockerfile in the git repository,
select **Specify docker file path** checkbox.
12. Alternatively, you can provide a docker image for the executable. Select
**Docker** as the **Executable Type**, and then enter the docker image URL in the
**Docker image** box.
13. You can add a ROS topic by clicking **Add ROS topic**; specifying the name of
the ROS topic in the **Name** box, and choosing **Maximum QoS**.
14. Click **NEXT** > **CONFIRM PACKAGE CREATION**.

You have successfully added a rapyuta.io package only when the dot against the
package's name turns green in colour. This indicates that the package has been
successfully built, and is ready to be deployed.
