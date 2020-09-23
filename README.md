# Graphql API

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

Grab a valid `wire_id` cookie from your portal sessions

#### Playground

Visit `http://localhost:300/dev/graphql` to play with the grapqhl playground to start making queries

#### Curl

Replace the `cookie` header value with a valid wire session id from your cookies.

```sh
curl 'http://localhost:3000/dev/graphql' \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
   --data-binary '{"query":"{\n  client(id: \"len_qa_reports\") {\n    branding {\n      icon_s3_url\n      banner_s3_url\n    }\n    productGroup(id: \"default\") {\n      name\n    }\n  }\n}","variables":{"id":"1"}}' \
   --compressed
```

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
