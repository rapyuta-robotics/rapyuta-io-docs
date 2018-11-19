---
title: "Auth Token Docker Creds"
description:
type: core-concepts
date: 2018-11-15T14:20:21+05:30
draft: true
weight: 14
---
When you create a docker pull secret for a private registry, rapyuta.io stores
your docker credentials (that is, username and password) in base64-encoded
format. This encoded data is the _authorisation token_ which gives access to
rapyuta.io to pull private docker images while deploying a package.

To determine your docker credentials for a private registry, run the following
instructions in sequence on the system you have logged in to docker:

1. Docker login process creates or updates `config.json` file. To display this
   file, run the  command:
   ```bash
   cat ~/.docker/config.json
   ```

   A sample `config.json` file will look like:
   ```bash
   {
       “auths”:{
           “https://index.docker.io/v1/”:{
               “auth”:”c3r...ze2”
           }
       }
   }
   ```
   The value of `auth` entry is base64-encoded data, also called
   an _authorisation token_.    

   If you use a docker credentials store, you will instead see `credsStore` entry
   with the name of the store as value. For example, a sample `config.json` file
   with `credsStore` entry would look like:
   ```bash
   {
       “auths”:{
           “https://index.docker.io/v1/”:{}
       },
       “credsStore”: ”osxkeychain”
   }
   ```
   You can find out the _authorisation token_ from the respective `credsStore`
   entry’s value. In this case, use `osxkeychain` value to figure out
   authorisation token.
2. To convert _authorisation token_ to a readable format, execute the command:
   ```bash
   echo  “c3r...ze2” | base64  -d
   ```
3. The output consists of two parts separated by a colon : and is similar to:
   ```bash
   janedoe:xxxxxxxxxx
   ```
   The part on the left of **:** is your docker username, while the one on the
   right is your password.

rapyuta.io uses your docker pull secret during package deployment.

If you encounter the following deployment error,
```bash
DEP_E153 (Could not pull either the docker image or the built package artifact for the component on the cloud)
```

Ensure your docker username and password in the secret are correct.
