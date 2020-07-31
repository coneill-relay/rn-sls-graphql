# Relay Network Serverless Template

## Purpose
Starting a serverless project requires boilerplate. This project will set up a directory structure and common libs. It will reduce the turnaround from creating to deploying a serverless project.

## Usage
```shell script
cd /projects
sls create -u https://github.com/relaynetwork/rn-sls-template -p rn-sls-project-name
cd rn-sls-project-name
npm i
```
Reference: https://www.serverless.com/framework/docs/providers/aws/cli-reference/create/

## Structure

## Testing
### Unit testing

### Manual testing
Datadog query - `functionname:aws-nodejs-template-dev-hello` The naming will follow the pattern `servicename-env-functionname`.

## Libs

## CI/CD