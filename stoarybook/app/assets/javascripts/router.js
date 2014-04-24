// For more information see: http://emberjs.com/guides/routing/

Stoarybook.Router.map(function() {
	this.route('about');
	this.route('login');
	this.route('home');
	this.route('registration');
  // this.resource('posts');
});

Stoarybook.IndexRoute = Ember.Route.extend({
  beforeModel: function(transition) { 
    this.transitionTo('about');
	}
});

Stoarybook.LoginRoute = Ember.Route.extend({
  model: function() {
		return Ember.Object.create();
	},

  setupController: function(controller, model) {
    controller.set('content', model);
    controller.set("errorMsg", "");
	},

  actions: {
    login: function() {
      console.log("Logging in...");
      this.controllerFor("auth").login(this);
		},
    cancel: function() {
      console.log("cancelling login");
      this.transitionTo('about');
		}
	}
});

Stoarybook.RegistrationRoute = Ember.Route.extend({
  model: function() {
		return Ember.Object.create();
	},
  actions: {
    register: function() {
      console.log( "Registering...");
      this.controllerFor("auth").register(this);
		},
    cancel: function() {
      console.log("cancelling registration");
      this.transitionTo('home');
		}
	}
});
