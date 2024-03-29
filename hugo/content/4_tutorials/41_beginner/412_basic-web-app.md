---
title: "Basic Web Application"
description:
type: build-solutions
date: 2019-10-24T13:46:19+05:30
# pre: "1. "
weight: 413
tags:
    - Tutorials
---

This tutorial guides you to create a web application and deploy it in the rapyuta.io platform with the docker build recipe.

## Learning objectives
The tutorial will show you how to use a docker file to build an executable
of a package.

## Prerequisites
1. Ensure that the [Google Chrome browser](https://www.google.com/chrome/)
   is installed on a computer.
2. You should be familiar with the concepts of rapyuta.io.

### Estimated time
10 minutes

## Tutorial Video
[Basic web App](https://youtu.be/NEUvSbQ3J-g)
{{< youtube id="NEUvSbQ3J-g" title="rapyuta.io tutorial: basic ROS publisher and subscriber" >}}

## Creating the build
To create the build, follow the below steps : 

1. On the left navigation bar, click **Development>Builds**.
2. Click on **ADD NEW BUILD**
3. In the Build Name box, enter a name for the build , for example, `web-app-build` 
4. In the **Git repository** box, enter the URL address : 
`https://github.com/rapyuta/io_tutorials` and select **Build Recipe** as **Docker**.
5. In the **Context directory box**, enter the name of the parent directory that contains the docker file. 
In this example, it is `flask_helloworld`.
6. Go to the next step and click on next, the build will be created.

The build takes about two to five minutes to build the source code in the *io_tutorials*
repository into a running docker container. You may analyze the corresponding
[build logs](/3_how-tos/35_tooling_and_debugging/debugging-logs/#build-logs), which help debug failing builds.

Please proceed to the creation of the package once the build is complete.

## Creating the package
You will add and deploy ***simple-hello-world*** package. To create a new package,
follow the below instructions in sequence:

1. On the left navigation bar, click **Development > Packages**.
2. Click **ADD NEW PACKAGE**.
3. You should provide information about the package such as the name of the package, its version, whether it's a singleton or bindable package, and a short description.
   1. In the **Package Name** box, type in a name for the package like `simple-hello-world`
   2. In the **Package Version** box, type in the version of the package. By default, the version is set to *1.0.0*
   3. Ensure **Is a singleton package** is *not selected*.
   4. Make sure **Is a bindable package** is *selected*.
   5. Describe the package in a sentence or two like `Demo package for docker build recipe`.
4. Click **NEXT**.
5. In the **Component Name** box, enter a name for the component, for example, `Flask_Application`.
   {{% notice info %}}
   The name of a component must consist of alphabets [A-Z, a-z], digits [0-9], hyphen - and an underscore _ character. It must not begin with a digit.
   {{% /notice %}}
6. Select **Cloud** for **Component Runtime**.
7. Ensure **Is ROS Component** is *not selected*.
8. The value of **Replicas to run the component** is set to the default value of *1*
9.  In the **Executable Name** box, type in a name for the executable, for example, `flask_runner`.
{{% notice info %}}
The name of an executable must consist of alphabets [A-Z, a-z], digits [0-9], hyphen - and an underscore _ character. It must not begin with a digit.
{{% /notice %}}
10. For **Executable Type**, click on **Development>Builds**.
11. In the **Choose Build** select the Build `web-app-build` from the drop-down list.
![Executable details](/images/tutorials/hello-world/exec-details.png?classes=border,shadow&width=50pc)
14. You must expose a network endpoint for viewing the output of the tutorial:
    1.  Click **Add Endpoint**.
    2.  Provide a name for the endpoint, like `HELLO_WORLD`, in the **Endpoint Name** box.
    3.  Make sure **Exposed externally** is *selected*.
    4.  Click **HTTPS/WSS** under **Protocol**.
    5.  The value of **Port** is automatically set to *443* because the protocol is HTTPS/WSS.
    6.  In the **Target Port** box, enter `5000`.
![Network endpoint](/images/tutorials/hello-world/endpoint-details.png?classes=border,shadow&width=50pc)
15. Click **NEXT** > **CONFIRM PACKAGE CREATION**.

![Package build](/images/tutorials/hello-world/build-pkg-success.png?classes=border,shadow&width=50pc)

Additionally, you may verify if the package is built successfully and is
ready to be deployed by checking to see if the **Deploy package** button is
active.

## Deploying the package
To deploy the ***simple-hello-world*** package, walk through the below
instructions in sequence:

1. On the left navigation bar, click **Development>Catalog**.
2. Select *simple-hello-world* package.
3. Click **Deploy package**.
4. In the **Name of deployment** box, enter the name of the deployment you are creating like `Simple Flask Application`.
5. Click **CREATE DEPLOYMENT** > **Confirm**.

You will be redirected to the **Details** page of the newly created deployment.
The **Simple Flask Application** deployment is successfully running only when
the green colored bar moves to **Succeeded** and **Status: Running** indicating that the **DEPLOYMENT PHASE** is **Succeeded** and the **STATUS** is **Running**.

![Deployment details](/images/tutorials/hello-world/successful-deployment.png?classes=border,shadow&width=50pc)

You can also analyze the corresponding [deployment logs](/3_how-tos/35_tooling_and_debugging/debugging-logs/) to check if everything is working as expected by clicking on the **Historical Logs** or **Live Logs** tab.

Once the package is successfully deployed, the **NETWORK ENDPOINTS**
generates a URL address on the **Details** page. Copy this specific
URL address (it may be different from that shown in the below image),
paste in the web browser, and press *Enter*.

![Network endpoint](/images/tutorials/hello-world/network-endpoint.png?classes=border,shadow&width=50pc)

You will view ***Hello from rapyuta.io*** message.

