# todomvc-angular-i18n using gp-angular-client

A modified version of [AngularJS TodoMVC](https://github.com/tastejs/todomvc/tree/gh-pages/examples/angularjs) to demonstrate the usage of [gp-angular-client](https://github.com/IBM-Bluemix/gp-angular-client), which is a SDK for [Globalization Pipeline](https://console.ng.bluemix.net/catalog/services/globalization-pipeline/).

## Getting Started

1. Create an instance of [Globalization Pipeline](https://console.ng.bluemix.net/catalog/services/globalization-pipeline/) in Bluemix.
2. In Globalization Pipeline GUI, create a new bundle, and upload `bundles/en_US/msg.properties`.
3. In Globalization Pipeline GUI, create a **Reader** API user.
    - Note: Do NOT use the service credential, you must create a reader user.
4. Set following environment variables:
    - `GP_URL`: value from the reader user credential
    - `GP_USERID`: value from the reader user credential
    - `GP_PASSWORD`: value from the reader user credential
    - `GP_INSTANCEID`: value from the reader user credential
    - `GP_BUNDLEID`: name of your created bundle
5. Download and run this repo after the environment variables are set:

  ```shell
  git clone https://github.com/rophy/todomvc-angular-i18n.git
  cd todomvc-angular-i18n
  git checkout gp-angular-client
  npm install
  node app.js
  ```
6. Load http://localhost:8080, you should see TodoMVC example in English.
8. In Globalization Pipeline GUI, translate your bundle into zh-CN.
9. Reload TodoMVC app.
10. Notice that zh-CN is now avaiable to select at the bottom right drop down.
11. Select zh-CN, you should see TodoMVC example in Simplified Chinese.
