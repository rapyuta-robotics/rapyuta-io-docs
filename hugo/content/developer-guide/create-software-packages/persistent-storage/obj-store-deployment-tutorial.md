---
title: "Object Store Deployment Walkthrough"
description:
type: developer-guide
date: 2019-10-25T12:36:50+05:30
pre: "a. "
weight: 295
---
You will learn how to use the **Rapyuta IO Persistent Volume** package in a [MinIO](https://www.minio.io/) file server to persist files and reuse them.

You will create a [Minio](https://www.minio.io/) file server using the given [docker image](https://hub.docker.com/r/rrdockerhub/minio-server/).
The docker image, which is maintained by rapyuta.io, stores all the file data in the path
`/data`. You will create a new package called ***MinIO File Server*** for [MinIO](https://www.minio.io/) file server.

To add the ***MinIO File Server*** package, follow the steps:

1. On the left navigation bar, Click **CATALOG**
2. Click **ADD NEW PACKAGE**.
3. The name of the package is `MinIO File Server`
4. The version of the package is set to **1.0.0** by default. 
5. Ensure **Is a singleton package** is ***not selected***.
6. Ensure **Is a bindable package** is ***selected***.
7. The purpose of the package is to `store images, videos, and other unstructured data files in an object-store.`
8. Click **NEXT**.
9.  The name of the component is `MinIO_FS`
11. Select **Cloud** as **Component Runtime**.
12. Ensure **Is ROS Component** is selected.
13. Choose **Kinetic** for the **ROS version**.
14. Ensure the value of **Replicas to run the component** is set to **1**
15. The name of the executable is `minio_executable`
16. Select **Docker** for **Executable Type**.
17. In the **Docker image** box, enter `rrdockerhub/minio-server`
18. Click **Add Endpoint**.
	1. The name for the endpoint is `FileStorage`
	2. Select **Exposed externally** checkbox.
	3. Select **HTTPS/WSS** for **Protocol**.
	4. In the **Port** box, the default value is `443`, and it cannot be modified.
	5. In the **Target Port** box, enter `9000`
19. Add two **CONFIGURATION PARAMETERS**: *MINIO_SECRET_KEY* and *MINIO_ACCESS_KEY*.
	6. Click **Add Parameter**.
	7. In the **Name** box, enter `MINIO_SECRET_KEY`
	8. In the **Description** box, describe the parameter, say `secret key`
	9. Similarly, add another parameter `MINIO_ACCESS_KEY`, and enter `secret access key` in the **Description** box.
20. Click **NEXT** > **CONFIRM PACKAGE CREATION**.

## Deploy without persistent volume
You can deploy a MinIO server without persistent volume,
that is, even though a *MinIO File Server* package is provisioned, the data files are lost after de-provisioning the deployment.

To deploy ***MinIO File Server*** package without persistent volume, follow the below steps:

1. Click **CATALOG** > Select **MinIO File Server** package > Click **Deploy package**.
2. The **Name of deployment** is `Data Without Permanence`
3. Under **COMPONENT DETAILS**, the **Parameters** for **MinIO_FS (Cloud runtime)** are:
	1. In **MINIO_SECRET_KEY** box, enter a value for the secret key say `secretphrase`, and it is mandatory that
       the secret key must be between 8 and 40 characters.
	2. In the **MINIO_ACCESS_KEY** box, enter a value for the access key say `griffindor` and ensure the access key must be at least three characters.
4. Click **CREATE DEPLOYMENT** > **Confirm**.

You will be redirected to the newly created deployment's **Details** tab. When the green colored bar moves from **In progress** to **Succeeded**, it indicates that the **DEPLOYMENT PHASE** has **Succeeded** and the **STATUS** is **Running**. Then, the package is deployed successfully.

To access the object storage at the provided
endpoint, copy and paste the highlighted URL address in a new browser tab.

You can now access the dashboard of MinIO object store at the provided endpoint. You can add buckets where unstructured data files can be stored.

In the **Access Key** and **Secret Key** boxes, enter the same access key and secret key that you provided while creating the above deployment, respectively.

Since this deployment does not use a persistent volume, any files that you add on the server will be lost when you stop (or de-provision) the deployment of the package.

## Deploy with a persistent volume
To preserve data files saved on the file server,
add the deployment of the **Rapyuta IO Persistent Volume** package as a dependent deployment.

To deploy the **Rapyuta IO Persistent Volume** package, follow the below instructions in sequence:

1. On the left navigation bar, click **CATALOG**.
2. Select **Rapyuta IO Persistent Volume** package from **Storage packages**.
3. Click **Deploy package**.
4. The **Name of deployment** is `Volume Storage`
5. Ensure the ***diskType*** parameter of the **volumeComponent** is **SSD**. It provisions an SSD for block storage.
6. Ensure the ***capacity*** parameter of the **volumeComponent** is **32GiB**. It refers to the size of block storage.
7. Click **CREATE DEPLOYMENT** > **Confirm**.

To add ***Volume Storage*** as a dependent deployment, follow these steps:

1. On the left navigation bar, click **CATALOG**.
2. Select **MinIO File Server** package > **Deploy package**.
3. The **Name of deployment** is `Data With Permanence`
3. For **MINIO_SECRET_KEY** provide the value `secretphrase`, and for **MINIO_ACCESS_KEY** provide the value `griffindor` respectively.
4. Click **Add volume**.
5. Under **Deployment**, select the persistent volume deployment that you created, **Volume Storage**
6. Select the name of the cloud component that needs persistent volume from the **Applicable Component** drop-down list. In this example, choose the **MinIO_FS** component.
7. The persistent volume is mounted at mount path. Since Minio stores data files at ***/data***, provide `/data` as the value of **Mount path**.
8. Click **CREATE DEPLOYMENT** > **Confirm**.

It will create the deployment of an object store with a persistent volume attached at `/data`.

The corresponding dependency graph looks like:

If you de-provision **Data With Permanence** deployment, the **Volume Storage** deployment will not be de-provisioned. Furthermore, the **Volume Storage** deployment can be used
for another deployment of **MinIO File Server** package.

1. A deployment of a persistent volume cannot be de-provisioned if it is already in use by another deployment.
2. A deployment of a persistent volume cannot be used by another deployment if it is already in use by another deployment.
