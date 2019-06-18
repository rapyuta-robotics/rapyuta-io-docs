---
title: "Apply Configuration Parameters"
description:
type: getting-started
date: 2019-06-18T16:41:25+05:30
pre: "k. "
weight: 332
---
Applying configuration parameters to a device (or robots) consists of
three primary steps:

1. Define labels for the device.
2. Create configuration.
3. Apply configuration parameters (created in step 2) to devices.

## Defining labels for devices
You can tag your devices with as many labels as you need. Labels are
key-value pairs that help you associate configuration parameters with
a group of devices or a particular device. Make sure that the keys of
all the labels of a device are *unique*.

To add a new label to a device, select the device from the **DEVICES**
panel on the left navigation bar.

1. On the **Details** tab, find for the **LABELS** section.
2. Enter the key of the label to the left of the **:**     
   In this case, the key is ***country***
3. Enter the value of the label to the right of **:**     
   In this case, the value is ***Japan***
4. Click **Add label**

![apply configuration parameters](/images/getting-started/apply-config-paramas/add-device-label.png?classes=border,shadow&width=70pc)

You can also modify existing labels by changing their keys or/and
values and clicking **Save**.

## Creating configuration parameters
You will create a new configuration as shown in the figure below:
![example configuration](/images/core-concepts/configurations/example-config.png?classes=border,shadow&width=40pc)

1. Click **CONFIGURATIONS** on the left navigation bar.
2. Click **ADD NEW CONFIGURATION**.
3. Type in a name for the configuration, say, ***example***.
4. Hover over the root node, ***example***, to view options to add a
   new configuration file.
5. Click **Add file**. Enter a name for the file, say, ***sample***.
   Click **CONFIRM**. Observe that the platform automatically appends
   *.yaml* extension to the file.
6. Define the following base parameters as shown in the figure below.
    ![base parameters](/images/core-concepts/configurations/parameter-defaults.png?classes=border,shadow&width=40pc)
7. Hover over the root node again to view options to add a new
   attribute node.
8. Click **Add attribute**. Give it a name, say, ***country***. Click
   **CONFIRM**.
9.  Hover over the ***country*** attribute to view options to add new
    value nodes.
10. Click **Add country value**. Give it a name, say, ***USA***.
    Click **CONFIRM**. Similarly, add another country value and give it the name ***Japan***.
11. Suppose that the manufacturer Tesla has signed the contract deal
    to manufacture the AGVs in the USA region. You can add Tesla to
    the existing list of *allowed_manufacturers*. You will have to
    define *sample.yaml* under the *USA* value, which will extend the
    list of base parameters. The resultant file after merging the
    base parameters in **example/sample.yaml** and newly added parameters in **USA/sample.yaml** will include *tesla* in addition to those already present.
    ![sample file of USA](/images/getting-started/apply-config-paramas/USA-sample.png?classes=border,shadow&width=40pc)
12. Suppose that the regulation in Japan requires you to limit the
    maximum velocity of an AGV from 5 m/s to 3m/s. You can override
    the *max_velocity* of the AGV by assigning a new value to it. You
    will have to define *sample.yaml* file under the *Japan* value, which will include the *max_velocity* parameter, but with its default overridden. The final parameters file is a result of merging the base parameters (**example/sample.yaml**) and the overridden parameters (**Japan/sample.yaml**).
    ![sample file of Japan](/images/getting-started/apply-config-paramas/japan-sample.png?classes=border,shadow&width=40pc)

##### Rules for writing configuration parameters




