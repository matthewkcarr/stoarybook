// For more information see: http://emberjs.com/guides/routing/

Stoarybook.Router.map(function() {
  // this.resource('posts');
	this.route('about', {path:  '/'} );
	this.resource('books', { path: '/books'}, function() {
		this.route('new');
	});
	this.resource('book', { path: '/books/:book_id' }, function() {
		this.route('edit');
		this.resource('pages', { path: '/pages'}, function() {
			this.route('new');
		});
		this.resource('page', { path: '/pages/:page_id'}, function() {
			this.route('edit');
		});
	});
});

Stoarybook.BooksRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('book');
	}
});

Stoarybook.PagesRoute.extend({
	setupController: function(controller, model) {
    this._super(controller, model);
		controller.set('book', this.modelFor('book'));
	},
	model: function() {
		var book = this.controllerFor('book');
		return book.get('pages');
	}
});

Stoarybook.BooksIndexRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('books');
	}
});

Stoarybook.PagesIndexRoute.extend({
	model: function() {
		return this.modelFor('page');
	}
});

Stoarybook.BookRoute.extend({
  model: function(params) {
    return this.store.find('book', params.book_id);
  }
  /*model: function(params) {
    // the server returns `{ slug: 'foo-post' }`
    return jQuery.getJSON("/posts/" + params.post_slug);
  },

  serialize: function(model) {
    // this will make the URL `/posts/foo-post`
    return { post_slug: model.get('slug') };
  }*/
});

Stoarybook.PageRoute.extend({
  model: function(params) {
    return this.store.find('page', params.page_id);
  }
});

Stoarybook.BooksNewRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('book');
		//return Ember.Object.create();
	}
});
