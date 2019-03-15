---
title: "Pricing Example"
description:
type: pricing
date: 2019-03-14T19:09:48+05:30
pre: "c. "
weight: 715
---
This pricing example is set outside the free 7-day trial period.

Let’s assume your ROS application has two modules say module A and module B. You intend to deploy 3 instances of module A in the cloud, an instance of module B on your device, and attach a persistent storage volume of 32GiB size. You also want the ROS application to run for 10 hours a day.

In rapyuta.io, the ROS application is modelled as a ROS package. The
application modules are implemented as the components of the package,
and each component has at least one executable
The instances of a component are called replicas.

You would create a ROS package with three components say compA, compB and compC using rapyuta.io.

* The compA will have two executables that actually get deployed when compA is deployed in the cloud. So, compA is charged based on cloud deployment hours. The compute and storage specifications for one of the executables is (1 vCPU, 4GiB) while for the other it is (8 vCPU, 32GiB). You will create 3 replicas of compA.
* The compB will have a single executable that actually gets deployed when compB is deployed on a device. So, compB is charged for device deployment hours. The compute and storage specifics for its executable is (1vCPU, 4GiB).
* The compC will have one executable with (1vCPU, 4GiB) compute and storage specifics. You will attach a running persistent volume deployment of 32GiB to compC. So, compC is charged for volume deployment hours.

Cloud deployment hours (CDH) price per vCPU-hour is $0.08<br>
CDH charges for (1 + 8)vCPU for 10 hours for one copy of compA: $0.08 * (1+8) * 10 = $7.2<br>
CDH charges for 3 copies of compA: $7.2 * 3 = $21.6

Device deployment hours (DDH) price per hour is $0.004<br>
DDH charges for 1vCPU for 10 hours for a single copy of compB: $0.004 * 1 * 10 = $0.04

Volume deployment hours (VDH) price per GiB-hour is $0.001<br>
VDH charges for a storage volume size of 32GiB for 10 hours for a single copy of compC: $0.001 * 32 * 10 = $0.32

Total pay as you use charges: $21.6 + $0.04 + $0.32 = $21.96

Let’s consider you add more devices as add-ons, for example, assume you add 5 devices.

Add-ons price per device per month is $5<br>
Add-ons price for 5 devices per month: $5 * 5 = $25

Total charges: $21.96 + $25 = $46.96

Grand total charges: $46.96 + $99 (subscription fee) = $145.96