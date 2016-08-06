# Serverless Angular Demo

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

A bare bones Serverless Framework project powering the Angular 2 Tour of Heroes project.

## Install

Make sure you have the [Serverless Framework](http://www.serverless.com) installed and you're using Node.js v4.0+. 
```
npm install serverless -g
```

Install project dependencies via npm:
```
npm install
```

## Configure
1. Create a new folder named _meta at the root of the project
	- Copy the contents of _meta-template into it
	- Update the IAM Role in _meta/variables/s-variables-dev-useast1.json to your IAM Role
2. Create a admin.env file at the root of the project and copy the contents of admin.env-template into it
3. 

## Run

To run the Angular application in dev mode
```
npm start
```

To use webpack to compile the Angular application down into distribution ready code found in client/dist
```
npm run build
```

Deploy your functions and endpoints:
```
serverless dash deploy
```