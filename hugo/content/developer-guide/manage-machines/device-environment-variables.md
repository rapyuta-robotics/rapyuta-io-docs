---
title: "Device Environment Variables"
description:
type: developer-guide
date: 2020-05-15T11:04:37+05:30
pre: "6. "
weight: 266
---
Besides device configuration variables, the name of
a device, its unique identifier, and
the identifier of the project in which the device has been
created are stored as environment variables on the device.

*  **RIO_DEVICE_NAME_LAST_SEEN** saves the name of a device. It does not reflect any changes made to the name if the name is explicitly modified after onboarding the device on to rapyuta.io platform.
*  **RIO_DEVICE_UUID** holds the unique identifier of the device.
*  **RIO_PROJECT_UUID** stores the unique identifier of the project in which the device has been created.

{{% notice info %}}
You may [remotely access](/developer-guide/tooling-automation/) all of the device environment variables of an online device.
{{% /notice %}}



