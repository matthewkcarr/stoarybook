// http://emberjs.com/guides/models/using-the-store/

Stoarybook.ApplicationAdapter = DS.FixtureAdapter.create({simulateRemoteResponse: false});
//Stoarybook.ApplicationAdapter = DS.ActiveModelAdapter;
Stoarybook.Store = DS.Store.extend({
  // Override the default adapter with the `DS.ActiveModelAdapter` which
  // is built to work nicely with the ActiveModel::Serializers gem.
  adapter: Stoarybook.ApplicationAdapater
});
