# Message API

A prototype app for

- [x] Couchbase from Lambda
- [x] GraphQL

## Development

### Getting Started

```sh
npm i
./scripts/bootstrap
sls offline
```

###Add Data
POST an object with a property of `message`

`curl -X POST localhost:3000/dev/message --data '{message: hello}'`

###Graphql
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
