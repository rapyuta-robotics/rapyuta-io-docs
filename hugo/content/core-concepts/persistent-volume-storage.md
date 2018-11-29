---
title: "Persistent Volume/Storage"
description:
type: core-concepts
date: 2018-11-19T17:23:52+05:30
pre: "i. "
weight: 185
---
Cloud components can use persistent [block storage](https://en.wikipedia.org/wiki/Block-level_storage).
**Rapyuta IO Persistent Volume** is a storage package. A storage package is a
public package which is available to all users out of the box. You cannot delete
or modify storage packages, and they are available to every user and group to deploy.

You can use **Rapyuta IO Persistent Volume** in a [Minio](https://www.minio.io/)
file server to persist files and reuse them.

You will create a [Minio](https://www.minio.io/) file server using the given [docker image](https://hub.docker.com/r/rrdockerhub/minio-server/).
The docker image, which is maintained by rapyuta.io, stores all the file data in the path
`/data`. You will create a new package called _minio_ for [Minio](https://www.minio.io/)
file server.

To add the _minio_ package, follow the steps:

1. Click **CATALOG** > **ADD NEW PACKAGE**.
2. In the **Package Name** box, enter the name of the package say _minio_
3. In the Package Version box, enter the version of the package. By default, it
   is set to 1.0.0
4. Ensure **Is a singleton package** is not selected.
5. Ensure **Is a bindable package** is selected.
6. Enter a brief description of the package in the **Description** box say
   _Minio server_
7. Click **NEXT**.
8. In the **Component Name** box, type in a name for the component say _Minio_
9. Select **Cloud** as **Component Runtime**.
10. Select **Is ROS Component** checkbox.
11. Set **Replicas to run the component** to a number greater than 1 (default value).
12. In the **Executable Name** box, enter a name for the executable say _minio_
13. Select **Docker** for **Executable Type**.
14. In the **Docker image** box, enter *rrdockerhub/minio-server*
15. Click **Add Endpoint**.
	1. Give a name for the endpoint in the **Endpoint Name** box say _UIendpoint_
	2. Select **Exposed externally** checkbox.
	3. Select **HTTPS/WSS** for **Protocol**.
	4. In the **Port** box, the default value is _443_, and you are not allowed
       to change this value.
	5. In the **Target Port** box, enter _9000_
16. You will add two **CONFIGURATION PARAMETERS** say *MINIO_SECRET_KEY* and *MINIO_ACCESS_KEY*.
	1. Click **Add Parameter**.
	2. In the **Name** box, enter *MINIO_SECRET_KEY*
	3. In the **Description** box, provide short description for the parameter say
	   _secret_
	4. Similarly, add another parameter *MINIO_ACCESS_KEY*. Enter _key_ in the description box.
17. Click **NEXT** > **CONFIRM PACKAGE CREATION** > **Confirm**.

## Deploy without persistent volume
You can deploy [Minio](https://www.minio.io/) server without persistent volume,
that is, though a _Minio_ server package is provisioned, the data/files stored on
the server are lost after de-provisioning the deployment.

To deploy _Minio_ server package without persistent volume, follow these steps:

1. Click **CATALOG** > Select _minio_ package > Click **Deploy package**.
2. In the **Name of deployment** box, enter the deployment's name, such as
_minio-without-persistent-volume_
3. Under **COMPONENT DETAILS**, the **Parameters** for **Minio (Cloud runtime)** are:
	1. In **MINIO_SECRET_KEY** box, enter a value for the secret key say _hassecrets_
       The secret key must be between 8 and 40 characters.
	2. In the **MINIO_ACCESS_KEY** box, enter a value for the access key say _vivek_
       The access key must be at least three characters.
4. Click **CREATE DEPLOYMENT** > **Confirm**.

You will be redirected to the newly created deployment's **Details** tab. The package
is successfully deployed when the green coloured bar moves from **In progress** to
**Succeeded** indicating that the **DEPLOYMENT PHASE** has **Succeeded** and the **STATUS** is
**Running**.

![minio deployment without persistent volume](/images/core-concepts/persistent-vol-storage/minio-wo-pv-deployment.png?classes=border)

To access the _minio_ package's deployment at the provided
endpoint, copy and paste the highlighted web page link in a new browser tab.

![minio network endpoint](/images/core-concepts/persistent-vol-storage/minio-wo-pv-endpoint.png?classes=border)

You can now access the [Minio](https://www.minio.io/) UI at the provided endpoint.
You can use the UI to add buckets and files. In the **Access Key** and
**Secret Key** boxes, enter the same access key and secret key that you
provided while creating the above deployment, respectively.

![minio login in separate browser tab](/images/core-concepts/persistent-vol-storage/minio-login.png?classes=border)

Since this deployment does not use a persistent volume, any files that you add
on the server will be lost when you de-provision the deployment.

## Deploy with a persistent volume
If you wish to not lose files/data of a running instance of minio even after
de-provisioning it, you need to use **Rapyuta IO Persistent Volume**. To use a
persistent volume for _minio_, follow the below process:

1. Click **CATALOG** > Select **Rapyuta IO Persistent Volume** package.
2. Click **Deploy package**.
3. In the **Name of deployment** box, enter a name for the deployment say _minio-volume_
4. Select *Default* as *diskType* parameter. It provisions an ordinary disk for
   block storage, while the SSD option provisions an SSD.
5. The capacity parameter refers to the size of block storage. It can be between
   1GB and 100 GB. Enter the number *2* in the **capacity** box.
   ![deploy minio volume](/images/core-concepts/persistent-vol-storage/deploy-minio-volume.png?classes=border)
6. Click **CREATE DEPLOYMENT** > **Confirm**.

To use _minio-volume_ for the deployment of _minio_, follow these steps:

1. click **CATALOG** > Select _minio_ package > **Deploy package**.
2. In the **Name of deployment** box, enter a name for the deployment, such as
_minio-deployment-with-pv_.
3. For **MINIO_SECRET_KEY** and **MINIO_ACCESS_KEY**, provide the values _hassecrets_
   and _vivek_ respectively.
4. Click **Add volume**.
5. Under **Deployment**, select the persistent volume deployment that you created, _minio-volume_
6. Select the name of the cloud component that needs the persistent volume from
   the **Applicable Component** drop-down list. In this example, choose the _Minio_
   component.
7. Persistent volume will be mounted at mount path. Since Minio stores
   data/files at `/data`, provide `/data` as the value of **Mount path**.
   ![Add volume](/images/core-concepts/persistent-vol-storage/add-volume.png?classes=border)
8. Click **CREATE DEPLOYMENT** > **Confirm**.

This will create the deployment of minio with a persistent volume attached at `/data`.

![minio deployment with persistent volume](/images/core-concepts/persistent-vol-storage/minio-deployment-with-pv.png?classes=border)

The corresponding dependency graph for the *minio-deployment-with-pv* looks like:

![dependency graph for minio deployment with persistent volume](/images/core-concepts/persistent-vol-storage/minio-with-pv-dgraph.png?classes=border)

If you de-provision **minio-deployment-with-pv** deployment, the **minio-volume** deployment
will not be de-provisioned. Furthermore, the **minio-volume** deployment can be used
for another deployment of _minio_ package.

1. A deployment of a persistent volume cannot be de-provisioned if it is already
in use by another deployment.
2. A deployment of a persistent volume cannot be used by another deployment if
it is already in use by another deployment.
