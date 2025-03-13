Package.describe({
  name: 'epfl:accounts-entra',
  version: '0.0.2',
  summary: 'Accounts connector for epfl:entra-oauth package, for Meteor 2.16.',
  git: 'https://github.com/epfl-si/meteor-account-entra',
});

Package.onUse(function(api) {
  api.versionsFrom('2.16');

  api.use('ecmascript');
  api.use('accounts-oauth');

  api.addFiles('entra.js');
});
