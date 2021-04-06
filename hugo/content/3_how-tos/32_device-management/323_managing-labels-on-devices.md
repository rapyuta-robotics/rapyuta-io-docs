---

title: "Managing Labels on devices"
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.
weight: 323
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
tags:
  - How to
---

Labels are key-value pairs that help you associate configuration parameters with
a group of devices or a particular device.

You can **tag** your **Devices>All Devices** with as many labels as you need. 
{{%notice note%}}
Ensure that the keys of all the labels of a device are **unique**.
{{%/notice%}}

## Adding Labels
To add a new label to a device, do the following 

1. In the left navigation bar, click **Devices>All Devices**. A list of added devices is displayed.

2. On the **Details** tab, find the **LABELS** section.

3. Enter the **key** of the label to the left of the **:**     
 In this example, the key is **country**

4. Enter the value of the label to the right of **:**     
In this example, the value is **Japan**

5. Click **Add label**. The labels are added to the device.

![apply configuration parameters](/images/getting-started/apply-config-paramas/add-device-label.png?classes=border,shadow&width=70pc)


## Modifying Labels

* You can **Modify existing labels** by changing their keys or/and values and clicking **Save**.

* You can **Delete a label** by clicking on the delete icon next to it. 



## Related Links

* For more information, [click here](/5_deep-dives/51_managing-devices/dynamic-configuration)
* [Tutorial](/4_tutorials/41_beginner/413_dynamic-configurations)
