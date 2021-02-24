---

title: "Traditional Network"
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.

weigth: 533

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
    - Deep Dive
---

## Device Routed Network

In certain cases where communication is latency sensitive or has high throughput the user can choose to deploy a routed network to a device. 
While avoiding a round trip of information to the cloud minimizes latency and allows for better throughput __ONLY__ deployments on devices on the same local area network can bind to it. 



#### Routed networks can be deployed to a device with the following parameters:

* __Device:__ Any online device with docker runtime and AMD64 architecture
* __Device IP Interface:__ network interface (i.e., an IP address) that will be used by other deployments for communication to this routed network.
* __Restart policy:__ Kindly refer to the [restart policy](/developer-guide/manage-software-cycle/deployments/#restart-policy).

{{% notice tip %}}
On reboot devices configured using DHCP may boot up with a new IP address. This will cause the network configuration of a routed network deployed on it to become invalid. This can be avoided by assigning a static IP  to the device you intend to deploy a routed network to esp in production systems.
{{% /notice %}}
