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

This tutorial explains how to deploy Grafana on rapyuta.io, and also to visualize the metrics by adding and configuring the data sources within Grafana.

## Estimated Time
10 minutes

## Step 1: Import Packages

Let's begin by importing the Rapyuta IO Grafana package into your account. 

1. Import ```Rapyuta IO Grafana``` package into your account.
{{< importpackage manifest="https://raw.githubusercontent.com/rapyuta-robotics/io_tutorials/master/io_manifests/grafana/grafana_v0.1.0_manifest.json" >}}

## Step 2: Deploy Disk

Deploy a disk with a capacity of 4GB. For more information, see [Managing Disks](/3_how-tos/33_software-development/336_creating-cloud-volume/#creating-or-deleting-disks)

Disk has been successfully deployed only when the disk status is **Available**. For more information, see [Disk Status](/3_how-tos/33_software-development/336_creating-cloud-volume/#disk-status)

## Step 3: Deploy Rapyuta IO Grafana Package

To deploy the **Rapyuta IO Grafana** package:

1. On the left navigation menu, select **Development** >  **Catalog**.
2. Select the package **Rapyuta IO Grafana**, and click **Deploy package**.
3. In the **Name of deployment** field, type ```Grafana```.
4. Under **CLOUD VOLUMES**, select **Add Cloud Volume**. 

   a. Select the disk (created in step 2) from the **Disk** dropdown.

   b. Select **grafana** from the **Applicable Component** dropdown.

   c. Select **Add Mount Path**.

   d. Select **grafana** from the **Applicable Executable** dropdown.

   e. Enter ```/var/lib/grafana``` in the **Mount Path** field.

   f. The **Sub Path** field remains empty.
    
6. Click **Create Deployment** to proceed.
   On successful deployment, the **Status** changes to *Running* and the **Deployment Phase** changes to *Succeeded*.
 

## Step 4: Using Grafana 

### Prerequisite
* Auth Token
* Project ID
* Organization ID

For more information on how to get these IDs, click [here](/3_how-tos/35_tooling_and_debugging/rapyuta-io-python-sdk/#auth-token).

To start using Grafana: 

1. On the **Deployments** page, select the **Grafana** deployment, and navigate to **Network Endpoints** in the **Details** tab. 
2. Copy the **grafana_endpoint** URL and paste it in a new tab. 
3. To login, enter the default credentials. That is, the **Username** and **Password** as ```admin```.
    On logging in, Grafana prompts you to change the password. Please change it to ensure security.
4. On the left navigation menu, select **Configuration** > **Data Sources**.
5. Select **Add data source**.
6. In the **Add data source** page, enter ```rapyuta.io``` in the search field, and select **rapyuta.io Metrics**.
7. In the Settings page, enter the previously copied values of the **Auth Token**, **Project ID** and **Organization ID**.
8. Click **Save & Test**. 

Once the datasource is updated, a success message appears and you can use the **rapyuta.io Metrics** while creating dashboard panels.

To import **Rapyuta IO Devices** dashboard:

1. On the left navigation menu, select **+ (Create) > Import**.
2. Copy the file contents from [here](https://raw.githubusercontent.com/rapyuta-robotics/io_tutorials/bad7e26ab0ddce9b72b34d2e122991b050041f43/io_manifests/grafana/dashboards/rapyuta_io_devices_dashboard.v0.0.0.json) and paste it in the **Import via panel json** textbox.
3. Click **Load**.
4. Click **Import**.

Once the dashboard has been successfully imported, you can visualize the metrics for any device in your project by selecting the *Project* from the **rio_project** dropdown and the *Device* from the **device_name** dropdown.