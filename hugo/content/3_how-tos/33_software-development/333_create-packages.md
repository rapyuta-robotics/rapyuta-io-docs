---
title: "Creating Packages"
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.
weight: 333
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
Package is a fundamental rapyuta.io resource that represents a declaration of your application. It is the smallest unit of deployment in rapyuta.io, and it can be deployed either on a device or the cloud or both.

Creating a software package consists of the following high-level procedures.

**Step1**: [Define Package information](?#step-1-defining-package-information)

**Step2**: [Create Components](?#step-2-creating-components)

**Step3**:[Configure additional information](?#step3-configuring-additional-information)

## Step 1: Defining Package information

To add the metadata of the package:

1. In the rapyuta.io console, on the left navigation bar, click **Development > Catalog**. 

2. In the **Create New Package** dialog, select the **Package Information** and enter: 

|Field|Description|
|-----|-----------|
|Package Name| Enter the package name. |
|Package Version| Enter the package version. |
|IS Singleton | Select this option if the package is not dependent on another package. |
|Is a bindable| Select this option if the package depends on another package or deployment of another package, the package bindings link the package to its dependencies. |
|Description| Enter a brief description about the package. |

3. Click **Next**.

## Step 2: Creating Components

A component is a set of executables. All executables are deployed simultaneously on the desired Component Runtime. All executables of a component communicate via Inter-Process Communication (IPC). An executable listening on a port is accessible to its sibling executables via localhost.

To create components:

1. In the **Create New Package** dialog, select **Components**. 

2. Under **Component Metadata**, enter:  

|Field|Description|
|-----|-----------|
|Component Name| Enter the component name. |
|Component Runtime| Select the component runtime as either **Device** or **Cloud**. For more information, see [Understand Runtime](/5_deep-dives/51_managing-devices/511_device-runtime).|
|IS ROS Component| Select this option if the component is to be deployed on a ROS-enabled device. |
|Replicas to run the component| Enter the number of replication of the component that you want to include. |

3. Under **Executables**, enter:

|Field|Description|
|-----|-----------|
|Executable Name| Enter the executable name. |
|Executable Type| Select the executable type as either **Builds** or **Docker**. For more information, see [Core Concepts](/1_understanding-rio/12_core-concepts/#builds).|
|Command to run in the docker container| Enter the command to run the executables. |
|Choose Build (applicable only for type Build)| Select the build from the dropdown list. |
|Docker image (applicable only for type Docker)| Enter the docker image  to be used. For more information, see [Creating a Build](/3_how-tos/33_software-development/331_create-builds/#creating-build-by-docker-recipe). |
|Private Image (applicable only for type Docker)| Select this option if the docker image is private and also select the credentials from the **Credentials** dropdown list.  |
|Run command from bash shell (applicable only for type Docker)| Command to run in the docker container.|
|Simulation| Enable simulation if your ros application is publishing at higher frequencies.  |
|Resource Limit| Select the CPU and memory requirement for the executable from the dropdown list. You can also choose or enter the custom resource limits for the component executables. For example, 1.025 vCPU and 2.5 GiB Memory. {{%notice info%}} 
* Max Executable CPU: 8 cores
* Min Executable CPU: 0.025 cores
* Executable CPU Granularity: 0.025 cores
* Max Executable Memory: 32768 MB
* Min Executable Memory: 128 MB
* Executable Memory Granularity: 128 MB
{{%/notice%}} |

4. (Optional) You can add an end-point. For more information on endpoint configuration, see [Standard Web Protocols](/5_deep-dives/53_networking-and-communication/532_standard-web-protocol/). 
To add an end-point, under **Endpoints**,  click **Add Endpoint** and enter: 

|Field|Description|
|-----|-----------|
|Endpoint Name| Enter the endpoint name. |
|Exposed externally| Enable if the endpoint is exposed publicly and select one of the available protocols:<ul><li>. **HTTP/Websocket exposed on port 80**</li><li>**HTTP/Websocket exposed on port 443**</li><li>**Secure TCP (TLS/SNI) exposed on port 443**</li> {{%notice info%}}
  - **rapyuta.io** generates a **random URL/route** that is exposed on the public internet for the exposed endpoints when the deployment is created. <br> You can view the Fully Qualified Domain Name (FQDN) of an endpoint on the details page of deployments.
  - rapyuta.io injects environment variables corresponding to linked network endpoints when there is a dependent deployment. For more information, see [Link Injection]({{< ref "/5_deep-dives/53_networking-and-communication/532_standard-web-protocol">}})
{{%/notice%}}
|
|Port| Enter the port number for the endpoint. Port is where the application’s service is made visible to other services.|
|Target Port|Enter the target port. The target port is where the application needs to be listening for network requests for the service to work. {{%notice info%}}
 The Secure TCP (TLS/SNI) protocol uses SNI headers for routing the request to the desired backend.
{{%/notice%}}
|
|Port Range| Enable this option to open multiple ports on a single DNS hostname. {{%notice note%}}
A maximum of 50 ports is allowed for an endpoint. The allowed format is comma-separated Port Ranges. Each Port Range is either a single port or a range of port mentioning the from port and to port separated by a hyphen (-). Examples: 5000 or 443-445 or 3446-3449,3500,3510-3530
{{%/notice%}} |

For more information, see [Exposing Endpoints Externally](/3_how-tos/34_networking-and-communication/342_exposing-cloud-services-using-endpoints/).

 5. (Optional) ROS topic is intended for unidirectional, streaming communication.  For more information, see [Package: ROS Support](/5_deep-dives/52_software-development/526_package-ros-support). 
 To add a ROS topic to the package, under **ROS Services**, click **Add ROS topic** and enter:

|Field|Description|
|-----|-----------|
|Name| Enter the ROS topic name. |
|Compressed | Compression to use for the topic messages.|
|Scoped| A scoped topic is a mapping from a /topic to /robot-peer-name/topic. |
|Targeted| A targeted topic is a mapping from /robot-alias/topic to /topic. |
|QoS|Select one of the available QoS types to ensure reliability of the ROS topics in the transport layer even over the public internet.|

 6. (Optional) To add a ROS service to the package. Under **ROS Services**, click **Add ROS service** and enter: 

|Field|Description|
|-----|-----------|
|Name| Enter the ROS service name. |
|Timeout| Enter the timeout in seconds.|

7. (Optional) To add a ROS actions to the package. Under **ROS Actions**, click **Add ROS action** and enter the ROS service name.

8. (Optional) To add a ROS bag job to the package. Under **Record ROS Bag Job**, click **Add ROS action**. For more information on the fields, see [Working with Rosbags](/3_how-tos/35_tooling_and_debugging/working-with-rosbags)
 
9. (Optional) Configuration parameters operate at the level of the component and apply to executables in the component only. 
To add configuration parameter to the executable, click **Add Parameter** and enter:

|Field|Description|
|-----|-----------|
|Name| Enter the parameter name. |
|Default value | Default value of the parameter. |
|Description| Description of the parameter. |
|This parameter is exposed externally| Select this option if this parameter is publicly exposed.  |

10. Click **Next**.

## Step3: Configuring additional information

rapyuta.io allows you to configure the following additional information for the package.

**Volumes**: Applications running on the cloud de-allocate any resources consumed when they stop, scale down, or fail. This implies that the working storage associated with them is ephemeral. To get around this problem, rapyuta.io provides a mechanism to consume persistent block storage for your applications running in the cloud. This storage can be associated with at most one running deployment at any given point of time. A user is typically required to manage the lifecycle of the application code independently from the associated storage.

The Rapyuta IO Persistent Volume is a storage package. A storage package is a public package that is available to all users out of the box. You cannot delete or modify storage packages, and they are available to every user.
<!-- confirm content about persistent volume -->

**Dependent Deployment**: If your package has a dependency on a deployment, you must define the dependent deployment. 

**Inbound ROS interface**: While having provider semantics provides flexibility but can potentially lead to a case where a user may deploy the package that depends on a previously deployed one without sufficient knowledge of the internal workings of the parent package. Cross talk between topics/services/actions in such cases can cause unintended hard to debug errors and failure of application code.

To prevent such unintentional cross-communication between deployments of two packages, rapyuta.io requires the package to declare a whitelist of ROS inbound topics/services/interfaces it can receive from a child dependent on it.

To add additional information to the package.

1. Click **Additional Information**. 

2. To add a volume to the package, click the refresh icon next to the Volume field and do the following. Before adding a volume package, ensure that you have created a volume package. Under Deployment, select the volume deployment that you created.

3. To add a dependent deployment, click the refresh icon next to the **Dependent Deployment** field and select the dependent deployment.

4. Click **Confirm** Package Creation.

## Related Links:

* [About Package](/1_understanding-rio/12_core-concepts/#package)
* For more information on package components, [click here](/5_deep-dives/52_software-development/525_package-internals)
* For more information on ROS components, [click here](/5_deep-dives/52_software-development/526_package-ros-support)