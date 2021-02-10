---

title: "Turtlesim"
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.

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
---

//TODO: Engineering needs to create docker images

// Docker package 

// turtlesim on cloud

// teleop node on cloud. 

// Import the package.  from package manifest. 

// Get them to running state



Component

- Docker
  - ros-work-space

    - Turtlesim 
    - teleop

  - ?? Viz this turtlesim 

    - Web -viz
    - Xvnc

  - jupyterlab

    - Endpoint - 8080
    - python kernel
    - preconfigured with your ros-workspace

  - webenpoint

    - Web UI - 80

    

Learning Objective:  

- Create Routed Network  [2mins]
  - Button in the doc => import/apply routed network. [Dev Task] 
    - console.rapyuta.io/network/routed?create=true&payload=x,y,z
      - open the modal
      - Confirm
- Import 1 packages  - User action => simple   [1min]
  - TurtleSim + Jupyterlab + Basic UI 
    - 3 executables
    - 2 endpoints
  - Jupyterlab
    - sample code?
    - Preferably import widgets too
  - Basic UI?
    - leave as is. 
- Exposing the endpoint. 
  - jupyterlab
  - webui



Show a wireframe of the package page.  [5mins]

 Explore the Package Detail page. 



- We have used a docker image from dockerhub. Did you find the image names?
  - foldable
- This package  Did you find where the endpoints listed?
  - links are of type inst-xxxx





**Deploy the package**   [5mins]



Explore Deployment

- What states did you notice 
- Find the URL
- Open webui - play with the turtle
- Open jupyter in a new tab.  
- Try the example. 
  - GoToPoint.ipynb
  - Clean_from_point.ipynb







- Deployments have a lifecycle. This will progress into succeeded. Learn Deep Dive

- Simple Web UI - Play with it  [5mins]

  Terminal

  - rostopic ls 
  - rostopic echo
  - roslaunch x    x ??

  

  Logs

  - find the URL
  - find jupyterlab token using live logs. 

  

  

- Jupyterlab        -  play with it  [10-30mins]

- Explore notebooks. 



