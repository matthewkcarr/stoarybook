// for more details see: http://emberjs.com/guides/controllers/

Stoarybook.PagesController = Ember.ArrayController.extend({
	needs: 'book',
	contentBinding: 'controllers.book.pages'
});
