---
title: "Deploying Grafana to Visualize Metrics"
description:
type: build-solutions
date: 2019-10-24T13:47:13+05:30
# pre: "b. "
weight: 43
tags:
    - Tutorials
---

## Learning objectives

This tutorial explains how to deploy Grafana on rapyuta.io, and also to visualise the metrics by adding and configuring the data sources within Grafana.

## Estimated Time
10 minutes

## Step 1: Import Packages

Let's begin by importing the Rapyuta IO Grafana package into your account. 

1. Import ```Rapyuta IO Grafana``` package into your account.
{{< importpackage manifest="https://raw.githubusercontent.com/rapyuta-robotics/io_tutorials/master/io_manifests/grafana/grafana_v0.0.0_manifest.json" >}}

## Step 2: Deploy Persistent Volume Package

Deploy the **Grafana Persistent Voulme** package to persist data across deployments.

1. On the left navigation menu, click **Development** >  **Catalog**.
2. Select the package **Rapyuta IO Persistent Volume**, and click **Deploy package**.
3. In the **Name of deployment** field, type ```Grafana Persistent Voulme```.
4. Select **4GB** from the **capacity** dropdown menu.
5. Click **Create Deployment** to proceed.

The deployment starts running in the cloud. This usually takes a few minutes. You will be redirected to the **Details** page of the deployment where the progress of the provisioning can be seen. 

On successful deployment, the **Status** changes to *Running* and the **Deployment Phase** changes to *Succeeded*.

## Step 3: Deploy Rapyuta IO Grafana Package

To deploy the **Rapyuta IO Grafana** package:

1. On the left navigation menu, select **Development** >  **Catalog**.
2. Select the package **Rapyuta IO IO Grafana**, and click **Deploy package**.
3. In the **Name of deployment** field, type ```Grafana```.
4. Under **VOLUMES**, select **Add volume**. 

   a. Select the **Grafana Persistent Volume** from the **Deployments** dropdown.

   b. Select **grafana** from the **Applicable component** dropdown.

5. Under **VOLUMES**, select **Add mount path**.

    a. Select **grafana** from the **Applicable executable** dropdown.

    b. Enter ```/var/lib/grafana``` in the **Mount path fields**.

    c. The **Subpath** field remains empty.

6. Click **Create Deployment** to proceed.
  
   On successful deployment, the **Status** changes to *Running* and the **Deployment Phase** changes to *Succeeded*.
 

## Step 4: Using Grafana 

### Prerequisite
* Auth Token
* Project ID
* Organization ID

For more information on how to get these IDs, click [here](/3_how-tos/35_tooling_and_debugging/rapyuta-io-python-sdk/#auth-token).

To start using Grafana: 

1. Select the **Grafana** deployment, and navigate to **Network Endpoints** in the **Details** page. 
2. Copy the **grafana_endpoint** URL and paste it in a new tab. 
3. To login, enter the default credentials. That is, the **Username** and **Password** as ```admin```.

    On logging in, Grafana prompts you to change the password. Please change it to ensure security.
4. On the left navigation menu, select **Configuration** > **Data Sources**.
5. Select **Add data source**.
6. In the **Add data source** page, enter ```rapyuta.io``` in the search field, and select **rapyuta.io Metrics**.
7. In the Settings page, enter the previously copied values of the **Auth Token**, **Project ID** and **Organization ID**.
8. Click **Save & Test**. 

    Once the datasource is updated, a success message appears and you can use the **rapyuta.io Metrics** while creating dashboard panels.