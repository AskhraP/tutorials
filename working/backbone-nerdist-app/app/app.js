/**
 *  Nerdist Podcast Backbone App
 *  Author: Kevin Coughlin
 *
 */

// Top level UI Component
var AppView = Backbone.View.extend({

	el: "body",

	initialize: function() {
		console.debug("AppView Init");

		var episodes = new Episodes().fetch();

	},

	render: function() {
		console.debug("AppView Render");
	}

});

// Nerdist Podcast Episode Data Model
var Episode = Backbone.Model.extend({

	// Episode Defaults
	defaults: {
		title: "Episode Title",
		description: "Default Description",
		duration: "1:12:32",
		played: false
	}

});

// Collection of Episodes
var Episodes = Backbone.Collection.extend({

	model: Episode,

	url: "http://nerdist.libsyn.com/rss",

	// Extend Parse Function to Parse XML
    parse: function (data) {
        var parsed = [];

        $( data ).find( 'item' ).each( function ( item ) {

            var episodeTitle = $(this).find( "title" ).text();
            console.debug(episodeTitle);

            parsed.push({
            	title: bookTitle
            });

        });

        return parsed;
    },

    // Extend Fetch function to request XML
    fetch: function (options) {
        options = options || {};
        options.dataType = "xml";
        Backbone.Collection.prototype.fetch.call(this, options);
    }

});

// Individual Episode Model View
var EpisodeView = Backbone.View.extend({

	li: "li",

	initialize: function() {
		console.debug("EpisodeView Init");
	},

	render: function() {
		console.debug("EpisodeView Render");
	}

});

// Collection of Episodes View
var EpisodeListView = Backbone.View.extend({

	li: "ul",

	initialize: function() {
		console.debug("EpisodeListView Init");
	},

	render: function() {
		console.debug("EpisodeListView Render");
	}

});

// Application's Router
var AppRouter = Backbone.Router.extend({

	routes: {
		//"search/:query":        "search",
		//"search/:query/p:page": "search"
	},

	// Search Podcast Episodes Handler
	search: function(query, page) {

	}

});