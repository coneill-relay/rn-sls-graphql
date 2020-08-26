# Relay Network Serverless Template

## Purpose
Starting a serverless project requires boilerplate. This project will set up a directory structure and common libs. It will reduce the turnaround from creating to deploying a serverless project.

## Usage
```shell script
cd /projects
sls create -u git@github.com:relaynetwork/rn-sls-template -p rn-sls-project-name
cd rn-sls-project-name
npm i
git remote remove origin
git remote add origin git@github.com:relaynetwork/rn-sls-project-name.git
```

Reference: https://www.serverless.com/framework/docs/providers/aws/cli-reference/create/

## Structure
- **common/** - code to be shared between lambdas within this project but not outside. Common usage; validation function, data transformation. Easily testable js code.
- **config/**
  - **env/** 
    - **dev ... production.yml** - files for per env configuration. Example; VPC 
  - **functions.yml** - lambda function definition
  - **resources.yml** - resource definitions. Example; SQS, DLQ, DB
  - **step-functions.yml** - step function definitions
- **docs/** - directory for documentation that is helpful in development. Example; Living .puml arch design
- **handers/** - directory for the js code declaration of lambdas. These files should know they are lambdas and focus on destructuring the event/context and returning appropriately for the invocation type. Example; handler that knows its invoked through a rest call will respond differently to a bad request than an SQS queue based invocation
- **test/**
  - **common/** - testing of common code. isolating logic makes these raw js files which are easier to test 
  - **data/** - data to be used for testing. this allow and engineer to understand the event data structure
  - **handlers** - testing of handlers. good for testing return types (HTTP vs SQS)
- **serverless.yml** - base file for defining serverless projects

## Linting
```shell script
npm run lint
```

## Testing
### Unit testing
```shell script
npm test
```

```shell script
  1 passing (6ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |                   
 hello.js |     100 |      100 |     100 |     100 |                   
----------|---------|----------|---------|---------|-------------------
```
Tools:
- [mocha](https://mochajs.org/)
- [istanbul](https://istanbul.js.org/)
- [nyc](https://github.com/istanbuljs/nyc)
- [sinon](https://sinonjs.org/)
- [proxyquire](https://www.npmjs.com/package/proxyquire)

### Manual testing
Datadog query - `functionname:aws-nodejs-template-dev-hello` The naming will follow the pattern `servicename-env-functionname`.

## Libs
[rn-sls-lib-logger](https://github.com/relaynetwork/rn-sls-lib-logger)

JSON structured logging. Easy consumption by Datadog.

## CI/CD
