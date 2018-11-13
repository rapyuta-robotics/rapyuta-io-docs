---
title: "Dockerfile build strategy"
date:
weight: "9"
---
When you create a package, you can either provide a _git repository_ url or a
_docker image_ as an executable of the package irrespective of a component's runtime.

To apply Dockerfile Build strategy to a _Dockerfile_, you must ensure that the
git repository contains a valid _Dockerfile_. You may explicitly specify the
absolute path of the _Dockerfile_ instead of rapyuta.io automatically detecting
the _Dockerfile_ location with respect to the git repository. Finally, rapyuta.io
builds the _Dockerfile_ into a runnable docker image.

When the build fails, you should inspect the corresponding build logs and/or
properly validate the _Dockerfile_ present in the git repository. If you continue
to see the error, contact the support team.

You can explicitly specify the absolute path of [_Dockerfile_](https://docs.docker.com/engine/reference/builder/)
in a git repository.
