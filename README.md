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
Setup project
```
sls project init
```

## Configure
1. Update s-project.json
    - Update bucketName under custom/client to the S3 bucket you would like your Angular application to be saved in.
2. Create Dynamo Table
    - Create a table named heroes
    - Hash key 'id' of type string
3. Add dynamo role policy to your [existing IAM role](https://console.aws.amazon.com/iam/home?region=us-east-1#roles)
    - ![Add dynamo access rights](https://raw.github.com/jongear/serverless-angular-demo/master/README-content/dynamo-iam-role-policy.PNG "Add dynamo access rights")


## Run

To run the Angular application in dev mode
```
npm start
```

To use webpack to compile the Angular application down into distribution ready code found in client/dist
```
npm run build
```

To use the serverless-client-s3 plugin to push your Angular application into the desired S3 bucket
```
sls client deploy
```

Deploy your functions and endpoints:
```
sls dash deploy
```