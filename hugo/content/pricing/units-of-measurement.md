---
title: "Units of Measurement"
description:
type: pricing
date: 2019-02-26T14:28:44+05:30
pre: "a. "
weight: 705
---
A set of specific units is used to measure the consumption of resources. It determines the charges incurred according to your subscribed plan. The subscription plan is quantified
in terms of the count of add-ons and the pay-as-you-use scheme.

## Pay As You Use

In this scheme, you pay for all of the designated units as you use them.
The units include cloud deployment hours, device deployment hours and
persistent volume.

Device deployment hours is the duration for which you can run your deployments
on your devices through rapyuta.io. If you exhaust the available device deployment hours of your subscribed plan, you will incur an additional
fee for each additional hour.

Cloud deployment hours is the duration for which you can run your deployments
in the cloud through rapyuta.io. Similarly, you will incur an additional fee
per vCPU per hour if you exhaust the available cloud deployment hours of your
subscribed plan.

The following table lists the memory and processing power constraints for cloud
deployment hours. It shows the three tiers of CPU and memory sizes that are available for
you to choose from.

| Tier | vCPU | Memory |
| ---- | ---- | ------ |
| Low | 1 | 4 |
| Medium | 2 | 8 |
| High | 8 | 32 |

Persistent volume is made available in the form of SSD disks. The available disk
sizes are 32GiB, 64GiB, 128GiB, 256GiB and 512GiB. Volume deployment hours
is the duration for which you run deployments of the ***Persistent Volume*** package
provided by rapyuta.io

## Add-ons

The [Community](/pricing/subscription-plans/#community-plan) and
[Professional](/pricing/subscription-plans/#professional-plan) plans provide
add-ons, which are discrete and countable units. Devices and users are examples of the
available add-ons. You can add or delete users and devices according to your
requirements. The charges incurred on add-ons are added to the estimated bill of the next month. 

Consider you have subscribed to the [Professional Plan](/pricing/subscription-plans/)
on **March 01**. Your credit card is charged with the plan’s subscription fee on the
same day. Suppose you add **5** devices on **March 10**. The estimated bill will
include charges for 5 devices now. There are three cases to consider here:

1. Suppose you add **3** more devices on **March 20**. The estimated bill will include charges
   for **8** devices (that is 5 + 3 = 8). This is reflected instantaneously on the **[Billing](/pricing/billing/)**
   panel. The credit card is charged for the amount on the estimated bill on the first
   day of April (next month).
2. Suppose you remove **2** devices on **March 20**. The estimated bill will still include
   charges for 5 devices (that  were added on March 10). The count of devices at the end
   of March is 3 (since 2 out of 5 devices are removed). The charges for these 3 devices
   are carried forward to April while generating April’s estimated bill. The credit card
   is charged for the amount on the estimated bill on the first day of April.
3. Suppose you neither add nor remove any devices in March. The estimated bill will include
   charges for the 5 devices you added on March 10. The credit card is charged for the amount
   on the estimated bill on the first day of April.