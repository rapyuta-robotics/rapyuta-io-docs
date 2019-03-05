---
title: "Subscription Plans"
description:
type: pricing
date: 2019-02-26T13:37:38+05:30
pre: "c. "
weight: 715
---
The highlights of the available plans are given below:

| Items | Community | Professional |
| ----- | --------- | ------------ |
| Number of users | 1 | 5 |
| Number of devices | 2 | 5 |
| Total deployment hours on connected devices (device deployment hours) | 500 | 2500 |
| Compute with RAM/vCPU | See the [below](/pricing/subscription-plans/#compute-with-ram-vcpu) table | See the [below](/pricing/subscription-plans/#compute-with-ram-vcpu) table |
| Total deployment hours on the cloud (cloud deployment hours) | 100 vCPU-hour | 500 vCPU-hour |
| Additional deployment hours on the cloud | $0.08 vCPU-hour | $0.08 vCPU-hour |
| Additional deployment hours on device | $0.004 per hour | $0.004 per hour |
| Persistent volume (volume deployment hours) | $0.001 GiB-hour | $0.001 GiB-hour |
| Support | Support to resolve bugs or issues, and to answer queries or concerns as quickly as possible. We plan to create a discussion forum for community plan members. | On-demand, SLA driven support with priority tickets and access to Rapyuta Robotics engineers. |
| **Price** | **$0 per month** | **$99 per month** |
| Add-ons | $5 per device per month<br>$10 per user per month | $5 per device per month<br>$30 per user per month |
| Free trial period | Unavailable because Community plan is free | 7 days<br>On registration, you’ll be restricted to 50 hours of cloud deployment hours + 200 hours of device deployment hours. |

You may try out the **Professional** plan for free for ***seven*** days. You will be charged a subscription fee for the plan from the first day of the trial period. However, if you decide to unsubscribe the plan during the trial period, the entire subscription fee will be refunded.

The **Community** plan is a free plan, that is, as long as you are using the resources of the plan within their constraints you are not charged a cent at any time, except when you add additional users and/or devices and deployment hours.

### Compute with RAM/vCPU

| Tier | vCPU | Memory |
| ---- | ---- | ------ |
| Low | 1 | 4 |
| Medium | 2 | 8 |
| High | 8 | 32 | 
 
## Example Calculation for Professional Plan

Consider you have subscribed to the Professional Plan on March 01.
Your credit card is charged with the plan’s subscription fee on the same day.

Suppose you create a package say pkgA with three components say compA,
compB and compC. The details of each component are:

* compA is deployed on a device
* compB is deployed on the cloud. It has two executables say execX
  with 1 vCPU and execY with 8 vCPU. Also, there are three replicas of compB.
* compC is a volume deployment of 32GiB size

All of the aforementioned components - compA, compB, compC - are run for ten hours.

Suppose you add 5 devices on March 10. The estimated bill will include charges for
5 devices now. The, you add 3 more devices on March 20. The estimated bill will include
charges for 8 devices (that is 5 + 3 = 8). This is reflected instantaneously on the
Billing panel, and the credit card is charged the amount on the estimated bill on the
first day of April (next month).

The estimated bill is calculated as:

estimated bill = subscription fee + additional usage charges

wherein additional usage charges are calculated as:

additional usage charges = add-ons charge + pay-as-you-use charge

Let,

* A denote subscription fee,
* B denote additional usage charges,
* C denote add-ons charge and D denote pay-as-you-use charge.
  
The subscription fee, A = $99/month

The pay-as-you-use charge (D) will be calculated as:

pay-as-you-use charge, D = (#hours * DDH) + (#hours * volume size * VDH) + (#hours * #replicas (sum of vCPUs of all executables) * CDH)

Where in,

* DDH is Device Deployment Hours,
* VDH is Volume Deployment Hours,
* CDH is Cloud Deployment Hours
  
as explained in UoMs.

pay-as-you-use charge = (10 * $0.004) + (10 * 32GiB * $0.001) * (10 * 3 * (1 + 8)vCPUs * $0.08) = $21.96

Add-ons charge will be calculated as:

add-ons charge, C = 8 * $5/device = $40

additional usage charge, B = C + D = $40 + $21.96 = $61.96

estimated bill = A + B = $99 + $61.96 = $160.96
