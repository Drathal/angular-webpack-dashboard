# Just another Angular Dashboard 

[![Build Status](https://travis-ci.org/Drathal/angular-webpack-dashboard.svg)](https://travis-ci.org/Drathal/angular-webpack-dashboard) 
[![Codacy Badge](https://api.codacy.com/project/badge/1f843886f2c74fc5a7ffee387077ddf0)](https://www.codacy.com/app/drathal/angular-webpack-dashboard)
[![Coverage Status](https://coveralls.io/repos/Drathal/angular-webpack-dashboard/badge.svg?branch=master&service=github)](https://coveralls.io/github/Drathal/angular-webpack-dashboard?branch=master)
[![Dependencies](https://david-dm.org/Drathal/angular-webpack-dashboard.svg)](https://david-dm.org/Drathal/angular-webpack-dashboard)
[![Join the chat at https://gitter.im/Drathal/angular-webpack-dashboard](https://img.shields.io/badge/%E2%8A%AA%20GITTER%20-JOIN%20CHAT%20%E2%86%92-brightgreen.svg?style=flat)](https://gitter.im/Drathal/angular-webpack-dashboard)

A little frontend to play around with: 
  * ES6 
  * angular 1.x
  * material design
  * webpack
  * component driven frontend
  * docker

## requirements
  * [git](https://git-scm.com/)
  * [node.js](https://node.js/)
  * [Java](https://java.com/download/) only for selenium tests
   
## install

    git clone https://github.com/Drathal/angular-webpack-dashboard.git
    cd angular-webpack-dashboard
    npm install

## build & start
### production

    npm run build
    npm run start
    
Open in Browser at: localhost:8888    
    
### development

    npm run build:dev
    
Open in Browser at: localhost:8080    

## tests
### run unit tests once

    npm run test
    
### listen for changes and rerun tests    

    npn run test:dev
    
## docker
### build image

    docker build -t dashboard .
    
### run container    

    docker run -p 8888:8888 -t dashboard
    

## FAQ

#### Where can i change the port for the dev server?
You chan change the `port` variable, inside `webpack/webpack.make.js`.

#### Where can i change the port for the production server?
You chan change the `port` variable, inside `server.js`.

