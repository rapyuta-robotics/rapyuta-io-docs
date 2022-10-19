---
title: Using rapyuta.io Python SDK
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.
weight: 357
slug: rapyuta-io-python-sdk
versions:
  free-pro-team: '*'
  enterprise-server: '*'
layout: false
permissions: rapyuta.io
showMiniToc: true
miniTocMaxHeadingLevel: 4
allowTitleToDifferFromFilename: false
mapTopic: false
hidden: false
redirect_from: []
gettingStartedLinks: []
popularLinks: []
guideLinks: []
introLinks: {}
tags:
  - How to
---

rapyuta.io Python SDK enables you to provision packages either on the cloud or on a device. Add a dependent deployment, and access various rapyuta.io resources and services in your python applications.

## Installation

It is recommended you install the latest Python SDK using **pip** (the most popular tool for installing python packages).

```bash
pip install rapyuta-io
```
If you are using an old version of the Python SDK, please upgrade to the latest version.

For python client for rapyuta.io, [click here](https://pypi.org/project/rapyuta-io/)

## Requirements

The rapyuta.io Python SDK is compatible with python applications supporting Python2.7

{{% notice info %}}
We have added Python3.9 support to the rapyuta.io python SDK. Note that this is still in the alpha stage.
{{% /notice %}}

### Auth Token

To determine the auth token:

1. In the rapyuta.io console, select the username at the top right corner.
2. Click **Get Auth Token**.
3. Enter the password.
4. Click **COPY** to copy the auth token

![Get Auth Token](/images/python-sdk-images/AuthToken.png?classes=border,shadow&width=25pc)


### Device ID

To determine the unique identifier of the device on-boarded on to **rapyuta.io**:

1. In the rapyuta.io console, on the left navigation bar, click **Devices** .
2. Select the device whose identifier you want to obtain.
3. Copy the device's ID as shown in the figure.

![Find device ID](/images/python-sdk-images/device-ID.png?classes=border,shadow&width=40pc)

### Project ID

To determine the project's unique identifier in **rapyuta.io**:

1. In the rapyuta.io console, on the left navigation bar, click **Projects**.
2. Select the project whose identifier you want to obtain.
3. Copy the project's ID as shown in the figure.

![Find project ID](/images/python-sdk-images/project-id.png?classes=border,shadow&width=40pc)

### Organization ID

To determine the organization's unique identifier in **rapyuta.io**:

1. In the rapyuta.io console, on the left navigation bar, click **Account > Organization**.
3. Copy the organization ID as shown in the figure.

![Find organization ID](/images/python-sdk-images/org-id.png?classes=border,shadow&width=40pc)

### Package ID

To determine the package's unique identifier in rapyuta.io:

1. In the rapyuta.io console, on the left navigation bar, click **Development > Catalogs**.
2. Select the package whose ID you want to obtain.
3. Copy the package's ID as shown in the figure.

![Find package id](/images/python-sdk-images/package-id.png?classes=border,shadow&width=40pc)

### Plan ID

To determine a package's plan id in rapyuta.io:

1. In the rapyuta.io console, on the left navigation bar, click **Development > Catalogs**.
2. Select the package whose plan ID you want to obtain.
3. Under **Plans**, copy the value of **default**.

![Find plan id](/images/python-sdk-images/plan-id.png?classes=border,shadow&width=40pc)

## SDK reference

For more detailed information about any class in the SDK, see [full SDK reference](https://sdkdocs.apps.rapyuta.io/).

## Related Links

 [Tutorial : Python SDK : Publisher Subsciber]({{< ref "/4_tutorials/42_advanced/421_ros-pub-sub-with-sdk">}})

<!-- 2. [Tutorial : Deployment Composition](-guide/tooling-automation/python-sdk/sample-walkthroughs/deployment-composition/) -->

