/**
 *  Nerdist Podcast Backbone App
 *  Author: Kevin Coughlin
 *
 */

var AppView = new Backbone.View.extend({

	el: "body",

	initialize: function() {
		console.debug("AppView Init");
	},

	render: function() {
		console.debug("AppView Render");
	}

});

var Episode = new Backbone.Model.extend({

	// Episode Defaults
	defaults: {
		title: "Episode Title",
		description: "Default Description",
		duration: "1:12:32",
		played: false
	}

});

var Episodes = new Backbone.Collection.extend({

	model: Episode,

	url: ""

});

var EpisodeView = new Backbone.View.extend({

	li: "li",

	initialize: function() {
		console.debug("EpisodeView Init");
	},

	render: function() {
		console.debug("EpisodeView Render");
	}

});

var EpisodeListView = new Backbone.View.extend({

	li: "ul",

	initialize: function() {
		console.debug("EpisodeListView Init");
	},

	render: function() {
		console.debug("EpisodeListView Render");
	}

});

var AppRouter = new Backbone.Router.extend({

});