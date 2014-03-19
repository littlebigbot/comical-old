App.Router.map(function(){
  this.resource('comics', function(){
    this.resource('comic', { path:'/:comic_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
});