/**
 *  Nerdist Podcast Backbone App
 *  Author: Kevin Coughlin
 *
 */

// Top level UI Component
var AppView = new Backbone.View.extend({

	el: "body",

	initialize: function() {
		console.debug("AppView Init");
	},

	render: function() {
		console.debug("AppView Render");
	}

});

// Nerdist Podcast Episode Data Model
var Episode = new Backbone.Model.extend({

	// Episode Defaults
	defaults: {
		title: "Episode Title",
		description: "Default Description",
		duration: "1:12:32",
		played: false
	}

});

// Collection of Episodes
var Episodes = new Backbone.Collection.extend({

	model: Episode,

	url: ""

});

// Individual Episode Model View
var EpisodeView = new Backbone.View.extend({

	li: "li",

	initialize: function() {
		console.debug("EpisodeView Init");
	},

	render: function() {
		console.debug("EpisodeView Render");
	}

});

// Collection of Episodes View
var EpisodeListView = new Backbone.View.extend({

	li: "ul",

	initialize: function() {
		console.debug("EpisodeListView Init");
	},

	render: function() {
		console.debug("EpisodeListView Render");
	}

});

// Application's Router
var AppRouter = new Backbone.Router.extend({

	routes: {
		//"search/:query":        "search",
		//"search/:query/p:page": "search"
	},

	// Search Podcast Episodes Handler
	search: function(query, page) {

	}
	
});