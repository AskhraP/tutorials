# Getting Started with Square's Picasso Android Library

# Useful Links

* [@SquareEng](https://twitter.com/SquareEng)
* [Picasso Homepage](http://square.github.io/picasso/)
* [Picasso on Github](https://github.com/square/picasso)

# What is Picasso?

The wonderful and extremely productive engineers at Square, [@SquareEng](https://twitter.com/SquareEng) wrapped up their seven days of Open Source by releasing an image downloading and caching library for Android aptly named Picasso. Picasso enables your Android application to easily download images, cache images, and transform images. It is an extremely powerful library that will improve the quality of your Android application by reducing network calls, increasing response time, and enhancing your code base through its clean API.

# Our Sample Application

The Sample Application I am going to introduce the Picasso library into consists of one very simple ListView Activity. The Activity uses an AsyncTask to HTTP GET Twitter's public tweets using their API. I am going to extend the ListView to use a custom ArrayAdapter for our Tweets data that will be used to populate our individual Tweet Views.

The Tweet Views will consist of an Image on the left-hand side of the list item row and the actual Tweet text will fill the remaining space to the right of the image. Picasso will be used to download and cache the Twitter User images that is returned with each Tweet object from Twitter's API.

