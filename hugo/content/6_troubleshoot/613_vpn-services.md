---
title: "VPN Services"
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.
weight: 613
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
  - Troubleshoot
---

## Problem: VPN network does not get updated when switching projects in RioCLI

If you have switched projects in the CLI using the rio project select command but are still seeing machines from the previously selected project there might be an issue with the VPN connection not being updated correctly.

### Solution

Switching projects in the CLI does not automatically update the VPN configuration on your local device. Therefore, it's necessary to manually establish a connection to the VPN network associated with the current project and verify the status of your VPN connection. To do so:

1. After switching projects, reconnect to the VPN network of the current project by running the following command:

    ```Bash
    rio vpn connect
    ```

2. To confirm the status of your VPN connection, use the command:

    ```Bash
    rio vpn status
    ```

## Problem: Unable to access a previously connected device (robot/edge etc) after a reboot

### Solution

If you aren't able to connect to a previously connected device over the VPN network, enable VPN on the device after each reboot: Disabling and enabling the VPN connection on the device is necessary to restore access over the VPN network. 

To re-establish the connection:

1. Confirm your current project in the CLI, use the command:

    ```Bash
    rio project list -w 
    ```

2. If you have verified that you are in the correct project, proceed to disable and enable VPN on the specific device using one of the following commands:

    ```Bash
    rio device vpn false --devices=<devicename>
    ```

    ```Bash
    rio device vpn enable --devices=<devicename>
    ```
    Replace <devicename> with the name of the device that you are troubleshooting.

3. After enabling VPN on the device, verify the VPN status to ensure that the device is properly connected to the VPN network, use the command:

    ```Bash
    rio vpn status
    ```




