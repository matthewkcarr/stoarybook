// for more details see: http://emberjs.com/guides/models/defining-models/

Stoarybook.Book = DS.Model.extend({
	title: DS.attr('string'),
	author: DS.attr('string'),
	numberOfPages: DS.attr('number')
});

Stoarybook.Book.FIXTURES = [
	{
		id: 1,
		title: 'Art of software',
		author: 'Matthew Carr',
		numberOfPages: 3
	},
	{
		id: 2,
		title: 'Seductive guitar playing',
		author: 'Matthew Carr',
		numberOfPages: 10
	},
	{
		id: 3,
		title: 'Playing Chess',
		author: 'Matthew Carr',
		numberOfPages: 15
	}
];
Stoarybook.Book.FIXTURES.forEach( function(item) {
	console.log(item);
});
