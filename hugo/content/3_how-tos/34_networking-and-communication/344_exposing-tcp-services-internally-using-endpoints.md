---

title: "Exposing TCP Services Internally "
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.
weight: 343
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
#### Exposing Endpoints Internally

You can restrict access to a network endpoint by ensuring that **Exposed externally** option is not selected.

The only protocol available is the **TCP** for which the value of the **Port** field is set to **443** by default. However, you can change the port's value.

![internal endpoint](/images/core-concepts/packages/network-endpoints/internal-endpoint.png?classes=border,shadow&width=40pc)

You can also use port range for an endpoint by selecting **Port Range** toggle. A Port Range on an endpoint will allow you to open multiple ports on a single DNS hostname.


{{% notice note %}}

By default the Target Port is same as the Port. A maximum 50 ports are allowed for an endpoint.

{{%/notice%}}

Allowed format is for Port Range

- Single Port. *Example:* 5000 
- Range of Port mentioning **FROM port** and **TO port** separated by a **hyphen** (-). *Example:* 443-445
- Comma separated combination of the above two formats. *Example:* 3446-3449,3500,3510-3530

![internal endpoint port range](/images/core-concepts/packages/network-endpoints/internal-endpoint-port-range.png?classes=border,shadow&width=40pc)