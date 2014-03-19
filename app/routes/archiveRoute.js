App.ArchiveRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('comic');
  }
});