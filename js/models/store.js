// Todos.Store = DS.Store.extend({
//   revision: 12,
//   adapter: 'DS.FixtureAdapter'
// });

Todos.Store = DS.Store.extend({
  revision: 12,
  adapter: ParseAdapter.create({
    applicationId: 'pm4yCvxc1eqtdLcY3aBhrzYaGMIeuEaDTafRgGUa',
    restApiId: 'QE6xUvyZO2s2HmiNdBUpFE4xviCVGp4rr8IB4cr5',
    javascriptId: 'BHiby7Uhbly47CCMNZpOHW2BFJNG9kuW4ZNTZ6UV'
  })
});