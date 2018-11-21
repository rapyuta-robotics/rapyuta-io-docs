---
title: "Build Logs"
description:
type: core-concepts
date: 2018-11-20T18:19:21+05:30
weight: 190
---
An executable of a rapyuta.io package is either a git repository or a docker image.
Build logs are generated when rapyuta.io converts the source code of a git repository
into a runnable docker image.

To view build logs of a package on [rapyuta.io console](https://closed-beta.rapyuta.io),
follow these steps:

1. On the left navigation bar, click **Catalog**.
2. Select a package which has a git repository for an executable.
3. Click **Builds** tab. The tab displays information on the current build
   generation number, the time of build creation, the author who created it,
   the build status and the error string.
4. To view details of the git repository such as repository's name, commit
   number, commit message and the git hosting platform for an executable of a
   component for which builds logs are available, click **View details/logs**.
5. For a specific executable whose logs you want to see, click **View Logs**.
6. Build logs are displayed in the logging area (terminal-like window). You may
   scroll up to view the starting logs of the log stream.

Once all of the build logs are generated, the status indicator greys out and
you'll see a **Logs streaming ended** status (top left corner of the terminal
window). If you see an error and the logs are not being generated,
click **Refresh**.

You can see the name of the executable together with the name of its component
whose build logs you're currently viewing. To view build logs of another executable,
click the executable drop-down list (top right corner of the terminal window).
