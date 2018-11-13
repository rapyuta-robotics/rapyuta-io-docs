---
title: "Build logs"
url: "/core-concepts/build-logs/"
pre: "p. "
weight: 36
---

An executable of a rapyuta.io package is either a git repository or a docker image.
Build logs are generated when rapyuta.io converts the source code of a git repository
into a runnable docker image.

To view build logs of a package on rapyuta.io console UI, follow these steps:

1. On the left navigation bar, click **Catalog**.
2. Select a package which has a git repository for an executable.
3. Click **Builds**.
4. To see a list of executables for which builds logs are available, click **View details/logs**.
5. For a specific executable whose logs you want to see, click **View Logs**.
6. Build logs are displayed in the logging area (terminal-like window). You may scroll up to view the starting logs of the log stream.

Once all of the build logs are generated, the status indicator greys out and
you'll see a **Logs streaming ended** status.

If you see an error and the logs are not being generated, click **Refresh**.

You can see the name of the executable together with the name of its component
whose build logs you're currently viewing. To view build logs of another executable,
click the executable drop-down list.
