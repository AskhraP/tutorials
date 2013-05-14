var Movie = Backbone.Model.extend({
	defaults : {
		title : "Default Movie Title"
	}
});

var Movies = Backbone.Collection.extend({
	model : Movie
});

var ListItemView = Backbone.View.extend({
	tagName : "ul",

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html( this.model.get( "title" ) );
		return this;
	}
});

var ListView = Backbone.View.extend({
	tagName : "ul",

	renderListItem: function ( model ) {
		console.log("Item Render");

		this.listItem = new ListItemView({ model : model });
		this.$el.append( this.listItem.render().el );
	},

	initialize: function() {
		console.log("ListView Initialized");

		_.bindAll( this, "renderListItem" );
		this.collection.bind( "add" , this.renderListItem );
		this.render();
	},

	render: function() {
		this.$el.append( this.listView.render().el );
	}
});

var movie = new Movie();
var movies = new Movies();

var listView = new ListView({ collection : movies });

movies.add( movies );
