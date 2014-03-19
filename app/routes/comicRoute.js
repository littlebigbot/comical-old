App.ComicRoute = Ember.Route.extend({
  model: function(params){
    return this.store.find('user', params.comic_id);
  }
});