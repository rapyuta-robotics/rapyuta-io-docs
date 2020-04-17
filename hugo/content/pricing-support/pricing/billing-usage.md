---
title: "Billing and Usage"
description:
type: pricing-support
date: 2019-10-24T14:00:31+05:30
pre: "2. "
weight: 715
---
On subscribing to one of the plans, you (the admin of organization or
individual user) can access the **Billing** panel. *Billing* aggregates information
on the charges incurred on consumable units, and displays it in
tabular and graphical forms.

The subscription fee is recurring and prepaid. You will be charged monthly on the first day of the month. It means the payment receipt is generated at the start of the month. You will receive an email with the payment receipt at the start of every month. The payment receipt shows the subscription fee of the current month and usage charges of the previous month.

If 80% of the resource limits of the subscribed plan are exhausted, you will be alerted about it by a one-time notification at the top right corner of rapyuta.io dashboard.

![Billing](/images/pricing/billing/billing-upper-part.png?classes=border,shadow&width=50pc)

* The **ESTIMATED BILL** is calculated based on your estimated usage for the month.
* The **NEXT BILLING DATE** is the date when the credit card will be charged towards
the payment of the final bill including taxes.
* The **PLAN** displays the plan you have subscribed to.
* The donut chart provides you insights into the relative component of any
  *additional usage charges* and *standard subscription charges*. Additional usage indicates the count of additional devices, users, cloud deployment hours, device deployment hours, and volume deployment hours.
* The ***Current Usage*** is the count of units currently being used.
* The ***Included Units*** is the count of units included in the subscribed plan.
* The ***Add-Ons*** is the current count of add-ons you have purchased.

{{% notice info %}}
The total available units for use is the sum of included units and add-ons.
{{% /notice %}}

![Billing Usage](/images/pricing/billing/billing-usage.png?classes=border,shadow&width=50pc)

{{% notice info %}}
As an admin of an organization, you can **add multiple credit cards** to your organization's billing account. But, only one credit card is made the **primary** or **default** card, which is used to charge the subscription fee and additional amount for using rapyuta.io resources.
You can **delete any existing credit card** except the primary card because it is used for monetary transactions. If you want to delete the primary credit card, ensure you make another card a primary card before deleting the previous one.
{{% /notice %}}

{{% notice note %}}
If you want to unsubscribe, or cancel the current plan, or upgrade to another plan,
please <a href="#" onclick="javascript:FreshWidget.show();">contact support</a>.
{{% /notice %}}

## Consumable Items

Device deployment hours, cloud deployment hours, volume deployment hours, and add-ons are the consumable items or billable items in rapyuta.io.

You will incur overage charges when you exhaust all deployment hours of your subscribed plan. These additional charges are levied only for what you use.

{{% notice info %}}
In the case of volume deployment hours, rapyuta.io provides SSD disks as persistent storage volumes. The disks are of ***32GiB***, ***64GiB***, ***128GiB***, ***256GiB*** and ***512GiB*** sizes.
{{% /notice %}}

Add-ons are discrete and countable items such as devices added to rapyuta.io or active users of rapyuta.io. You can purchase add-ons to increase the available
limits on devices and users provided by your subscribed plan.

To add or remove add-ons in rapyuta.io:

1. Click **Add/Remove add-ons** adjacent to the add-on name.
   ![Add device add-on](/images/pricing/billing/add-device-addon.png?classes=border,shadow&width=50pc)
2. Increase or decrease the count of devices or users by using the arrows.
3. Click **UPDATE**.

![Add-ons](/images/pricing/billing/device-addons.png?classes=border,shadow&width=50pc)