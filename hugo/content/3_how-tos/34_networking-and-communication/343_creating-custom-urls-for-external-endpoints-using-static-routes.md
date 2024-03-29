---

title: "Custom URLs for Services"
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

## Create a Static Route

1. In the rapyuta.io console, on the left navigation bar, click **Networking > Static Routes**.

2. Click **Add New Static Route**.

3. Enter the **Static Route URL**.
{{%notice info%}}
The name of a static route has lowercase alphanumeric characters, or a hyphen, and must begin and end with an alphanumeric character, and must not be certain keywords, and it must be at least 4 characters and less than 64 characters long.
{{%/notice%}}

4. Click **CONTINUE**. The static route is created.
{{%notice info%}}
* Observe that the name of the static route will be a subdomain belonging to ***.ep-r.io*** (essentially the provided name will be suffixed with ***.ep-r.io*** to form the FQDN). For instance, if the name of the static route is ***my-example-server***, the static route URL will be ***my-example-server.ep-r.io***.
* You cannot edit the name of a static route. However, you can delete and recreate a new static route with a different name.
{{%/notice%}}

### Binding Static Route to Deployment Endpoints

To bind a static route to an externally exposed endpoint defined in a package, during deployment:

1. Click **Add Static Route**.

2. Select an external network endpoint from the drop-down list.

3. Select a static route from the drop-down list.

This creates a mapping between an external network endpoint and a static route. 

You can unbind a static route from a network endpoint by clicking on the delete icon. 

Below is an example of the static route **my-example-server** which is bound to the network endpoint **server_endpoint**.

![Bind static route](/images/dev-guide/create-software-pkgs/pkg-internals/static-routes/mapping-bind-sr.png?classes=border,shadow&width=40pc)

On deploying the package after binding a static route, the network endpoint URL address becomes deterministic and is a constant. It implies that even if the deployment is stopped and provisioned again with the same static route, the network endpoint URL address remains the same.

A package deployment can have multiple static routes. However, a single static route is used for a single deployment.

---

#### Related Links

>  Refer to [billing and usage]({{< ref "/5_deep-dives/58_account-management/582_billing-usage.md">}}) to understand the limits applied on static routes for different subscription plans.

