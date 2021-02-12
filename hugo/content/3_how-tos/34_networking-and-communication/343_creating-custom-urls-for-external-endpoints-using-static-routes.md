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
---

### Create a Static Route

1. On the left navigation bar, click **Networking>Static Route**.

2. Click **ADD NEW STATIC ROUTE**.

3. Enter a **name** for **Static Route URL**.

   > **Name** of a static route 
   >
   > - has lowercase alphanumeric characters, or a hyphen, 
   > - and it must be at least 4 characters and less than 64 characters long.
   > - and must begin and end with an alphanumeric character, 
   > - and must not be certain reserved keywords, 

4. Click **CONTINUE**.

> Observe that the name of the static route will be a subdomain belonging to **\*.ep-r.io** 

> FQDN is formatted as follows:   {**static-route-name**}-{*random-5 letter-organization-string*}.**ep-r.io** 
>
> organization string is unique for your organization and doesn't change. 
>
> For example static route with **Name** **```my-example-server```** will have a FQDN of   **``` my-example-server-azbyc.ep-r.io ```**



![Create static route](/images/dev-guide/create-software-pkgs/pkg-internals/static-routes/create-sr.png?classes=border,shadow&width=40pc)



> **NOTE** : Once created, you cannot edit the name of a static route. You can however delete and recreate a new static route with a different name easily



---

### Binding Static Route to Deployment Endpoints

To bind a static route to an externally exposed endpoint, which is defined in a package, during the deployment process:

1. Click **Add Static Route**.

![Add static route](/images/dev-guide/create-software-pkgs/pkg-internals/static-routes/add-sr.png?classes=border,shadow&width=40pc)

2. Select an external network endpoint from the drop-down list.

3. Select a static route from the drop-down list.

![Select endpoint static route pair](/images/dev-guide/create-software-pkgs/pkg-internals/static-routes/selection.png?classes=border,shadow&width=40pc)



This creates a mapping between an external network endpoint and a static route. 

You can unbind a static route from a network endpoint by clicking on the delete icon. 

In this example, the static route **my-example-server** is bound to the network endpoint **server_endpoint** as shown below:

![Bind static route](/images/dev-guide/create-software-pkgs/pkg-internals/static-routes/mapping-bind-sr.png?classes=border,shadow&width=40pc)



On deploying the package after binding a static route, the network endpoint URL address becomes deterministic and is a constant. It implies that even if the deployment is stopped and provisioned again with the same static route, the network endpoint URL address remains the same.



A package deployment can have multiple static routes. However, a single static route is used for a single deployment.



---

#### Related Links

>  Refer to [billing and usage]({{< ref "/5_deep-dives/58_account-management/582_billing-usage.md">}}) to understand the limits applied on static routes for different subscription plans.

