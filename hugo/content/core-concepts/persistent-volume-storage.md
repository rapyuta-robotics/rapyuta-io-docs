---
title: "Persistent volume/storage"
date:
weight: "15"
---
Cloud components can use persistent [block storage](https://en.wikipedia.org/wiki/Block-level_storage).
**Rapyuta IO Persistent Volume** is a storage package. A storage package is a
public package which is available to all users out of the box. You cannot delete
or modify storage packages and they are available for every user and group to deploy.

The next section describes how you can use **Rapyuta IO Persistent Volume** in a
[Minio](https://www.minio.io/) file server to persist files and reuse them.

## Create new package for file server
You will create a [Minio](https://www.minio.io/) file server using the given [docker image](https://hub.docker.com/r/rrdockerhub/minio-server/).
The docker image, which is maintained by rapyuta.io, stores all the file data in the path
`/data`. You will create a new package called _minio_.

To add the _minio_ package, follow the steps:

1. Click **CATALOG** > **ADD NEW PACKAGE**.
2. In the **Package Name** box, enter the name of the package say _minio_.
3. You will provide a brief description about the package in the **Description** box.
4. Click **NEXT**.
5. In the **Component Name** box, type in a name for the component say _Minio_.
6. Select **Cloud** as **Component Runtime**.
7. Select **Is ROS Component** checkbox.
8. In the **Executable Name** box, enter a name for the executable say _minio_.
9. Select **Docker** for **Executable Type**.
10. In the **Docker image** box, enter *rrdockerhub/minio-server*
11. Click **Add Endpoint**.
	1. Give a name for the endpoint in the **Endpoint Name** box say _UIendpoint_.
	2. Select **Exposed externally** checkbox.
	3. Select **HTTPS/WSS** for **Protocol**.
	4. In the **Port** box, the default value is _443_ unless you want to change the port number.
	5. In the **Target Port** box, enter _9000_.
12. You will add two **CONFIGURATION PARAMETERS** - **MINIO_SECRET_KEY** and **MINIO_ACCESS_KEY**.
	1. Click **Add Parameter**.
	2. In the **Name** box, enter **MINIO_SECRET_KEY**.
	3. In the **Description** box, provide brief details of the parameter.
	4. Similarly, add another parameter **MINIO_ACCESS_KEY**.
13. Click **NEXT** > **CONFIRM PACKAGE CREATION** > **Confirm**.

## Create a deployment of minio without persistent volume
You can deploy [Minio](https://www.minio.io/) server without persistent volume,
that is, though a minio server is provisioned, the data/files stored on the server are lost after
deprovisioning the deployment.

To deploy Minio server without persistent volume, follow these steps:

1. Click **CATALOG** > Select _minio_ package > Click **Deploy package**
2. In the **Name of deployment** box, enter the deployment's name, such as
_deploy-minio-without-persistent-volume_
3. In the **MINIO_SECRET_KEY** box, enter a value for the secret key.    
The secret key must be between 8 and 40 characters.
4. In the **MINIO_ACCESS_KEY** box, enter a value for the access key.
5. Click **CREATE DEPLOYMENT** > **Confirm**.

To access the minio deployment at the provided endpoint, wait until the **STATUS**
becomes **Running**:

You can now access the Minio UI at the provided endpoint. In the **Access Key** and
**Secret Key** boxes, enter the same access key and secret key that you provided,
respectively.

You can use the UI to add buckets and files.

Since this deployment does not use a persistent volume, any files that you add
on the server will be lost when you deprovision the deployment.

## Deploy minio with a persistent volume
If you wish to not lose files/data of a running instance of minio even after
deprovisioning it, you need to use **Rapyuta IO Persistent Volume**. To use a
persistent volume for _minio_, follow the below process:

1. Click **CATALOG** > Select **Rapyuta IO Persistent Volume** package.
2. Click **Deploy package**.
3. In the **Name of deployment** box, enter a name for the deployment say _minio-volume_.
4. Select *Default* as *diskType* parameter. It provisions an ordinary disk for
block storage, while the SSD option provisions an SSD.
5. The capacity parameter refers to the size of block storage. It can be between
1GB and 100 GB. Enter the number 1 in the **capacity** box.
6. Click **CREATE DEPLOYMENT** > **Confirm**.

To use _minio-volume_ for the deployment of _minio_, follow these steps:

1. click **CATALOG** > Select _minio_ package > **Deploy package**.
2. In the **Name of deployment** box, enter a name for the deployment, such as
_deployment-with-pv_.
3. For **MINIO_SECRET_KEY** and **MINIO_ACCESS_KEY**, provide the same values that
you set in the _minio_ package.
4. Click **Add volume**.
5. Select the persistent volume deployment that you created, _minio-volume_.
6. Select the name of the cloud component that needs the persistent volume from
the **Applicable Component** drop-down list. In this example, choose the _Minio_
component.
7. Persistent volume will be mounted at mount path. Since minio stores
data/files at `/data`, provide `/data` as the value of **Mount path**.
8. Click **CREATE DEPLOYMENT** > **Confirm**.

This will create the deployment of minio with a persistent volume attached at `/data`.

If you deprovision **deployment-with-pv** deployment, the **minio-volume** deployment
will not be deprovisioned. Furthermore, the **minio-volume** deployment can be used
for another deployment of minio package.

1. A deployment of a persistent volume cannot be deprovisioned if it is already
in use by another deployment.
2. A deployment of a persistent volume cannot be used by another deployment if
it is already in use by another deployment.
