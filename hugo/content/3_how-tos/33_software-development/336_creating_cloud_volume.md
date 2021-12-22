---
title: Managing Disks
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.
weight: 345
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
slug: 'managing disks'
tags:
  - How to
---

## Creating or Deleting Disks

Manage your storage by creating disks on the rapyuta.io console.

To create or delete a disk/volume instance:.

1. On the left navigation bar, click **Development> Disks**.
2. To create a disk:
    1. Click **Create new disk**. The **Create new disk** page appears. Enter:
        | Field | Description |
        | --- | -------|
        | Name | Specify a disk name. <need to add the criteria for disk name> |
        | Capacity | Select the disk memory requirement of the package. It refers to the size of block storage. You can select from the displayed list. |
        | Labels | A set of key value pairs used to filter out resources. To add a label, click **Add label**.|
    2. Click **Create new disk**. The disk is created and it can be viewed in the disk dashboard.
3. To delete a disk, under **Actions**, click the delete icon.
{{%notice info%}}
A disk cannot be deleted if the status is **Bound**. It is recommended to not delete a disk that is attached to a deployment. 
{{%/notice%}}

### Disk Status
 The disk can be in any one of the following states:

| State | Description |
| --- | -------|
| Pending | The disk is trying to be deployed. |
| Available | The disk is available to be deployed. |
| Bound | The disk is attached to a deployment. |
| Released |  |
| Failed | The attachment has failed due to some errors. |

