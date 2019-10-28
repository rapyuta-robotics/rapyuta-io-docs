---
title: "Communication Topologies"
description:
type: developer-guide
date: 2019-10-25T12:53:52+05:30
pre: "3. "
weight: 430
---
## Link Injection: Exposed Network Endpoint
For instance if you have a deployment *P* running on rapyuta.io that exposes a network endpoint defined as **SAMPLE_ENDPOINT** with the URL address: *https://inst-awesomesauce-url.apps.rapyuta.io:443* 
the rapyuta.io platform can use the above URL to determine the corresponding **HOST** and **PORT** values as follows:

* **HOST**: *inst-awesomesauce-url.apps.rapyuta.io*
* **PORT**: *443*

The platform can now make this information available to any other resource it manages such as deployments.

Consider another deployment, for instance, *C* such that user deploying *C* selects *P* as a ***dependent deployment***. Now for the purpose of linking deployments a parent-child relationship is established between deployments *P* (the parent) and *C* (the child). 

The platform will make exposed endpoint information avaiable to *C* (the child) by constructing and injecting environment variables corresponding to each endpoint exposed by *P* (the parent) using the following rule.

* **\<ENDPOINT_NAME\>**
* **\<ENDPOINT_NAME\>_HOST**
* **\<ENDPOINT_NAME\>_PORT**

Drawing from the aforementioned example this would correspond to following evnironment variables and their corresponding values: 

* **SAMPLE_ENDPOINT** : *https://inst-awesomesauce-url.apps.rapyuta.io:443* 
* **SAMPLE_ENDPOINT_HOST** : *inst-awesomesauce-url.apps.rapyuta.io*
* **SAMPLE_ENDPOINT_PORT** : *443*

The developer of the package running in *C* can now access these environment variables in code.

For example, the developer would access the value of the **SAMPLE_ENDPOINT** in a Python application using
```python
import os
os.getenv('SAMPLE_ENDPOINT')
os.getenv('SAMPLE_ENDPOINT_HOST')
os.getenv('SAMPLE_ENDPOINT_PORT')
```

{{% notice note %}}
Note on dependency graph
{{% /notice %}}