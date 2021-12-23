---

title: "Adding Persistent Storage"
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.
weight: 335
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

Applications running on the cloud de-allocate any resources consumed when they stop, scale down, or fail. This implies that the working storage associated with them is ephemeral. To get around this problem rapyuta.io provides a mechanism to consume persistent block storage for your applications running in the cloud. This storage can be associated with at most one running deployment at any given point in time. A user is typically required to manage the lifecycle of the application code independently from the associated storage.



The *Rapyuta IO Persistent Volume* is a storage package. A storage package is a public package that is available to all users out of the box. You cannot delete or modify storage packages, and they are available to every user.


## Creating Storage
To preserve data files saved on the file server, deploy a persistent volume and add it to the package deployment.

1. Select the public package, **Rapyuta IO Persistent Volume** from storage packages.
2. Click **Deploy package**.
3. In the **Name of deployment** field, type a name for the volume storage package.
4. By default, the **diskType** is SSD. It provisions an SSD for block storage.
5. Click **CREATE DEPLOYMENT > Confirm**. The storage package is deployed.

## Adding Storage to a Deployment
You can add the storage package as a dependent deployment. To add storage to a deployment, do the following.

1. Deploy the package where you want to add the storage package as a dependent deployment. For more information, see [Deploying Packages](/3_how-tos/33_software-development/334_deploy-packages).

2. Add volume to manage your storage. For more information, see [Managing Disks](/3_how-tos/33_software-development/336_creating-cloud-volume)

<!--
![add-volume](/images/core-concepts/deployments/adding-volume.png?classes=border,shadow&width=40pc)

3. Select the package deployment from the **Deployment** drop-down menu.
4. Select the package component where you want to attach the volume package from the **Applicable Component** drop-down menu.
5. Add the path where you want to add the volume package in the **Mount Path** field.
6. To create a deployment, click **Create Deployment>Confirm**. The storage deployment is added to the deployment.

-->
## Related Links
* [About Persistent Storage](/1_understanding-rio/12_core-concepts/#storage)
* [Deploying a Package](/3_how-tos/33_software-development/334_deploy-packages)