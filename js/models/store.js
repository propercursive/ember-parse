// Todos.Store = DS.Store.extend({
//   revision: 12,
//   adapter: 'DS.FixtureAdapter'
// });


Todos.Store = DS.Store.extend({
  revision: 11,
  adapter: ParseAdapter.create({
    applicationId: '<YOUR APP ID HERE>',
    restApiId: '<YOUR REST API KEY HERE>',
    javascriptId: '<YOUR JAVASCRIPT KEY HERE>'
  })
});