---
title: "Packages"
description:
type: core-concepts
date: 2018-11-15T13:41:10+05:30
pre: "d. "
weight: 140
---
A package is the smallest unit of deployment in rapyuta.io. It is composed of
components, which are in turn made of executables. The components are deployed
either on a device or the cloud. Before a package is deployed, it must be added
to the catalog. By default, any package that you deploy holds exactly one plan.

## Executable
An executable is a runnable entity such as:

1. **Docker image**    
A docker image is used as an executable. When a deployment is triggered, rapyuta.io
pulls a docker image from the docker registry. Additionally, you may specify a
bash shell command, which overrides the
[entry point](https://docs.docker.com/engine/reference/run/#cmd-default-command-or-options)
of the docker container.
{{% notice info %}}
The maximum size of the docker image is 10GB for cloud deployment.
{{% /notice %}}
2. **Git repository**    
You may provide a git repository for an executable. rapyuta.io builds the source
code in the git repository into a docker image. Moreover, you may also specify a
bash shell command, which will be run in tandem with the executable.
3. **Bash command**    
A simple bash shell command is an executable. If you choose the **Executable Type**
as **Default**, the bash shell command becomes an executable. In this case, the
executable can run only on **Device** runtime. rapyuta.io assumes that all dependencies
that are required to run the command are already present on the device where
the command will execute.

## Component
A component is a set of executables. All executables are deployed in unison on
the desired [_Component Runtime_](/core-concepts/packages/#component-runtime).
All executables of a component share a specified file system (ensures data locality)
and communicate via Inter Process Communication (IPC). An executable listening
on a port is accessible to its sibling executables via localhost.

## Plan
A plan represents a different configuration of a package. When you add a new
package, there is always a single plan associated with the package. A plan is
uniquely identified by its plan ID.

## Bindable Attribute
A boolean attribute that is set while adding a package. When set to true for a
package with two or more ROS components, the components successfully communicate
with each other.

It also determines whether a deployment of a package can be used as a dependent
deployment of other deployments. If set false, the deployment of the package
cannot be used as a dependent deployment of another deployment.

It also determines whether a package can be added as an include package. If set
false, the package cannot be used as an include package.

## Network Endpoints
Components may have network endpoints. A network endpoint is a combination of an IP address and a port number. The endpoints may or may not be exposed publicly.

When creating an endpoint you must provide a name for the endpoint, select the desired network protocol and specify a target port.

{{% notice info %}}
The name of a network endpoint must consist of alphabets, digits or an underscore ( _ ), and must not begin with a digit.
{{% /notice %}}

**Port** is where the application's service is made visible to other services.

**Target port** is where the application needs to be listening for network requests for the service to work.

#### Exposing endpoints internally
You can restrict access to a network endpoint by ensuring that **Exposed externally** checkbox is not selected.

The only protocol available is the **TCP** for which the value of the **Port** field is set to ***443*** by default. However, you can change the port's value.
![internal endpoint](/images/core-concepts/network-endpoints/internal-endpoint.png?classes=border,shadow&width=40pc)

#### Exposing endpoints externally
Select **Exposed externally** checkbox to expose a network endpoint publicly over the internet.

The following are the supported protocols that are exposed on their respective ports (cannot be modified):

* HTTP/Websocket exposed on port ***80***
* HTTPS/WSS exposed on port ***443***
* Secure TCP (TLS/SNI) exposed on port ***443***

The **Secure TCP (TLS/SNI)** protocol uses [SNI](https://en.wikipedia.org/wiki/Server_Name_Indication) headers for routing the request to the desired backend.
![external endpoint](/images/core-concepts/network-endpoints/external-endpoint.png?classes=border,shadow&width=40pc)

rapyuta.io creates an accessible public IP address for externally exposed network endpoint. Hence, you can view the Fully Qualified Domain Name (FQDN) of the endpoint on successful deployments' details page.

#### Linking dependent deployments
For instance if you have a deployment *P* running on rapyuta.io that exposes a network endpoint defined as **SAMPLE_ENDPOINT** with the URL address: *https://inst-awesomesauce-url.apps.rapyuta.io:443* 
the rapyuta.io platform can use the above URL to determine the corresponding **HOST** and **PORT** values as follows

* **HOST**: *inst-awesomesauce-url.apps.rapyuta.io*
* **PORT**: *443*

The platform can now make this information available to any other resource it manages such as deployments.

Consider another deployment, say, *C* such that *C* depends on *P*. Hence, a parent-child relationship is established between deployments *P* and *C*. In this case, *P* becomes the ***dependent deployment*** (aka parent) of *C*.

The platform will make this information avaiable to C in the form of environment variables. To achieve this the platform injects exactly 3 environment variables corresponding to each endpoint.
It constructs the environment variable names as follows for each endpoint and sets their value from the information it has pertaining to the endpoint from the parent.

* **<ENDPOINT_NAME>**
* <ENDPOINT_NAME>**_HOST**
* <ENDPOINT_NAME>**_PORT**

Drawing from the aforementioned example this would correspond to following evnironment variables and their corresponding values: 

* **SAMPLE_ENDPOINT** : *https://inst-awesomesauce-url.apps.rapyuta.io:443* 
* **SAMPLE_ENDPOINT_HOST** : *inst-awesomesauce-url.apps.rapyuta.io*
* **SAMPLE_ENDPOINT_PORT** : *443*

The developer of the package running in *C* can now access these environment variables in code.

Eg The developer would access the value of the **SAMPLE_ENDPOINT** in a pyhton application using `import os; os.getenv('SAMPLE_ENDPOINT')`



## Component runtime
A component of a package may be deployed either on the cloud or on a device.
When deployed on the cloud, the component has cloud runtime. Whereas, the component
deployed on a device has device runtime.

## Configuration parameters
A configuration parameter is an abstraction for an environment variable. It is a
key-value pair, where both the key and the value are strings. You may also provide
the configuration parameters when deploying a package, and thus, the new values
override those defined during package creation. These parameters are injected into
the component's runtime as environment variables. An executable can now consume
these parameters through the standard environment variable look up techniques.

## Exposed parameters
A package may depend on another package. The package may also expose its
configuration parameters to another package.

## ROS configuration
In ROS applications, each component can share a list of ROS topics, services,
and actions with other components. The executables can subscribe to any topic
or call services or actions that are exposed by other components. This
configuration should be specified at the time of creating a package.

You do not have to include the ROS Master as an executable of a component if it
is meant to run on the cloud. The platform manages running ROS Master for you on
the cloud. You need to start the ROS Master on the devices whenever necessary,
by including it as an executable. Since this communication happens over WAN, you
can tune the level of reliability for the transport layer.
The QoS (quality of service) attribute of the package reflects this function.
For example, maximum QoS for a topic indicates that all messages published to a
topic are guaranteed to reach the subscribers of the topic. The offered QoS
values are Maximum, High, Medium, and Low.

{{% notice info %}}
Why not just use “maximum” QoS for all topics?    
QoS is proportional to the latency of the message: the average latency of maximum
QoS topics is higher than that of medium QoS topics.
{{% /notice %}}

## Inbound ROS interfaces
A deployment of a package may depend on a deployment of another package. If you
intend to add a deployment of another package as a dependent deployment of the
current package, the inbound ROS interface could be a:

* ROS topic that a dependent deployment publishes to the current package.
* ROS service or ROS action of the dependent deployment, and the current package
  is allowed to call that ROS action and/or ROS service.

## Volumes
While adding a new package to rapyuta.io, you may also add a volume to the package
just like you add another package or a dependent deployment.
To add a volume to a package, follow the steps:

1. Click **Add volume** on the **Additional Information** tab.
2. Select a deployment from the **Deployment** drop-down list.
3. Select a component from the **Applicable Component** drop-down list.
4. Provide a mount path in the **Mount path** box.

You may add a volume to a deployment of a package. To add a volume while
creating a deployment, follow the steps:

1. On the left navigation bar, click **CATALOG**.
2. Select the package you want to deploy with mounted volume.
3. Click **Add volume**.
4. Select a deployment from the **Deployment** drop-down list.
5. Select a component from from the **Application Component** drop-down list.
6. Provide a mount path in the **Mount path** box.

If you see a message, _No running volumes available_, ensure that a volume is
running prior to adding it to a deployment of a package.

## Catkin build parameters
You can control how ROS packages will be built by specifying catkin build parameters.
The [console](https://console.rapyuta.io) provides a handful of catkin
build parameters when adding a ROS package.
They are:

1. **ROS packages**    
A list of ROS packages in the catkin workspace that you want to build.    
The ROS package name must begin with an alphabet (A-Z, a-z), followed by alphanumeric
characters (A-Z, a-z, 0-9) or an underscore ( _ ) or at most one forward slash ( / )
2. 	**Blacklist**     
A list of ROS packages in the catkin workspace that you do not want to build even
if another package depends on it.    
The ROS package name must begin with an alphabet (A-Z, a-z), followed by alphanumeric
characters (A-Z, a-z, 0-9) or an underscore ( _ ) or at most one forward slash ( / )
3. **Make arguments**    
A list of make options that you intend to use while building the ROS package.
4. **CMake arguments**    
A list of cmake options that you want to use while building the ROS package.
5. **Catkin Make arguments**    
A list of make options that you want to use while building ROS packages.

The catkin build parameters are optional. If you choose to not specify any of them,
the ROS Builder will build all ROS packages in its catkin workspace.

The context directory is a specific project directory (folder) relative to the
git repository. It is copied to the ROS Builder's catkin workspace, and
subsequently, catkin build parameters are applied to it. In the absence of a
context directory, all of the folders in the git repository are built.

To add a set of catkin build parameters, click **Add Parameter** against
**CATKIN BUILD PARAMETERS** while adding a package using the [console](https://console.rapyuta.io).

You may provide multiple sets of catkin build parameters for a single ROS package,
thus you can run multiple catkin builds on a ROS package.

![Catkin build parameters](/images/core-concepts/packages/multiple-sets-catkin-build-params.png?classes=border,shadow&width=50pc)

## Dependencies and composition
rapyuta.io allows for a number of design patterns to help you compose an
application using a combination of one or more packages.

Read about [design patterns](/core-concepts/catalog/#design-patterns) for more
details on package composition.
