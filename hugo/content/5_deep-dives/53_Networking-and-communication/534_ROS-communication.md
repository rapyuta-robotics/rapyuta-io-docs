---

title: "ROS Communication"
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.

weight: 530

versions:
  free-pro-team: '*'
  enterprise-server: '*'

layout: false
permissions: 'rapyuta.io'

showMiniToc: true
miniTocMaxHeadingLevel: 4

allowTitleToDifferFromFilename: false
mapTopic: false
hidden: false


redirect_from: []
gettingStartedLinks : []
popularLinks: []
guideLinks: []
introLinks: {}
tags:
    - Deep Dive

---

ROS network is a rapyuta.io resource to enable ROS communication between different ROS package deployments. Binding a network resource to your deployment will enable other deployments on the same network to consume ROS topics/services/actions as defined in the package. Data flow occurs only when another package chooses to subscribe to a topic, call a service or call an action.


## ROS Network Types

* [Routed Network]()
* [Native network]()

#### Illustrated Example

For the purpose of this illustration, let’s assume the following network and packages.

* You have a routed network networkN
* You have PackageA publishing “topicA”
* You have PackageB publishing “serviceB”

We deploy the packages described above in the following configuration.

* Deploy PackageA binding to the network networkN as DeploymentA
* Deploy PackageB binding to the network networkN as DeploymentB

The result is as follows

* ROS nodes in DeploymentA can now call “serviceB”
* ROS nodes in DeploymentB can now subscribe to “topicA”

## Multi-Robot ROS Communication

  The rapyuta.io platform offers an elegant solution for multiple robots communication as a primary feature. In the rapyuta paradigm, the component of each package is treated as an isolated ROS environment. While declaring the package, you are only required to provide the topics/services/actions to be exposed by that particular component. The platform is then responsible for connecting, managing, and securing the ROS environments together. We introduce a set of new features aimed at making it a lot easier to use multiple robots.

### Illustrating a Multi-Robot Scenario

  To illustrate a scenario involving multiple robots we turn to an example involving the world's favorite sport - soccer. Similar topologies are often relevant in real-world applications of robots such as warehouses where a ***coordinator*** controls multiple AMR/AGVs 
  
  Imagine a game of robot soccer where players are robots, and their coach is a controller unit. 

  The players follow a simple convention

  * A player moves to a position when it receives a message on the */move* topic
  * A player publishes its pose and location through */odom*.

  Now if the coach (controller) needs to use this information from all players(robots) in the field. To deal with multiple players(robots), it is necessary to create a convention that allows him to specifically access information about one specific player(robot) and issue commands to one specific player(robot). 

  In the ROS community, the common approach used in multi-robot communication scenarios is to __prefix or namespace__ the interfaces (topics/services/actions) __by a unique identity__ typically the name of the robot. 

  Following this convention, if the coach(controller)

  *  wants to move _robot A_ in a specific direction, it must explicitly publish */robotA/move* that is subscribed by _robot A_ (or */robotB/move* and */robotC/move* to robot B and robot C respectively)
   * wants to seek odom from _robot A_, it must explicitly subscribe to */robotA/odom* that is published by _robot A_  (or */robotB/odom* and */robotC/odom* from robot B and robot C respectively)

  This is achieved using carefully crafted launchfiles using remaps (e.g. /move to /robot_A/move), conditionals (e.g. unless ns!="" or if robot_name=="robot_A"), arguments(e.g. robot_name:=robot_A) and namespaces(e.g. &lt;node ns=robot_A&gt;). This mandates the delicate arrangement of files is frozen while building the software and consistently distributed to all involved agents. As the needs/software change and the number of variables and robots increase, this approach becomes increasingly error-prone.


![Robot soccer block diagram](/images/multi-robot-communication/robotSoccer-blk-diagram.png?classes=border,shadow&width=50pc)

