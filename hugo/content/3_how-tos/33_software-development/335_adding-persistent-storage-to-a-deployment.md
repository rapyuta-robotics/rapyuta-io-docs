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
---

Applications running on the cloud de-allocate any resources consumed when they stop, scale down, or fail. This implies that the working storage associated with them is ephemeral. To get around this problem rapyuta.io provides a mechanism to consume persistent block storage for your applications running in the cloud. This storage can be associated with at most one running deployment at any given point of time. A user is typically required to manage the lifecycle of the application code independently from the associated storage.



The Rapyuta IO Persistent Volume is a storage package. A storage package is a public package which is available to all users out of the box. You cannot delete or modify storage packages, and they are available to every user.


## Creating Storage
To preserve data files saved on the file server, deploy a persistent volume and add it to the package deployment.

1. Select the public package, **Rapyuta IO Persistent Volume** from Storage packages.
2. Click **Deploy package**.
3. The Name of deployment is Volume Storage
4. Ensure the disk type parameter of the volumeComponent is SSD. It provisions an SSD for block storage.
5. Ensure the capacity parameter of the volumeComponent is 32GiB. It refers to the size of block storage.
6. Click **CREATE DEPLOYMENT > Confirm**.

## Adding Storage to a Deployment
You can add the storage package as a dependent deployment. To add storage to a deployment, do the following.

1. Deploy the package where you want to add the storage package as a dependent deploymen. For more information, [click here](/3_how-tos/33_software-development/334_deploy-packages)adding-volume.png

2. On the deployment page, click **Add Volume** and do the following.

![add-volume](/images/core-concepts/deployments/adding-volume.png?classes=border,shadow&width=40pc)

3. Select the package depoyment from the **Deployment** drop-down menu.
4. Select the package component where you want to attach the volume package from the **Applicable Component** drop-down menu.
5. Add the path where you want to add the volume package in the **Mount Path** field.
6. To create deployment, click **Create Deployment>Confirm**.


## Related Links
* [About Persistent Storage](rapyuta.io/1_understanding-rio/core-concepts/communication-and-storage)
* [Deploying a Package](rapyuta.io/how-tos-software-development/deploy-packages)