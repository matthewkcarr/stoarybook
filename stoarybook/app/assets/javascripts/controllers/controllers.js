// In a real app you will probably want to separate components into different files
// They are grouped together here for ease of exposition

Stoarybook.AuthController = Ember.ObjectController.extend({
  currentUserTest:  {id: 1, name: 'frank'},
  currentUser:  null,
  isAuthenticated: function() { 
		console.log(Ember.computed.notEmpty("currentUser.email"));
		return Ember.computed.notEmpty("currentUser.email");
	},
  login: function(route) {
		console.log('in auth/login controller');
    $.ajax({
      url: Stoarybook.urls.login,
      type: "POST",
      data: {
        "user[email]": route.currentModel.email,
        "user[password]": route.currentModel.password
			},
      success: function(data) {
					console.log("Login Msg #{data.user.dummy_msg}");
					this.set('currentUser', data.user);
					route.transitionTo('about');
			},
      error: function(jqXHR, textStatus, errorThrown) {
        if( jqXHR.status == 401 ) {
          route.controllerFor('login').set("errorMsg", "That email/password combo didn't work.  Please try again");
				} else if( jqXHR.status == 406) {
          route.controllerFor('login').set("errorMsg", "Request not acceptable (406):  make sure Devise responds to JSON.");
				} else {
          p("Login Error: #{jqXHR.status} | #{errorThrown}");
				}
			}
		});
	},
  register: function(route) {
    $.ajax({
      url: Stoarybook.urls.register,
      type: "POST",
      data: {
      //would be nice if could do something like this
      //user: @currentModel.getJSON
      //(perhaps there is, but couldn't find)
      //  "user[name]": route.currentModel.name,
        "user[email]": route.currentModel.email,
        "user[password]": route.currentModel.password,
        "user[password_confirmation]": route.currentModel.password_confirmation
			},
      success: function(data) {
        Stoarybook.AuthController.set('currentUser', data.user);
        Stoarybook.AuthController.set('currentUserTest', {id: 1, name: 'matttest'});
        route.transitionTo('about');
			},
      error: function(jqXHR, textStatus, errorThrown) {
        route.controllerFor('registration').set("errorMsg", "That email/password combo didn't work.  Please try again");
			}
		});
	},
  logout: function() {
    console.log("Logging out...");
    $.ajax({
      url: Stoarybook.urls.logout,
      type: "DELETE",
      dataType: "json",
      success: function(data, textStatus, jqXHR) {
        $('meta[name="csrf-token"]').attr('content', data['csrf-token']);
        $('meta[name="csrf-param"]').attr('content', data['csrf-param']);
        console.log("Logged out on server");
        this.set('currentUser', null);
        this.transitionToRoute("about");
			},
      error: function(jqXHR, textStatus, errorThrown) {
        alert("Error logging out: #{errorThrown}");
			}
		});
	}
});

Stoarybook.NavbarController = Ember.ObjectController.extend({
  needs: ['auth'],
  isAuthenticated: function() {
	  return Ember.computed.alias("controllers.auth.isAuthenticated");
	},
  actions: {
    logout: function() {
      console.log("NavbarController handling logout event...")
      this.get("controllers.auth").logout();
		}
	}
});

Stoarybook.WelcomeMsgController = Ember.ObjectController.extend({
  needs: ['auth'],
  isAuthenticated: function() {
		return Ember.computed.alias("controllers.auth.isAuthenticated");
	},
  user: function() { 
		return Ember.computed.alias("controllers.auth.currentUser");
	},
  hiName: function() {
		return Ember.computed("user.email");
	}
});


