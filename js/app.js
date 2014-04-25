ws = new WebSocket("ws://" + (document.location.protocol == "file:" ? "localhost:5678" : document.location.host), "dumb-increment-protocol" );

ws.onmessage = function(e) { 
	console.log(e.data); 
}

App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
