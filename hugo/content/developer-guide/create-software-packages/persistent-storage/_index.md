---
title: "Persistent Storage"
description:
type: developer-guide
date: 2019-10-25T12:36:16+05:30
pre: "5. "
weight: 290
---
Applications running on the cloud be design deallocate any resources consumed by them when they stop, scale down or fail, this unfortunately implies the working storage associated to them is ephemeral. To get around this problem rapyuta.io provides a mechanism to consume persistent [block storage](https://en.wikipedia.org/wiki/Block-level_storage) for your applications running in the cloud. This storage can be associated to at most one running deployment at any given point of time. A user is typically required to manage the lifecycle of the applicant code independently from the associated storage.

A rapyuta.io Persistent Volume is a storage package. A storage package is a public package which is available to all users out of the box. You cannot delete or modify storage packages, and they are available to every user and group to deploy.

Follow this [tutorial to setup a simple object store](./obj-store-deployment-tutorial.md)
