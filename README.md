# Rapyuta IO Documentation
This repository contains the source files for the technical documentation for Rapyuta IO.

All Rapyuta IO documentation is sourced in [AsciiDoc](http://www.methods.co.nz/asciidoc/) and transformed into HTML/CSS through AsciiBinder toolchain. 

## Contributing to Rapyuta IO Documentation

### Repository Organization

Each top directory in the repository can include a collection of top level topics, and/or subdirectories that further contain a second level of topics. The exceptions to this rule are:

- Directories whose names start with an underscore (like `_stylesheets` and `_templates`) which contain the assets used to generate the finished documentation.
- `api_docs` - This houses the OpenAPI specifications for all REST APIs exposed by Rapyuta IO.

Each top level `<topic>` directory contains the topics as AsciiDoc files, any `<subtopic>` subdirectories, and an `images` directory
where all images for that topic are stored. 

```
#!shell
/topic_dir
/topic_dir/topic1.adoc
...
/topic_dir/topicN.adoc
/topic_dir/subtopic_dir1
/topic_dir/subtopic_dir1/topic1.adoc
...
/topic_dir/subtopic_dir1/topicN.adoc
...
/topic_dir/subtopic_dirN
/topic_dir/subtopic_dirN/topic1.adoc
...
/topic_dir/subtopic_dirN/topicN.adoc
/topic_dir/images
/topic_dir/images/img1.png
...
/topic_dir/images/imgN.png
```

### Anatomy of a Build

The documentation build system reads the `_topic_map.yml` metadata file to construct the content from the source files and publish to the relevant site. The build system *only* reads this file to determine which topic files to include. Therefore, all new topics that are created must be included in the `_topic_map.yml` metadata file in order to be processed by the build system.

#### Topic Map File `_topic_map.yml`

```
--- ======> (1)
Name: Getting Started ======> (2)
Dir: getting_started  ======> (3)
Topics: ======> (4)
  - Name: Overview ======> (5)
    File: index ======> (6)
  - Name: Terminology
    File: terminology 

---
Name: CLI Reference
Dir: cli_reference
Topics:
 - Name: Getting Started
   File: index
 - Name: Developer CLI Operations ======> (7)
   Dir: dev_cli_ops ======> (8)
   Topics:
     - Name: Basic CLI Operations
       File: index 
     - Name: Package CLI Operations
       File: packages
```

**(1)** Each topic group configuration is preceeded by this three-dash (`---`) record delimiter.

**(2)** The display name of this topic group, which will appear in navigation elements.

**(3)** The directory of this topic group within the git repo. 

**(4)** Each topic group will contain at least one topic (asciidoc file).

**(5)** The display name of this topic for use in navigation elements. 

**(6)** The filename of the actual asciidoc file (the `.adoc` extension is implictly assumed)

**(7)** This topic is actually a topic "subgroup". Instead of a "File" value it includes a "Dir" value and a "Topics" list.

**(8)** This subgroup directory "dev_cli_ops" is expected to be a directory under the parent topic group directory "cli_reference".

### Opinionated Organization
The layout of the topic map file combined with the behavior of AsciiBinder implies a specific organization of directories and topic files. 

1. There are no topic files in the root directory of the repo - *The root directory of the repo is reserved for metadata files*.
2. The maximum depth of topics is **2** directories. - *This may seem like an arbitrary limiting rule but it comes from looking at a real-world use of AsciiBinder, which contains over two hunderd topics*.

## Installation and Author Workflow

### Installing Asciibinder

AsciiBinder is distributed as a Ruby gem, so use the `gem` command to install it:

```
#!shell
gem install ascii_binder
```

### Cloning the Repository

```
#!shell
git clone git@bitbucket.org:rapyutians/rapyuta-io-docs.git
```

### Creating a New Branch
```
#!shell
# git checkout -b docs_my_component
git checkout -b <your-branch>
```

In order for the build tool to be able to find and build your new branch, you need to edit the `_distro_map.yml` file. Add the following under the `branches` tag in `_distro_map.yml`

```
#!shell
<your-branch>:
  name: <your-branch>
  dir: <your-branch>
```

The HTML output for your branch will be generated in `_preview/rapyuta-io/<your-branch>` directory.


### Building the Docs

Transforming an AsciiBinder repo into a bunch of documentation is pretty easy:

```
#!shell
# asciibinder build <repo_dir>
asciibinder build rapyuta-io-docs
```

If you run this from the root directory of your repo, you can simply run:

```
asciibinder
```

### Password protect built docs

Invoke staticrypt/index.js with a passphrase and directory relative to the project root
```
#!shell
# node staticrypt/index.js --directory=<directory> --passphrase=<passphrase>
```
Eg:
```
node staticrypt/index.js --directory=_preview/rapyuta-io/build_staticrypt --passphrase='myfavouritePassPhra$e'
```

### Viewing the Docs

You can see the HTML produced by the build process under the `_preview` directory in the repo. 

```
#!shell
cd rapyuta-io-docs/_preview
python -m SimpleHTTPServer 8000
# Hit http://localhost:8000/rapyuta-io/latest/getting_started (or http://localhost:8000/rapyuta-io/<your_branch>/getting_started if you're using your own branch) in your favorite browser
```

### Instant Preview with Live Reload

If you are interested in seeing instant feedback on your changes to an AsciiDoc file, you can take advantage of AsciiBinder's
live preview capability by running:

```
#!shell
asciibinder watch
```

When you do this, a Guard process starts running in the foreground on that terminal. You can see the Guard process command by running: 
```
#!shell
netstat -putln 2>&1 | awk -v GUARD_LIVERELOAD_PORT=35729 '$0 ~ GUARD_LIVERELOAD_PORT { split($7, process, "/"); system("ps -o command= -p "process[1]) }'
``` 

The Guard configuration file for AsciiBinder is located [here](https://github.com/redhataccess/ascii_binder/blob/master/Guardfile) which in turn uses this [file](https://github.com/redhataccess/ascii_binder/blob/master/lib/ascii_binder/tasks/guards.rb).

AsciiBinder uses [`guard-livereload`](https://github.com/guard/guard-livereload) guard to provide live reload functionality. 

In order to get everything running in the browser, we use [`rack-livereload`](https://github.com/johnbintz/rack-livereload)

```
#!shell
# Rack implements a simple interface that allows Ruby web application servers (like WEBrick, Mongrel, etc.) and 
# Ruby web frameworks (like Rails, Sinatra, etc.) to interoperate with each other.
gem install rack
gem install rack-livereload
# Run a Rack application behind a WEBrick web application server using 'config.ru' rackup config file. 
rackup -p 8000 config.ru
# Hit http://localhost:8000/rapyuta-io/latest/getting_started/index.html (or http://localhost:8000/rapyuta-io/<your_branch>/getting_started/index.html if you're using your own branch) in your favorite browser
```

### Cleaning Out Build Artifacts

To clean up the contents of `_preview` directory and start afresh, you can run:

```
#!shell
asciibinder clean
```

## Who do I talk to?
- Chaitanya Deep `<chaitanya.deep@rapyuta-robotics.com>`
- Bharat Khatri `<bharat.khatri@rapyuta-roboitcs.com>`
