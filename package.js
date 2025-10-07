Package.describe({
  name: 'epfl:accounts-entra',
  version: '0.0.3',
  summary: 'Accounts connector for epfl:entra-oauth package, for Meteor 3+',
  git: 'https://github.com/epfl-si/meteor-account-entra',
});

Package.onUse(function(api) {
  api.versionsFrom('3.3');

  api.use('epfl:entra-oauth@0.0.6');

  api.use('ecmascript');
  api.use('accounts-oauth');

  api.addFiles('entra.js');
});
