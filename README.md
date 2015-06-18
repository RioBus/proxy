NodeTS
=======

It's an little infrastructure to start a new node.js project using typescript. It is focused in API
development providing an abstraction to ExpressJS.


Installing on machine
---------------------

It's necessary to have ```node.js``` installed.
> https://nodejs.org/download/

Download the code in your machine
> $ git clone https://github.com/fmsouza/nodets.git

Go to the project root and install dependencies
> $ npm install

Also in the root, configure the environment
> $ npm run configure


Installing on docker
--------------------

Install docker
> https://docs.docker.com/installation/

Go to the project root and compile the container image
> $ ./build-image

Run The container
> $ ./run-container

NPM commands
------------

npm run configure
> Configures the environment for compiling

npm run build
> Compiles the project to Javascript and places the code in build/

npm run test
> Invokes Mocha and runs the acception test cases configured in test/

npm run start
> Compile and run the application

npm run release
> Compile and generates a compressed code for release

npm run deploy
> Compiles, generates the release code and runs the final application

Compatibility
-------------

Node.js version 0.11 or higher