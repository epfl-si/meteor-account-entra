## Install
Add this two packages:
- The OAuth2 package
    ```
    meteor add epfl:entra-oauth
    ```
- This package
    ```
    meteor add epfl:accounts-entra
    ```

## Setup

You can see an app example on https://github.com/epfl-si/meteor-account-entra-app.

The pieces to not forget are:
- the configuration, loaded trough a `Meteor.startup()`
    - https://github.com/epfl-si/meteor-account-entra-app/blob/main/server/entraAuth.js
- the UI
    - https://github.com/epfl-si/meteor-account-entra-app/blob/main/imports/ui/App.jsx
