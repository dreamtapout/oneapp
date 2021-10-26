# Application Instructions


This project shows instrumentation for JS with Express Application auto-instrumentation


From the root of the project, run the following:


1. Install Packages

```js
npm install --save axios
npm install --save @opentelemetry/api                              
npm install --save @opentelemetry/sdk-node
npm install --save @opentelemetry/exporter-collector-grpc
npm install --save @opentelemetry/auto-instrumentations-node
npm install --save @grpc/grpc-js
```


2. Run the code with the API and Dataset in the commandline

```bash
HONEYCOMB_DEMO_WRITEKEY=XXXXX HONEYCOMB_DATASET=A_NAME node -r ./tracing.js src/index.js
```

Test using the following commands

```bash

http://localhost:8080/run_test
http://localhost:8080/healthy

```