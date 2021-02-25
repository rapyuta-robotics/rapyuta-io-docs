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
A package is a fundamental rapyuta.io resource that represents a declaration of your application. It is the smallest unit of deployment in rapyuta.io, and it can be deployed either on a device or the cloud or both.

Creating a software package consists of the following high-level procedures.

**Step1**: [Define Package information](#defining-package-information)

**Step2**: [Create Components](#creating-components)

**Step3**:[Configure additional information](#configuring-additional-information)

## Step 1: Defining Package information


To add the metadata of the package, do the following.

1. On the left navigation bar, click **Development>catalog**.

![package-creation](/images/core-concepts/builds/build-creation/define-package-info.png?classes=border,shadow&width=25pc)

2. In the package information section, do the following.

    a. Type a package name in the Package Name field.

    b. Type the package version in the package version field.

    c. Click  one of the following.

    * **IS Singleton package**: Select this option if a package is not dependent on another package.


    * **Is a bindable package**: Select this option if a package depends on another package or deployment of another package, the package bindings link the package to its dependencies.

3. In the **Description** field, type a brief description about the package and click **Next**.

## Step 2: Creating Components

A component is a set of executables. All executables are deployed in unison on the desired Component Runtime. All executables of a component communicate via Inter-Process Communication (IPC). An executable listening on a port is accessible to its sibling executables via localhost.

Perform the following procedure to create  components.

1. Click the **Components** tab.

2. In the component metadata area, do the following.

    a.  In the **Component Name** field, type a name for the component.
![component meta](/images/core-concepts/builds/build-creation/component-meta.png?classes=border,shadow&width=25pc)

    b. In the **Component Runtime** field, select the component runtime either as **Device** or **Cloud**. For more information about device run-time, [click here](/5_deep-dives/51_managing-devices/511_device-runtime)

    c. If the component is to be deployed on a ROS enabled device, click the **IS ROS Component** check-box.

    d. In the **Replicas to run the component** field, type the number of replication of the component that you want to includee.</br>

3. In the executables area, do the following.

    a. In the **Executable Name** field, type a name of the executable. 
![package executable](/images/core-concepts/builds/build-creation/package-executables.png?classes=border,shadow&width=25pc)

    b. From the **executable Type** drop-down menu, select either one of the following executable type. </br>

    * **Build**
    * **Docker**
    * **Default**

    For more information about the type of executables, [click here](/1_understanding-rio/12_core-concepts/#builds)

    c. If you have selected the executable type as **Builds**, from the **Choose Build** drop-down menu, select the build. 

    d. If you have selected the executable type as **Docker**, in the Docker Image field, type the docker image that you want to use. For more information about creating the build recipe as docker, [click here](/3_how-tos/33_software-development/331_create-builds/#creating-build-by-docker-recipe).

    e. Optionally, if the docker image is a private image, click the **Private Image** check-box and select the credential from the **Credentials** drop-down menu.

    f. In the **Command to Run** field, in the docker container box, enter the command to run the executables.

    g. From the Resource limit drop-down menu, select the CPU and memory requirement for the executable.


4.  Optionally, to add an end-point, click **Add Endpoint** and do the following. For more information on end point configuration, [click here](/5_deep-dives/53_networking-and-communication/532_standard-web-protocol/)

    a. In the **Endpoint Name** field, type a name for the endpoint.

    b. If the endpoint is exposed publicly, click the Exposed externally radio button and do the following.

      i. From the protocol section, select one of the following available protocols. 

      * HTTP/Websocket exposed on port 80</li>

      * HTTP/Websocket exposed on port 443</li>

      * Secure TCP (TLS/SNI) exposed on port 443</li>

      ii. In the Target Port field, type the target port. Port is where the application’s service is made visible to other services.
{{%notice info%}}
 The Secure TCP (TLS/SNI) protocol uses SNI headers for routing the request to the desired backend.
{{%/notice%}}
  
    c. If the endpoint is accessed internally, do the following.

    i. In the port field, type the port number for the endpoint. Port is where the application’s service is made visible to other services.

​          ii. In the Target Port field, type the target port. Target port is where the application needs to be listening for network requests for the service to work.

​          iii. Optionally, You can also use port range for an endpoint by selecting Port Range toggle. A Port Range on an endpoint will allow you to open multiple ports on a single DNS hostname.
{{%notice note%}}
A maximum 50 ports are allowed for an endpoint. Allowed format is comma separated Port Ranges. Each Port Range is either a single port or a range of port mentioning the from port and to port separated by a hyphen (-). Examples: 5000 or 443-445 or 3446-3449,3500,3510-3530
{{%/notice%}}

 5. If you want to add a ROS topic to the package, click **Add ROS topic** and do the following. A ROS topic is intended for unidirectional, streaming communication. For more information, [click here](/5_deep-dives/52_software-development/526_package-ros-support)

    a. In the name field, type the name of the ROS topic.

    b. Select one of the following.  **Compressed**, **Scoped**,  **Targeted**:

    c. To add  a tunable level of reliability for ROS topics for the transport layer even over the public internet, select one of the following QOS types. 

 6. If you want to add a ROS service to the package, click **Add ROS** and do the following. 

    a. In the name field, type a name for the ROS service.

    b. In the Timeout field, enter the timeout in seconds. 

6. Optionally, to add configuration parameter to the executable, click Add Parameter. configuration parameters operate at the level of component and apply to executables in the component only.

7. Click **Next**.

## Step3: Configuring additional information

rapyuta.io allows you to configure the following additional information for the package.

**Volumes**: Applications running on the cloud de-allocate any resources consumed when they stop, scale down, or fail. This implies that the working storage associated with them is ephemeral. To get around this problem rapyuta.io provides a mechanism to consume persistent block storage for your applications running in the cloud. This storage can be associated with at most one running deployment at any given point of time. A user is typically required to manage the lifecycle of the application code independently from the associated storage.

The Rapyuta IO Persistent Volume is a storage package. A storage package is a public package which is available to all users out of the box. You cannot delete or modify storage packages, and they are available to every user.

**Dependent Deployment**: If your package has a dependency on a deployment, you must define the dependent deployment. 

**Inbound ROS interface**: While having provider semantics provides flexibility but can potentially lead to a case where a user may deploy a package that depends on a previously deployed one without sufficient knowledge of the internal workings of the parent package. Cross talk between topics/services/actions in such cases can cause unintended hard to debug errors and failure of application code.

To prevent against such unintentional cross-communication between deployments of two packages, rapyuta.io requires a package to declare a whitelist of ROS inbound topics/services/interfaces it can receive from a child dependant on it.



Perform the following procedure to add additional information to the package.

1. Click **Additional Information** tab. 

2. To add a volume to the package, click the refresh icon next to the Volume field and do the following. Before adding a volume package, ensure that you have created a volume package. Under Deployment, select the volume deployment that you created.

3. To add a dependent deployment, click the refresh icon next to the **Dependent Deployment** field and select the dependent deployment.

4. Click **Confirm** Package Creation.

## Related Links:

* [About Package](/1_understanding-rio/12_core-concepts/#package)
* For more information on package components, [click here](/5_deep-dives/52_software-development/525_package-internals)
* For more information on ROS components, [click here](/5_deep-dives/52_software-development/526_package-ros-support)