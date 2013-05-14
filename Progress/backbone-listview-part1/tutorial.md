# Beginning Backbone.js - Creating a ListView

# Introduction

So you've ventured into the Backbone.js world and you're building you're very first app. What's the first thing you'll most likely need? A list view of course! Whether you haven't found the Backbone listview tutorial that satisfies you, or you're just looking for another way to do it... you've come to the right place. In this brief tutorial, I'm going to create a very simple Backbone app that fetches models from a local JSON file, populates a collection of the models, and then is used to render a listview consisting of listitemviews. Ready? No? Yes? Doesn't matter... let's hop to it!

# Create your HTML file

First, we'll create our basic HTML index file by including the proper semantic tags and dependencies for Backbone.js (Underscore and Backbone) and we'll also use jQuery for some DOM manipulation with the listview / listitemviews.

Your HTML file should look like the following:

```html
<!DOCTYPE html>
<head>
	<title>Backbone ListView</title>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="description" content="Example of ListViews in Backbone.js">
	<meta name="viewport" content="width=device-width">

	<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
	<script src="http://underscorejs.org/underscore.js"></script>
	<script src="http://backbonejs.org/backbone.js"></script>
	<script src="app.js"></script>
</head>
<body>

</body>
</html>
```

Here we have included our script dependencies and provided some meta data that is always helpful to include as a best practice. Next we'll create the "app.js" file we have included but not yet made that will contain our Backbone.js app code.

Create a file named "app.js" in the same directory as the above "index.html" file.

Inside this app.js file, we will begin creating our Backbone app. First we will need a model to represent our data. In this example I am going to populate a list with movie titles. Therefore, our model will be that of a Movie. 

First I create the model in the app by extending the base Backbone.Model. Your app.js file should look like the following:

```js
var Movie = Backbone.Model.extend({

});
```

Next, I'm going to provide a default "title" attribute for my Movie model.

```js
var Movie = Backbone.Model.extend({
	defaults : {
		title : "Default Movie Title"
	}
});
```

Now that we have our data model representing a movie, we are going to need a Backbone object to hold all of the movie models that we want to populate our listview with. Therefore, we need to create a Backbone Collection of Movies. My app.js file now looks like the following:

```js
var Movie = Backbone.Model.extend({
	defaults : {
		title : "Default Movie Title"
	}
});

var Movies = Backbone.Collection.extend({
	model : Movie
});
```

Here I have extended the Backbone.Collection object and assigned the Movie Model that I previously defined as its model. This means that the Collection will expect to hold Movie Models.

To test that we have created the two objects correctly we can include the following code in app.js:

```js
var Movie = Backbone.Model.extend({
	defaults : {
		title : "Default Movie Title"
	}
});

var Movies = Backbone.Collection.extend({
	model : Movie
});

// Create a new Movie Model Object
var movie = new Movie();

// Create a new Movies Collection Object
var movies = new Movies();

// Add the movie Model to the movies Collection
movies.add( movie );

// Print the Collection Object as a JSON object to the JavaScript Console to prove it is correct
console.log( JSON.stringify( movies ) );
```

The console.log line will convert the collection into a JSON string that will show the movie model with the default title attribute inside the collections array.

Open index.html in your browser and open its developer console:

* Chrome: View -> Developer -> JavaScript Console

Refresh the index.html page since you opened the console after the page loaded and you should see the following if you did everything correctly:

```js
[{"title":"Default Movie Title"}] 
```

Now that we have correctly created our model and collection, we need to create the view (FINALLY! The whole reason you're here!).

# Creating the ListView

Our ListView will be a Backbone view that uses the HTML unordered list tag 

```html
<ul></ul>
```

We'll begin by removing the testing code we used before and adding the following code below the previous code we wrote in "app.js". Your "app.js" should look like the following:

```js
var Movie = Backbone.Model.extend({
	defaults : {
		title : "Default Movie Title"
	}
});

var Movies = Backbone.Collection.extend({
	model : Movie
});

var ListView = Backbone.View.extend({
	tagName : "ul",

	initialize: function() {
		this.render();
	},

	render: function() {
		return this;
	}
});
```

Here I have created the base View code by extending the Backbone.View object to create my ListView object. Inside of the object I have defined a tag for Backbone to create the view with as "ul" instead of the default "div". My initialize function which is run when the object is first created simply calls the render function currently. The render function then returns the object to the calling function.

Our ListView's purpose is to take a Backbone Collection and iterate through its models to create ListItemViews and append them to the ListView. Therefore we will add the following code to handle the collection in the initialize function of ListView.

```js
var Movie = Backbone.Model.extend({
	defaults : {
		title : "Default Movie Title"
	}
});

var Movies = Backbone.Collection.extend({
	model : Movie
});

var ListView = Backbone.View.extend({
	tagName : "ul",

	renderListItem: function ( model ) {
		
	},

	initialize: function() {
		_.bindAll( this, "renderListItem" );
		this.collection.bind( "add" , this.renderListItem );
		this.render();
	},

	render: function() {
		return this;
	}
});
```

Now I have added two important lines to the initialize function. The first line is an Underscore.js call that binds the object "this" to the functions I defined, currently only "renderListItem". This is done to ensure that when the "this" object is used in those functions it represents the ListView object and our code accomplishes what we need it to.

I also added the renderListItem function that will take each model from our collection and render a child view of the ListView called the ListItemView. Before we can render these items, we need to first create the ListItemView.

```js
var Movie = Backbone.Model.extend({
	defaults : {
		title : "Default Movie Title"
	}
});

var Movies = Backbone.Collection.extend({
	model : Movie
});

var ListItemView = Backbone.View.extend({
	tagName : "li",

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

	},

	initialize: function() {
		_.bindAll( this, "renderListItem" );
		this.collection.bind( "add" , this.renderListItem );
		this.render();
	},

	render: function() {
		return this;
	}
});
```

Similar to when we created the ListView object, I have created a ListItemView object that extends Backbone's View object and defines the tag as "li" instead of the default "div". In the initialize function I simply call the object's render function that will take the model object Backbone defaulty passes to it and retrieve the title attribute from it. It will then set the ListItemView's HTML as that String. We don't have to concern ourselves with the "li" tags because Backbone will generate them since we defined the tagName attribute earlier. However, if you wanted the "li" to be a link you could surround the String with "a" tags and your result would be:

```html
<li><a href="#">Default Movie Title</a></li>
```

However for the purpose of this tutorial we will not use links.

Now that we have defined the ListItemView, we can revisit the ListView object and finish the renderListItem function.

```js
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
		this.listItem = new ListItemView({ model : model });
		this.$el.append( this.listItem.render().el );
	},

	initialize: function() {
		_.bindAll( this, "renderListItem" );
		this.collection.bind( "add" , this.renderListItem );
		this.render();
	},

	render: function() {
		return this;
	}
});
```

Now, I have completed the renderListItem function by created a new listItem object attached to its parent ListView object and passed it the Movie model that is passed by Backbone when we add models to the collection as defined by the following line:

```js
this.collection.bind( "add" , this.renderListItem );
```

That line tells BAckbone to bind all "add" events it triggers by adding models to the collection to the renderListItem function, so therefore the model is passed as a parameter and can be manipulated by the function.








