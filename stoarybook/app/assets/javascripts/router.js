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
Stoarybook.BooksIndexRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('book');
	}
});
Stoarybook.BooksNewRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('book');
		//return Ember.Object.create();
	}
});
