// for more details see: http://emberjs.com/guides/models/defining-models/

Stoarybook.BookPage = DS.Model.extend({
	number: DS.attr('number'),
	text: DS.attr('string'),
	picture: DS.attr('string')
});

Stoarybook.BookPage.FIXTURES = [
	{
		id: 1,
		text: 'Lorem Ipsum 1',
		picture: '/somewhere.png'
	},
	{
		id: 2,
		text: 'Lorem Ipsum 2',
		picture: '/somewhere1.png'
	},
	{
		id: 3,
		text: 'Lorem Ipsum 3',
		picture: '/somewhere3.png'
	}
];
