---

title: "Exposing Services over Internet"
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.
weight: 342
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
## Exposing Endpoints Externally

Select **Exposed externally** checkbox to expose a network endpoint publicly over the internet.

The supported protocols at their respective ports (cannot be modified) are:

* **HTTP**/**Websocket** exposed on port **80**

* **HTTPS**/**WSS** exposed on port **443**

* **Secure TCP (TLS/SNI)** exposed on port **443**

> The **Secure TCP (TLS/SNI)** protocol uses [SNI](https://en.wikipedia.org/wiki/Server_Name_Indication) headers for routing the request to the desired backend.

![external endpoint](/images/core-concepts/packages/network-endpoints/external-endpoint.png?classes=border,shadow&width=40pc)


## Accessing Exposed Endpoints over the public internet

**rapyuta.io** generates a **random URL/route** that is exposed on the public internet for the exposed endpoints when the deployment is created. 

You can view the Fully Qualified Domain Name (FQDN) of an endpoint on the details page of deployments.

![FQDN of external endpoint](/images/tutorials/hello-world/network-endpoint.png?classes=border,shadow&width=50pc)



## Accessing Exposed Endpoints from Dependent Deployments

rapyuta.io injects environment variables corresponding to linked network endpoints when there is a dependent deployment.

> Refer to the section on [Link Injection]({{< ref "/5_deep-dives/53_networking-and-communication/532_standard-web-protocol">}}) for more details.

