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
---
A package is a fundamental rapyuta.io resource that represents a declaration of your application. It is the smallest unit of deployment in rapyuta.io, and it can be deployed either on a device or the cloud or both.

To make this possible, a package must encapsulate any information about how it should be built, its compatibility and runtime requirements, network endpoints and ROS interfaces it exposes, and any configuration information it may require.

Creating a software package consists of the following high-level procedures.

**Step1**: [Define Package information](#defining-package-information)

**Step2**: [Create Components](#creating-components)

**Step3**:[Configure additional information](#configuring-additional-information)

## Step 1: Defining Package information


To add the metadata of the package, do the following.

1. On the left navigation bar, click **Development>catalog**.
[!package-creation](rapyuta.io\how-tos\33_software-development\images\package-information.png)
2. In the package information section, do the following.

​     a. Type a package name in the Package Name field.

​     b. Type the package version in the package version field.

​     c. Click  one of the following.
       * **Is a singleton package**: Select this option if a package is not dependent on   another  package.
      * **Is a bindable package**: Select this option if a package depends on another package or deployment of another package, the package bindings link the package to its dependencies.

3. In the **Description** field, type a brief description about the package and click **Next**.


## Step 2: Creating Components

A component is a set of executables. All executables are deployed in unison on the desired Component Runtime. All executables of a component communicate via Inter-Process Communication (IPC). An executable listening on a port is accessible to its sibling executables via localhost.

Perform the following procedure to create  components

1. Click the **Components** tab.

2. In the component metadata area, do the following.

​     a. In the **Component Name** field, type a name for the component. 

​     b. In the **Component Runtime** field, select the component runtime either as **Device** or **Cloud**. 

    *​  Select  the component runtime as **```Cloud```**, if this component runs on cloud

     * 	Select the runtime as **```Device```** if the component is to run on a device

​     c. If the component is to be deployed on a ROS enabled device, click the **IS ROS Component** check-box.

​     d. In the Replicas to run the component, type the number of replication of the component required for the package.



3. In the executables area, do the following.

​     a. In the **Executable Name** field, type a name of the executable.  Executables within a component are always executed on the same physical/virtual compute node and share a ROS Master (in the case of ROS applications). 

​     b. From the **executable Type** drop-down menu, select either one of the following executable type. </br>

​      **Build**: Executables can reference existing rapyuta.io Build. Builds help you create a GitOps pipeline by specifying a repository and a build recipe. rapyuta.io can then build your git source code into a container image. Executables referencing builds use the generated images at the time of package deployment. Custom bash command can additionally be specified and is executed when the package is deployed.

​     **Docker**: A docker image is used as an executable. When a deployment is triggered, rapyuta.io pulls a docker image from the docker registry. Additionally, you may specify a bash shell command, which overrides the entry point of the docker container.

​      **Default**: Executables which run a command on the device directly can use the Default option. 

> ```Default``` option is only applicable for Device Components and packages with  default executables can only be deployed on devices with preinstalled runtime

​     c. If you have selected the executable type as **Builds**, from the Choose **Build** drop-down menu, select the build. 

​     d. If you have selected the executable type as **Docker**, in the Docker Image field, type the docker image that you want to use. For more information about creating the build recipe as docker, click here.

​     e. Optionally, if the docker image is a private image, click the **Private Image** check-box and select the credential from the **Credentials** drop-down menu.

​     f. In the **Command to Run** field, in the docker container box, enter the command to run the executables.

​     g. From the Resource limit drop-down menu, select the CPU and memory requirement for the executable.



4.  Optionally, to add an end-point, click **Add Endpoint** and do the following.

​     a. In the Endpoint Name field, type a name for the endpoint.

​     b. If the endpoint is exposed publicly, click the Exposed externally radio button and do the following.

​          i. From the protocol section, select one of the following available protocols. 

​       <ul> <li>HTTP/Websocket exposed on port 80</li>

​       <li>HTTP/Websocket exposed on port 443</li>

​       <li>Secure TCP (TLS/SNI) exposed on port 443</li>

​          ii. In the Target Port field, type the target port. Port is where the application’s service is made visible to other services.

> **INFO** : The Secure TCP (TLS/SNI) protocol uses SNI headers for routing the request to the desired backend.

​     c. If the endpoint is accessed internally, do the following.

​          i. In the port field, type the port number for the endpoint. Port is where the application’s service is made visible to other services.

​          ii. In the Target Port field, type the target port. Target port is where the application needs to be listening for network requests for the service to work.

​          iii. Optionally, You can also use port range for an endpoint by selecting Port Range toggle. A Port Range on an endpoint will allow you to open multiple ports on a single DNS hostname.

> Note: A maximum 50 ports are allowed for an endpoint. Allowed format is comma separated Port Ranges. Each Port Range is either a single port or a range of port mentioning the from port and to port separated by a hyphen (-). Examples: 5000 or 443-445 or 3446-3449,3500,3510-3530

4. If you want to add a ROS topic to the package, click Add ROS topic and do the following. A ROS topic is intended for unidirectional, streaming communication.

​     a. In the name field, type the name of the ROS topic.

​     b. Select one of the following.  **Compressed**, **Scoped**,  **Targeted**:

​     c. To add  a tunable level of reliability for ROS topics for the transport layer even over the public internet, select one of the following QOS types.

​     		i. **Maximum**: The highest possible QoS is Maximum by using end to end protocol delivery confirmations, message ordering guarantees, and retires in case of failure. It is typically intended for one-off critical control/command messages. e.g. : Start/Stop application

​     		ii. **High/Medium:** These are intermediate levels offered between the two extremes that may be more suited in more intermediate cases. Each 	level trades off to balance reliability and performance differently.

​     		iii. **Low**: The lowest possible QoS is Low and is used for rapidly produced data such as sensor/telemetry data where the application can tolerate small message loss in favor of better performance, throughput, and lower latency.


5. If you want to add a ROS service to the package, click **Add ROS** and do the following. 

   In the name field, type a name for the ROS service.

   In the Timeout field, enter the timeout in seconds. A ROS service call is blocking in nature. It prevents the client thread from continuing to execute further instructions until it receives a reply from a ROS server. Occasionally, the service call waits much longer than expected, and in more adverse cases, the call never returns due to software or network failure. Hence, further execution of the client program is stalled.

   rapyuta.io defines ROS service timeout as the number of seconds to wait for a response to the service request before timing out and erroring out. The application developer must add appropriate logic to handle these exceptions as required. The default timeout is 120 seconds.

   

6. Optionally, to add configuration parameter to the executable, click Add Parameter. configuration parameters operate at the level of component and apply to executables in the component only.

7. Click **Next**.

## Step3: Configuring additional information

Rapyuta.io allows you to configure the following additional information for the package.

**Volumes**: Applications running on the cloud de-allocate any resources consumed when they stop, scale down, or fail. This implies that the working storage associated with them is ephemeral. To get around this problem rapyuta.io provides a mechanism to consume persistent block storage for your applications running in the cloud. This storage can be associated with at most one running deployment at any given point of time. A user is typically required to manage the lifecycle of the application code independently from the associated storage.

The Rapyuta IO Persistent Volume is a storage package. A storage package is a public package which is available to all users out of the box. You cannot delete or modify storage packages, and they are available to every user.

**Dependent Deployment**: If your package has a dependency on a deployment, you must define the dependent deployment. 

**Inbound ROS interface**: While having provider semantics provides flexibility but can potentially lead to a case where a user may deploy a package that depends on a previously deployed one without sufficient knowledge of the internal workings of the parent package. Cross talk between topics/services/actions in such cases can cause unintended hard to debug errors and failure of application code.

To prevent against such unintentional cross-communication between deployments of two packages, rapyuta.io requires a package to declare a whitelist of ROS inbound topics/services/interfaces it can receive from a child dependant on it.



Perform the following procedure to add additional information to the package.

1. Click Additional **Information** tab. 

2. To add a volume to the package, click the refresh icon next to the Volume field and do the following. Before adding a volume package, ensure that you have created a volume package.

Under Deployment, select the volume deployment that you created.

3. To add a dependent deployment, click the refresh icon next to the **Dependent Deployment** field and select the dependent deployment.

4. Click **Confirm** Package Creation.

Related Links:

* [About Package](rapyuta.io/understanding-rio/core-concepts)
* For more information on package components, [click here](rapyuta.io/deep-dives/development/package-software)