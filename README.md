# app-swapi
App swapi - get and save planets with nodeJs,  serverless framework, express and mysql

## Configuration
### Install dependencies 
```
npm install
```
### Environment
Create the environment file (.env) similar to .env.example
```
HOST=
DATABASE=
USER=
PASSWORD=
SWAPI=https://swapi.py4e.com/api/
```

## Run test
```
npm run test
```

## Local deployment
### Run serverless offline
```
sls offline start
```

You should see output similar to:
```
Running "serverless" from node_modules

Starting Offline at stage dev (eu-west-1)

Offline [http for lambda] listening on http://localhost:3002
Function names exposed for local invocation by aws-sdk:
           * app-swapi: app-swapi-dev-app-swapi
           * swaggerUI: app-swapi-dev-swagger-ui
           * swaggerJSON: app-swapi-dev-swagger-json

   ┌───────────────────────────────────────────────────────────────────────────────┐
   │                                                                               │
   │   GET | http://localhost:3000/dev                                             │
   │   POST | http://localhost:3000/2015-03-31/functions/app-swapi/invocations     │
   │   ANY | http://localhost:3000/dev/{proxy*}                                    │
   │   POST | http://localhost:3000/2015-03-31/functions/app-swapi/invocations     │
   │   GET | http://localhost:3000/dev/swagger                                     │
   │   POST | http://localhost:3000/2015-03-31/functions/swaggerUI/invocations     │
   │   GET | http://localhost:3000/dev/swagger.json                                │
   │   POST | http://localhost:3000/2015-03-31/functions/swaggerJSON/invocations   │
   │                                                                               │
   └───────────────────────────────────────────────────────────────────────────────┘

Server ready: http://localhost:3000 🚀
```

### Consult the APIs
There are 5 APIs that you can use
```
GET/planet/show-from-database/{id}
GET/planet/show-all-from-database
POST/planet/save-to-database
GET/planet/show-from-swapi/{id}
GET/get-from-swapi-save-to-database/{id}
```
You can see more about this APIs in the Swagger documentation

## Swagger documentation
After to execute `sls offline start` go to the link:
```
http://localhost:3000/dev/swagger
```




