// http://emberjs.com/guides/models/using-the-store/

Stoarybook.ApplicationAdapter = DS.FixtureAdapter.create({simulateRemoteResponse: false});
Stoarybook.Store = DS.Store.extend({
  // Override the default adapter with the `DS.ActiveModelAdapter` which
  // is built to work nicely with the ActiveModel::Serializers gem.
  //adapter: '_ams'
  adapter: Stoarybook.ApplicationAdapter
});
/*
Stoarybook.Store = DS.Store.extend({
  // Override the default adapter with the `DS.ActiveModelAdapter` which
  // is built to work nicely with the ActiveModel::Serializers gem.
  adapter: '_ams'
});
*/
