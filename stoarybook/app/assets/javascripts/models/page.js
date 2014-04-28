// for more details see: http://emberjs.com/guides/models/defining-models/

Stoarybook.Page = DS.Model.extend({
	number: DS.attr('number'),
	text: DS.attr('string'),
	picture: DS.attr('string'),
	book: DS.belongsTo('book')
});

Stoarybook.Page.FIXTURES = [
	{
		id: 1,
		text: 'Lorem Ipsum 1',
		picture: '/somewhere.png',
		book: 1
	},
	{
		id: 2,
		text: 'Lorem Ipsum 2',
		picture: '/somewhere1.png',
		book: 1
	},
	{
		id: 3,
		text: 'Lorem Ipsum 3',
		picture: '/somewhere3.png',
		book: 1
	},
	{
		id: 4,
		text: 'Lorem Ipsum 1',
		picture: '/somewhere.png',
		book: 2
	},
	{
		id: 5,
		text: 'Lorem Ipsum 2',
		picture: '/somewhere1.png',
		book: 2
	},
	{
		id: 6,
		text: 'Lorem Ipsum 3',
		picture: '/somewhere3.png',
		book: 2
	},
	{
		id: 7,
		text: 'Lorem Ipsum 1',
		picture: '/somewhere.png',
		book: 3
	},
	{
		id: 8,
		text: 'Lorem Ipsum 2',
		picture: '/somewhere1.png',
		book: 3
	},
	{
		id: 9,
		text: 'Lorem Ipsum 3',
		picture: '/somewhere3.png',
		book: 3
	}
];

Stoarybook.Page.FIXTURES.forEach( function(item) {
	console.log(item);
});
