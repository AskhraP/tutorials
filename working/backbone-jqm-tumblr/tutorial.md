# Backbone.js & jQuery Mobile Tutorial using Tumblr API

# Dependencies (in order)
* [underscore.js](http://underscorejs.org)
* [jQuery](http://jquery.com)
* [backbone.js](http://backbonejs.org/backbone.js)
* [jQuery Mobile](http://jquerymobile.com)

# Helpful Links
* [underscore.js](http://underscorejs.org)
* [jQuery](http://jquery.com)
* [backbone.js](http://backbonejs.org)
* [jQuery Mobile](http://jquerymobile.com)
* [Tumblr's API Documentation](http://www.tumblr.com/developers)

# Introduction

# Getting Started

Folder Structure

app
* index.html
* vendor

# Backbone

We're going to start with giving our app structure using Backbone.js and then tie in the jQuery mobile UI / UX later.

We'll use the development versions of both as it is good practice for when errors show you can more easily figure out where the problem is (instead of it being minified).

```html
<!DOCTYPE html>
<head>
	<title>TumbleBack</title>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="description" content="BackboneJS and jQuery Mobile App that uses the Tumblr API">
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

Next we'll create a file named app.js that will include our Backbone.js app code. Create that file in the same directory as index.html. Then populate it with the following:

```js
var Post = Backbone.Model.extend({
	
});

console.log(Post);

```

Here we are extending the base Backbone Model object. We can check that we did this correctly by including the console.log(Post) which will print the Post object to your browser's console. Open your browser and bring the JavaScript Console up 

* Chrome: shift-command-j
* Firefox:

The object should print to your JavaScript console as such: [object Object]

# Registering with the Tumblr API

To use Tumblr's API to populate app with awesome Tumblish data, we are going to need to register to receive an API key. To do this you'll need to complete the following steps:

Go to [Tumblr's API site](http://www.tumblr.com/docs/en/api/v2) and click "register an application".

Tumblr will then ask you to login with your Tumblr account if you are not already logged in. If you do not have a Tumblr account, you can [register](https://www.tumblr.com/register) for free.

Once you have logged in, you will be presented with your Applications page.

For this application we'll need to register a new application, so press the "+Register Application" button.

You'll be presented with the following fields:

Application name: 
Application website: 
App Store URL: 
Google Play Store URL: 
Application description:
400 characters max
Administrative contact email:
This won't be made public
Default callback URL: Icon:
Must be a 128x128 PNG.

Give your application a unique name, I named mine "coughlin-backbone" and press register. The rest of the details can be submitted later. (NOTE: REVIEW THIS SECTION)

Once you have successfully registered, the nice folks at Tumblr will give you an "OAuth Consumer Key" and a "secret key" for your app. (Keep your secret key secret... hence the name).

Save your OAuth Key and Secret Key somewhere as you'll need it later as we develop the app. You can take a bit to browse [Tumblr's API Documentation](http://www.tumblr.com/developers) and when you're ready to get back to BackboneJS model and collection goodness, proceed to the next chapter.

# Backbone.js Model - [documentation](http://backbonejs.org/#Model)

A model in Backbone is a representation of a data object to be used in your application. Let's revisit our Blog model created earlier.

Backbone.js allows us to provide defaults for the model so that if we do not pass new attributes when creating the model, it will by default have the attributes we defined. Let's give our Blog some default attributes on par with the response we'll get for the Blog object from Tumblr's API.

```js
var Blog = Backbone.Model.extend({
    defaults: {
        title: 	'Default Blog Title',
        posts: 	0,
        name: 	'Default Blog Name',
        description: 'Default Blog Description',
        ask: false,
        ask_anon: false,
    },
});

var blog = new Blog();

console.log(JSON.stringify(blog))
```

Notice I created a new variable blog which instantiates itself as a Blog object. I then use the JavaScript JSON method to take the blog object and turn it into a JSON string so that we can see the default attributes are present in the object. You should get the following output:

```js
"{"title":"Default Blog Title","posts":0,"name":"Default Blog Name","description":"Default Blog Description","ask":false,"ask_anon":false}"
```




