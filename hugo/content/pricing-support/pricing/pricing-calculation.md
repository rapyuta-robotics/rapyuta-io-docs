---
title: "Pricing Calculation"
description:
type: pricing-support
date: 2019-10-24T14:00:41+05:30
pre: "3. "
weight: 720
---
This pricing example is set outside the free 7-day trial period.

Let’s assume your ROS software application has two modules say
*A* and *B*. You intend to deploy three instances of
A in the cloud, an instance of B on your device, and attach
a *persistent storage volume of 32GiB size* to your application.
You also want the ROS application to run for 10 hours a day.

In rapyuta.io, the ROS software application is modelled as a
ROS *package*. The application modules are implemented as
*components* of the package, and each component has at least
one *executable* (a runnable entity).
The instances of a component are called *replicas*.

You will create a ROS package with two components say *compA* and
*compB* using rapyuta.io.

* Let's assume *compA* will have two executables that actually
  get deployed when *compA* is deployed in the cloud.
  So, *compA* is charged based on cloud deployment hours.
  The compute and memory values for one of the executables
  are (1vCPU, 4GiB) while the other executable has (8vCPU, 32GiB).
  You will create 3 replicas of *compA*.
* Suppose *compB* will have a single executable that gets
  deployed when *compB* is deployed on a device. So, *compB* is charged
  for device deployment hours.
  
You will deploy a persistent storage volume of 32GiB size,
which will be used by a deployment of the ROS package.
So, this persistent volume deployment is charged for
volume deployment hours.

You will then deploy the ROS package and have it run for 10 hours
a day.

***Monthly charges*** will be calculated as follows:

Cloud deployment hours (CDH) price per vCPU-hour is $0.08<br>
CDH charges for all executables of an instance of *compA*
running for 10 hours a day for 30 days is <br>**(CDH price * (sum of vCPUs of all executables) * hours)**: $0.08 * (1+8) * 10 * 30 days = $7.2<br>
CDH charges for 3 copies of compA: $7.2 * 3 = ***$216***

Device deployment hours (DDH) price per hour is $0.004<br>
DDH charges for an executable of an instance of *compB*
running for 10 hours a day for 30 days is <br>**(DDH price * hours)**: $0.004 * 10 * 30 = ***$1.2***

Volume deployment hours (VDH) price per GiB-hour is $0.00025<br>
VDH charges for a storage volume of 32GiB size running for
10 hours a day for 30 days is <br>**(VDH price * (storage volume size in GiB) * hours)**:
$0.00025 * 32 * 10 * 30 = ***$2.4***

Total pay as you use charges: $216 + $1.2 + $9.6 = **$226.8**

Let’s assume you may require more add-ons, for example, you
add 5 devices.

Add-ons price per device per month is $5<br>
Add-ons price for 5 devices per month: $5 * 5 = **$25**

Total charges: $226.8 + $25 = **$251.8**

Grand total charges: $251.8 + $99 (subscription fee) = **$350.8**

### Add-ons Pricing Calculation
The add-ons (devices and users) are charged differently
from the deployment hours.

For example, let's assume you have subscribed to one of the plans on
March 1. Suppose you add 5 additional devices on March 10. You will
be charged for those 5 devices. Now, going further, you may experience
either of the following three cases:

#### Case 1
Suppose you add 3 more devices on March 20. You will be charged for
these devices. So, the total number of devices added till now is 8
(5 + 3), and an overage charge for 8 devices is reflected in the final
bill.

#### Case 2
Suppose you remove 2 devices on March 20. The device add-on count
will immediately decrease to 3. You will be charged for
5 devices (that were added on March 10) in the current bill.
The removed devices will not be charged in the next month's bill.

#### Case 3
Suppose you neither add nor remove any devices after March 10. You will be
charged for the 5 devices that you added on March 10.

Your credit card will, eventually, be charged with the final bill amount
on the first day of the next month.