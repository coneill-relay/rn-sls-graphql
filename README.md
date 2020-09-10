# Message API

A prototype app for

- [x] Couchbase from Lambda
- [x] GraphQL

Couchbase does not recommend or support the use of couchbase in a lambda environment.
https://docs.couchbase.com/nodejs-sdk/current/project-docs/compatibility.html

Issuing HTTP requests to an existing process running on EC2 would be a more suitable production setup.

## Development

### Getting Started

```sh
npm i
./scripts/bootstrap
sls offline
```

### Add Data

POST an object with a property of `message`

`curl -X POST localhost:3000/dev/message --data '{message: hello}'`

### Graphql

visit `http://localhost:300/dev/graphql` to play with the grapqhl playground to start making queries

## Linting

```sh
npm run lint
```

## Testing

### Unit testing

```sh
npm test
```

```
  1 passing (6ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 hello.js |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
```
