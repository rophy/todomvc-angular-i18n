# gp-angular-example

A modified version of [AngularJS TodoMVC](https://github.com/tastejs/todomvc/tree/gh-pages/examples/angularjs) to demonstrate the usage of [gp-angular-client](https://github.com/IBM-Bluemix/gp-angular-client), which is a SDK for [Globalization Pipeline](https://console.ng.bluemix.net/catalog/services/globalization-pipeline/).

## Getting Started

1. Create an instance of [Globalization Pipeline](https://console.ng.bluemix.net/catalog/services/globalization-pipeline/) in Bluemix.
2. In Globalization Pipeline GUI, create a new bundle called `gp-angular-example`, and upload `bundles/en_US/msg.properties`.
3. In Globalization Pipeline GUI, create a **Reader** API user.
    - Note: Do NOT use the service credential, you must create a reader user.
4. Set environment variables `GP_URL`, `GP_USERID`, `GP_PASSWORD`, `GP_INSTANCEID` with values from the reader user credential.
5. Download and run this repo after the environment variables are set:

  ```shell
  git clone https://github.com/rophy/gp-angular-example.git
  cd gp-angular-example
  npm install
  node app.js
  ```
6. Load http://localhost:8080 with browser language set to en_US.
7. You should see TodoMVC example in English.
8. In Globalization Pipeline GUI, translate `gp-angular-example` into zh_CN.
9. Load http://localhost:8080 with browser language set to zh_CN.
10. You should see TodoMVC example in Simplified Chinese.
