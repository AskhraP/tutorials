/**
 *  Nerdist Podcast Backbone App
 *  Author: Kevin Coughlin
 *
 */

// Nerdist Podcast Episode Data Model
var Episode = Backbone.Model.extend({

	// Episode Defaults
	defaults: {
		title: "Episode Title",
		pubDate: "Mon, 27 May 2013 08:02:09 +0000",
		description: "Default Description",
		thumbnail: "http://assets.libsyn.com/item/2337782",
		duration: "00:00",
		url: "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_361_-_Seth_Rogen_and_Evan_Goldberg.mp3",
		played: false
	}

});

// Collection of Episodes
var Episodes = Backbone.Collection.extend({

	model: Episode,

	url: "feed.xml",

	// Extend Parse Function to Parse XML
    parse: function (data) {
    	// Array to hold Episode objects
        var parsed = [];

        $( data ).find( 'item' ).each( function ( item ) {
    		// Get Episode Attributes from XML
    		this.episodeTitle 	= $(this).find( "title" ).text();
    		this.pubDate 		= $(this).find( "pubDate" ).text();
    		this.description 	= $(this).find( "description" ).text().replace(/<(?:.|\n)*?>/gm, '');
			this.url 			= $(this).find( "enclosure" ).attr("url");
    		//this.thumbnail	= $(this).find( "media\\:thumbnail" ).attr("url");
    		//this.duration		= $(this).find( name="itunes\\:duration" );

	        parsed.push({
				title 			: 	this.episodeTitle,
				pubDate			: 	this.pubDate,
				Description 	: 	this.description,
				url 			: 	this.url
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
	template: "#tpl-episode-view",

	initialize: function() {
		this.template = _.template( $(this.template).html() );
	},

	render: function() {
		return this;
	}

});

// Collection of Episodes View
var EpisodeListView = Backbone.View.extend({

	li: "ul",

	// Add Episode to List
	addEpisode: function( model ){
		this.episodeView = new EpisodeView( model );
		this.$el.append( this.episodeView.render().el );
	},

	initialize: function() {
		console.debug("EpisodeListView Init");

		_.bindAll( this, 'addEpisode' );
		this.collection.bind( "add" , this.addEpisode );
		this.collection.fetch();
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

// Top level UI Component
var AppView = Backbone.View.extend({

	el: "#app",

	attributes: {
		"id": "appview"
	},

	events: {
		"click" : "clicked"
	},

	clicked: function(){
		console.log("clicked");
	},

	initialize: function() {
		console.debug("AppView Init");
		this.episodeListView = new EpisodeListView({ collection: new Episodes() })
		this.render();
	},

	render: function() {
		console.debug("AppView Render");
		this.$el.append( this.episodeListView );
		return this;
	}

});