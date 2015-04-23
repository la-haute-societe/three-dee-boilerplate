# 3D Boilerplate

The source code just shows a cube spinning in a web-browser.
This repo is meant to be used to start small 3D projects with strong workflow / architecture.

### Node

You need [Node.js](https://nodejs.org/) environment to use this project.

### Grunt

We use the grunt task runner to compile our sources and clean the workflow.
After node is installed on your computer, you can install grunt as a globally available package with :

```
npm install -g grunt
npm install -g grunt-cli
```

### Grunt dependencies

To install grunt dependencies, call this in the build/ folder :

```
npm install
```

### Typescript

The source code is in Typescript. This will provide us strong auto-completion in most IDE, and a lot of static error checking.
Javascript libraries have typescript definitions available to get auto-completion and error checking.
To install the compiler and it's definition manager globally :
Don't forget to update them from time to time.

```
npm install -g typescript
npm install -g tsd
```

### Typescript definitions

To install used typescript definitions, call this in the build/ folder :

```
tsd query waa --action install
tsd query mediastream --action install
tsd query three --action install
tsd query greensock --action install
```

We use [three.js](http://threejs.org/) framework to abstract our 3D scenes and display them with WebGL.
(waa and mediastream are webgl sub-dependencies).
We also use the tween engine [gsap](http://greensock.com/gsap) from greensock for animations.

### Bower

We use [bower](http://bower.io/) to install our dependencies. They are installed in the lib/ folder.
To install bower dependencies, call this in the build/ folder :

```
bower install
```

### Run the project

To run the project, use this command in the build/ folder :

```
grunt
```

This command will compile typescript sources + concat them in one file. When done this will launch a web-server (from the deploy/ folder) and watch changed files to re-run the compiling and reload the browser if needed.
If you just need compiling :

```
grunt dev
```

Or if you need production compiling (with sources obfuscation) :

```
grunt dist
```


### Have fun :)