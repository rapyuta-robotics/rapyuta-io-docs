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
---

rapyuta.io Python SDK enables you to provision packages
either on the cloud or on a device, add a dependent
deployment, and access various rapyuta.io resources and
services in your python applications.



## Installation

It is recommended you install the latest Python SDK
using **pip**(most popular tool for installing python packages).

```bash
pip install https://storage.googleapis.com/rio-sdk-python/rapyuta_io-0.18.1-py2-none-any.whl

```

If you are using an old version of the Python SDK, please upgrade to the latest [0.18.1](https://storage.googleapis.com/rio-sdk-python/rapyuta_io-0.18.1-py2-none-any.whl) version.



## Requirements

The rapyuta.io Python SDK is compatible with python
applications supporting Python2.7



### Auth Token

To determine the auth token:

1. Click on your username to the top right corner of rapyuta.io dashboard.
2. Click **Get Auth Token**.
3. Enter the password.
4. Click **COPY**.
5. **Click here** to go back to the previous page.

![Get Auth Token](/images/python-sdk-images/AuthToken.png?classes=border,shadow&width=25pc)



### Device ID

To determine the unique identifier of the device on-boarded on to **rapyuta.io**:

1. Click **DEVICES** on the left navigation bar.
2. Select the device whose identifier you want to obtain.
3. Copy the device's ID as shown in the figure.



![Find device ID](/images/python-sdk-images/device-ID.png?classes=border,shadow&width=40pc)



### Project ID

To determine the unique identifier of the project in **rapyuta.io**:

1. Click **PROJECTS** on the left navigation bar.
2. Select the project whose identifier you want to obtain.
3. Copy the project's ID as shown in the figure.

![Find project ID](/images/python-sdk-images/project-id.png?classes=border,shadow&width=40pc)



### Package ID

To determine a rapyuta.io package's unique identifier:

1. Click **PACKAGES** on the left navigation bar.
2. Select the package whose ID you want to obtain.
3. Copy the package's ID as shown in the figure.

![Find package id](/images/python-sdk-images/package-id.png?classes=border,shadow&width=40pc)



### Plan ID

To determine a package's plan id in rapyuta.io:

1. Click **PACKAGES** on the left navigation bar.
2. Select the package whose plan ID you want to obtain.
3. Under **Plans**, copy the value of **default**.

![Find plan id](/images/python-sdk-images/plan-id.png?classes=border,shadow&width=40pc)



## SDK reference

If you are looking for more detailed information about any class in the SDK, feel
free to consult the [full SDK reference](https://sdkdocs.apps.rapyuta.io/).


{{% notice info %}}

Before walking through the examples, ensure you [obtain the auth token, project ID, device ID, package ID and plan ID.

{{% /notice %}}

## Related Links

 [Tutorial : Python SDK : Publisher Subsciber]({{< ref "/4_tutorials/42_advanced/421_ros-pub-sub-with-sdk.md">}})

<!-- 2. [Tutorial : Deployment Composition](/developer-guide/tooling-automation/python-sdk/sample-walkthroughs/deployment-composition/) -->

