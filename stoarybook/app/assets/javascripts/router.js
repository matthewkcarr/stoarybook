// For more information see: http://emberjs.com/guides/routing/

Stoarybook.Router.map(function() {
  // this.resource('posts');
	this.route('about', {path:  '/'} );
	this.resource('book', { path: '/book/:book_id' }, function() {
		this.route('edit');
		this.resource('pages', { path: '/pages'}, function() {
			this.route('new');
		});
		this.resource('page', { path: '/page/:page_id'}, function() {
			this.route('edit');
		});
	});
	this.resource('books', { path: '/books'}, function() {
		this.route('new');
	});
});

Stoarybook.BooksRoute = Ember.Route.extend({
	model: function() {
		return tnis.store.find('book');
	}
});
Stoarybook.BooksNewRoute = Ember.Route.extend({
	model: function() {
		return tnis.modelFor('books');
	}
});
