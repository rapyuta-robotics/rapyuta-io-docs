---
title: "Package Internals"
description:
type: developer-guide
date: 2019-10-25T12:34:08+05:30
pre: "2. "
weight: 275
---
### What is a package ?
A package is a fundamental rapyuta.io resource that represents a declaration of your application. A package is the smallest unit of deployment in rapyuta.io. It can be deployed either on a device or the cloud or both. To make this possible a package must encapsulate information about how it should be built, it’s compatibility and runtime requirements, network endpoints and ROS interfaces it exposes, and any configuration information it may require.

Each package consists of components which in turn are made up of individual executables. 

{{% notice note %}}
 **Advanced users** of rapyuta.io should note a package internally supports multiple **plans**, each  which in turn contain the necessary components.
  This feature is intended to facilitate complex usecases that require the developer to maintain the user to represent a slightly different configuration of a software package. *For more details <a href="#" onclick="javascript:FreshWidget.show();">contact support</a>.*
{{% /notice %}}

### Executables
Executables within a component are always executed on the same physical/virtual compute node and share a ROS Master (in the case of ROS applications).
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
executable can run only on **Preinstalled device** runtime. rapyuta.io assumes that all dependencies
that are required to run the command are already present on the device where
the command will execute.

### Components
A component is a set of executables. All executables are deployed in unison on
the desired [*Component Runtime*](/developer-guide/create-software-packages/package-internals/#component-runtime).
All executables of a component communicate via Inter Process Communication (IPC). An executable listening
on a port is accessible to its sibling executables via localhost.

{{% notice note %}}
Components are further nested into **plans**. A rapyuta.io "package" may contain multiple plans, each plan represents a different configuration of a package. At this point, when you add a new package in the rapyuta.io console , there is always a single plan associated with the package. A plan is uniquely identified by its plan ID
{{% /notice %}}

### Component Runtime
A component of a package may be deployed either on the **cloud** or on a **device**.

When deployed on the cloud, the component has cloud runtime. Whereas, the component deployed on a device has device runtime.

### Configuration Parameters
{{% notice info %}}
configuration parameters operate at the level of component, and apply to executables in the component only
{{% /notice %}}

In line with the 12-Factor application philosophy rapyuta.io allows the package author to pass configuration as environment variables that may be consumed by executables running  within a component.

These are mapped to environment variables made available to your code. They are modelled as key-value pairs (where both the key and the value are strings) accessible by the user’s code using standard environment variable look up techniques provided by the programming language.

The package author can choose to provide default values. These values may be overridden by the user while deploying the package.

{{% notice note %}}
A **package** may choose to declare environment variables as exposed from within its constituent components allowing dependent deployments to receive these values during deployment binding phase. Refer to the [dependent deployment](/developer-guide/manage-software-cycle/compose-software/design-patterns/#run-time-dependencies-dependent-deployments) section for more details.
{{% /notice %}}

{{% notice note %}}
The platform injects environment variables corresponding to exposed parameters and linked network endpoints during deployment binding phase. Refer to the [configuration injection](/developer-guide/manage-software-cycle/compose-software/binding/#configuration-injection-exposed-parameters) section for more details.
{{% /notice %}}

### Network Endpoints
{{% notice info %}}
network endpoints are exposed by individual components 
{{% /notice %}}
Components, which are deployed on the cloud, may have network endpoints. A network endpoint is a combination of an IP address and a port number. The endpoints may or may not be exposed publicly.

When creating an endpoint you must provide a name for the endpoint, select the desired network protocol and specify a target port.

{{% notice info %}}
The name of a network endpoint must consist of alphabets, digits or an underscore ( _ ), and must not begin with a digit.
{{% /notice %}}

**Port** is where the application's service is made visible to other services.

**Target port** is where the application needs to be listening for network requests for the service to work.

#### Exposing Endpoints Internally
You can restrict access to a network endpoint by ensuring that **Exposed externally** checkbox is not selected.

The only protocol available is the **TCP** for which the value of the **Port** field is set to ***443*** by default. However, you can change the port's value.
![internal endpoint](/images/core-concepts/network-endpoints/internal-endpoint.png?classes=border,shadow&width=40pc)

#### Exposing Endpoints Externally
Select **Exposed externally** checkbox to expose a network endpoint publicly over the internet.

The following are the supported protocols that are exposed on their respective ports (cannot be modified):

* HTTP/Websocket exposed on port ***80***
* HTTPS/WSS exposed on port ***443***
* Secure TCP (TLS/SNI) exposed on port ***443***

The **Secure TCP (TLS/SNI)** protocol uses [SNI](https://en.wikipedia.org/wiki/Server_Name_Indication) headers for routing the request to the desired backend.
![external endpoint](/images/core-concepts/network-endpoints/external-endpoint.png?classes=border,shadow&width=40pc)

rapyuta.io creates an accessible public IP address for externally exposed network endpoint. Hence, you can view the Fully Qualified Domain Name (FQDN) of the endpoint on successful deployments' details page.

