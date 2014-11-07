# EasyRF HTTP Demo server

## Getting started

To get the server up and running following the steps below.

### Install tools

The server demo has been written using the latest and popular web development tools.
It uses the NodeJS express framework for the back-end and angularJS and Bootstrap CSS for the front-end.

The project has been bootstrapped using [https://www.npmjs.org/package/generator-angular-fullstack]()

#### 1. NodeJS for the back-end

Install NodeJS from:

[http://nodejs.org/download/]()

The current version of NodeJS includes __NPM__ which is the package manger of NodeJS.
This tool should be used to install NodeJS packages. Like apt-get it also manages package depedencies.

#### 2. Bower for the front-end

Bower is a tool for managing Javascript libraries for the front-end code.
It can be easily installing using NPM.

`npm install bower -g`

Using the `-g` option installs it as a global package instead of a project package.

### Get the code

The easiest way to get the sources is to install Git on your machine and clone the repository.

`git clone https://github.com/EasyRF/http-server-demo.git`

Alternatively you can download the sources from GitHub as a ZIP-file.

### Build and Run the demo

Now it's time to run the server application.

Change to the directory of the server.

`cd http-server-demo`

NodeJS project dependencies are listed in the `package.json` file.
The next command will download all the NodeJS packages used for building and running the server.
This can take a while depending on the speed of your internet connection and machine.

`npm install`

When everything is downloaded you can run the demo using __Grunt__. Grunt is a very handy tool for developing web projects.
Grunt is like a script tool and it automates tasks in a generic way. See [http://gruntjs.com/getting-started]() for more info.
To run the server in development mode use:

`grunt serve`

In this mode you can edit Javascript, HTML and CSS files and after saving the changed files Grunt will reload the updates an reflect the changes immediately. It also opens a new browser window for you automatically.

To run the server in without Grunt (and live reload) first build the project using:

`grunt build`

and then run the server using:

`node server/app.js`

The server is configured to listen on port 9999.

To view the webpage go to:

`localhost:9999`

To see the Device Sensor Data when running sensors-test on one of your nodes make sure the server IP in sensors-test.c 
matches the IP of you machine.


