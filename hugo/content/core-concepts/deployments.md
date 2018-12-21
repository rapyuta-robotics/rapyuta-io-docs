---
title: "Deployments"
description:
type: core-concepts
date: 2018-11-19T17:01:38+05:30
pre: "h. "
weight: 180
---
A deployment is a running instance of a package. You can deploy a package using
the [rapyuta.io console](https://closed-beta.rapyuta.io).
While deploying a package, rapyuta.io will:

1. Deploy components either on the cloud or on a device as you specified in a package.
2. Resolve dependencies of a package.
3. Inject package bindings of dependencies into a package's components.
4. Create and expose network endpoints.

rapyuta.io handles deployment requests asynchronously.

## Deployment phase
The lifecycle of a deployment consists of multiple phases. The **DEPLOYMENT PHASE**
indicates the current phase of the deployment in its lifecycle.

The below table lists the phases of deployment as they appear in the lifecycle:


| Deployment phase | Description |
| ---------------- | ----------- |
| In progress | accepts request to deploy package and starts deployment process |
| Provisioning | pulls a docker image and creates a running instance of the image (docker container) for each executable of the component |
| Succeeded | each executable of every component is successfully started |
| Failed to start | error occurred during In progress phase |
| Partially deprovisioned | you deprovisioned a deployment, but there is at least one component that could not be deprovisioned |
| Deployment stopped | you deprovisioned a deployment, and all of its components are stopped |

![Deployment](/images/core-concepts/deployments/deployment-phase.png?classes=border,shadow&width=50pc)

## Status
rapyuta.io enables you to monitor the current status of each executable of a
component that is deployed. The overall status of a deployment of a package
depends on the combined status of all components participating in the deployment.

The following table lists the statuses you may see during the **Provisioning**
deployment phase:


| Status | Description |
| ------ | ----------- |
| Pending | docker image is being pulled or docker container is being created |
| Error | error occurs while pulling a docker image or creating a docker container |

The following table lists the statuses you may see during the **Succeeded**
deployment phase:

| Status | Description |
| ------ | ----------- |
| Running | executables of components are running |
| Pending | restarting executable due to runtime error in the application or rapyuta.io software |
| Error | runtime error occurred |
| Unknown | rapyuta.io is unaware of the current status |

If the status of an executable reads **Pending** or **Error**, you are provided
the cause of the status as **Reason**.

![Reason field](/images/core-concepts/deployments/reason-field.png?classes=border,shadow&width=50pc)

If the overall deployment **STATUS** is **Error**, the [console](https://closed-beta.rapyuta.io)
displays an error code along with a brief description of the error.
The following table lists the error codes that are available, short descriptions
and the recommendations you should take:

| Error code | Description | Recommended action |
| ---------- | ----------- | ------------------ |
| DEP_E151 | device is either offline or not reachable | check the internet connection of the device |
| DEP_E152 | executables of the component deployed on the device either exited too early or failed | troubleshoot the failed component by analysing deployment logs |
| DEP_E153 | unable to either pull the docker image or build the source code for the component deployed on cloud | verify that the docker image provided while adding the package still exists at the specified registry endpoint |
| DEP_E154 | executables of the component deployed on cloud exited too early | troubleshoot the failed component by analysing deployment logs |
| DEP_E155 | executables of the component deployed on cloud failed | troubleshoot the failed component by analysing deployment logs |
| DEP_E156 | dependent deployment is in error state | troubleshoot the dependent deployment that is in error state |
| DEP_E161 | docker image is not found for executables of components deployed on device | verify that the path of the docker image is valid |
| DEP_E2xx | internal rapyuta.io error in the components deployed on cloud | report the issue together with the relevant details to the support team |
| DEP_E3xx | internal rapyuta.io error in the components deployed on a device | report the issue together with the relevant details to the support team |

## Shell access
rapyuta.io lets you **SSH** into the environment of a running executable.
On the **Shell Access** tab, click **SSH**.

![Shell access ssh](/images/core-concepts/deployments/shell-access-ssh.png?classes=border,shadow&width=60pc)

Once you SSH into the environment of an executable, you can execute shell
commands such as `pwd`, `ls -l` at the terminal's prompt. This is helpful in
debugging the environment.

![Execute shell commands](/images/core-concepts/deployments/execute-shell-commands.png?classes=border,shadow&width=30pc)

To go back to the list of all running containers, click **Back**.

If the SSH connection is disconnected (the green dot turns red and the status
reads Connection closed), click **RECONNECT** to establish an active SSH
connection again.

## Singleton deployment
Some packages may need to be instantiated only once for a particular user/group.
While adding a package, you may select **Is singleton package** option to
restrict the number of deployments of a resource intensive package to only one.


## Dependency Graph
A dependency graph is a set of deployments and the relationships between them. The
rectangular node of the graph represents a deployment (running or non-running).
For example, consider the dependency graph shown below. The *COMMAND CENTER* and
*SIMULATOR* are running deployments. The weighted red arrow connecting the two deployments
indicates the relationship between them.

![dependency graph without ROS details](/images/core-concepts/deployments/dgraph-wo-ros.png?classes=border,shadow&width=30pc)

There are three types of relationships:

* **Dependent Deployment**    
  A rectangular node that is highlighted in red colour is the running deployment
  whose Details you are currently viewing. The arrow points from a deployment to the deployment(s) it depends on.
  For instance, in the above graph, *COMMAND CENTER* depends on *SIMULATOR*, that is, *SIMULATOR* is a
  dependency (or "dependent deployment") of *COMMAND CENTER*.
* **ROS topic publisher - subscriber**    
  A green arrow represents one ROS Topic. It points from the deployment providing (publishing) the topic
  to the deployment consuming (subscribing to) the topic.
  For example, *SIMULATOR* publishes */sim/sensors* and */sim/pose* while *COMMAND
  CENTER* subscribes to the topics.

  ![dependency graph with ROS details](/images/core-concepts/deployments/dgraph-with-ros-details.png?classes=border,shadow&width=30pc)

{{% notice info %}}
To view ROS details of a dependency graph, select **Show ROS Communication Details** checkbox.
{{% /notice %}}

* **ROS service request - reply**    
  A pink arrow represents one ROS Service. It points from the deployment providing the service
  to the deployment consuming (calling) the service.
  For instance, the *COMMAND CENTER* requests the */teleport_turtle* and
  */register_sim_turtle service* from the *SIMULATOR*.
* **ROS action client - server**    
  A yellow arrow represents one ROS Action. It points from the deployment providing the action (server)
  to the deployment consuming (client) the action. 
  In this example, the *TURTLE* package listens to the command /turtle_0/goto_action from *COMMAND CENTER*.

 ![Complete dependency graph](/images/core-concepts/deployments/complete-dgraph.png?classes=border,shadow&width=60pc)


 You may click anywhere near a dependency graph (ensure you click anywhere only
in the blue colour highlighted checkbox) to enlarge or shrink the graph. Press
the *ESC* key to exit after adjusting the graph's size.
