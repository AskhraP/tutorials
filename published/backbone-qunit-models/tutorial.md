## Source Code ##

* [Github Repo](https://github.com/KevinTCoughlin/tutorials/tree/master/published/backbone-qunit-models)

## Useful Links ##

* [QUnit: JavaScript Unit Testing Framework](http://qunitjs.com/)
* [QUnit API Documentation](http://github.com/jquery/api.qunitjs.com)
* [QUnit Github Repository](http://github.com/jquery/qunit)
* [Backbone.js Documentation](http://backbonejs.org)

## Overview ##

QUnit is a JavaScript Unit Testing Framework originally developed by John Resig that is now maintained by the jQuery team. It is a powerful JavaScript testing library and an alternative to other testing frameworks such as [Jasmine](http://pivotal.github.io/jasmine/) and [Mocha](http://visionmedia.github.io/mocha/). QUnit is often recommended as the first unit testing library to pickup for JavaScript due to its less steep learning curve yet extendability. I'm not able to comment on that statement since QUnit is the only JavaScript testing framework I have experience with so far. However, I hope to revisit the recommendation once I am able to evaluate the other offerings.

# Getting Started

To get started, let's create the appropriate directory structure for our Backbone app. The application will consist of our app's script file in a separate directory from our tests directory that contains the necessary files QUnit requires. Of course all of the app files can be in one folder, I am dividing them as a recommendation for when you are implementing tests in a more complex application.

My app's directory structure is as follows:

* app/
** /src
*** /app.js
** /tests
*** /js
**** /tests.js
*** /index.html

## Create Your Backbone.js Model ##
This tutorial is going to focus on testing your app's Backbone models. Before we write our unit tests, we need some Backbone model code. I'm going to create a model representing an address book contact with some default attributes. My app.js code in the app/src directory is as follows:

    // Address Book Contact Model
    var Contact = Backbone.Model.extend({
     
        // Default Attribute Values
        defaults : {
            name      : "John Smith",
            email     : "example@domain.com",
            telephone : "555-555-5555"
        }
    });


Here you can see that we extended the base Backbone model naming it "Contact" and giving it three default values for its three attributes. Now that we have our model code, we can prepare our QUnit resources for unit tests.

## Prepare QUnit Resources ##

Setting up QUnit is ridiculously easy. First create an index.html file in the app/tests folder that will contain the HTML markup for QUnit to display tests and their results on. The required basic code for index.html is the following:
    
<div class="gist">https://gist.github.com/KevinTCoughlin/5573538</div>

Note that this code is nearly identical to that found on [QUnit](http://qunitjs.com/) except I have changed the source for the QUnit CSS and JavaScript to their CDN urls. When you are testing your code you'll probably want to move these files locally to avoid unnecessary network calls. Take note that I have also included the CDN Development versions of Underscore.js and Backbone.js. Both of which our app.js depends on as we are extending the Backbone Model object. I am using the development versions as it will provide more useful error messages if the tests don't pass since the code is not minified.

Also notice that I have included our app.js script file above the tests.js file we are going to create as our tests will use the code we defined in app.js (Backbone Model code). Once you have the QUnit index.html file created, we can move to writing our model unit tests.

## Writing Unit Tests for our Model ##

First, we need to create our tests.js file in the app/tests/js folder that will contain our unit tests. Inside the tests.js file, write the following code:

    module( "Contact Backbone Model Tests" );

Here we are creating a segment of tests that we will label as "Contact Backbone Model Tests". Now we will write our first test that will ensure that we can create an instance of our Model object and that its defaults are correct.

To do this we will write the following code:

    module( "Contact Backbone Model Tests" );
    test("Can be instantiated with correct default values", function() {
        // Number of Assertions we Expect
        expect( 3 );

        // Instantiate Local Contact Backbone Model Object
        var contact = new Contact();

        // Default Attribute Value Assertions
        equal( contact.get("name"), "John Smith" );
        equal( contact.get("email"), "example@domain.com" );
        equal( contact.get("telephone"), "555-555-5555" );
    });

In this code block we are first declaring using the expect() QUnit call that QUnit should expect three assertions to be run in this test. There are 3 equals assertion calls defined in this test that test our three default values for our Contact model. We then create a local variable from the Contact Backbone Model and name it "contact".

Lastly, we write three assertions that get each attribute key and check its value against the value we have provided. If they are equal then it means are object is created and the defaults are what we expect and the assertion will pass. We can also define a String to be returned. The following code demonstrates this:

    module( "Contact Backbone Model Tests" );
    test("Can be instantiated with correct default values", function() {
        // Number of Assertions we Expect
        expect( 3 );

        // Instantiate Local Contact Backbone Model Object
        var contact = new Contact();

        // Default Attribute Value Assertions
        equal( contact.get("name"), "John Smith", "Default name should equal 'John Smith'" );
        equal( contact.get("email"), "example@domain.com", "Default email should equal 'example@domain.com'" );
        equal( contact.get("telephone"), "555-555-5555", "Default telephone should equal '555-555-5555'" );

    });

The third parameter in each equal assertion is the message that QUnit will print to the page. This is sometimes helpful in understanding your assertion without reviewing the test's code.

Now that we have our test code written we can run it for the first time.

## Running Your QUnit Tests ##

Running the QUnit test that we just defined is easy. Simply open the index.html file in the app/tests folder in your browser either locally or via a local HTTP server. Note that it might be useful to have your Browser's developers console open when viewing your test results.

Once you open your index.html file you should see that the three tests we defined earlier did pass successfully. You can click on the test to expand the assertion results. The result should look like the following image:


![First QUnit Test Results](http://media.tumblr.com/4a371f56646efb6a0d1b289270c6a43d/tumblr_inline_mmrs6di6ju1qz4rgp.png)

Now let's edit one of our assertions in our tests.js to see what a failure would look like. I have changed my tests.js to the following:

    module( "Contact Backbone Model Tests" );
    test("Can be instantiated with correct default values", function() {
        // Number of Assertions we Expect
        expect( 3 );

        // Instantiate Local Contact Backbone Model Object
        var contact = new Contact();

        // Default Attribute Value Assertions
        equal( contact.get("name"), "Wrong Name", "Default Name Correct!" );      // Expected Name String has been changed to be incorrect
        equal( contact.get("email"), "example@domain.com", "Default Email Correct!" );
        equal( contact.get("telephone"), "555-555-5555", "Default Telephone Correct!" );
    });

Now run the QUnit test again by reloading the page or clicking the "rerun" link next to the test. You should be presented with one fail and the page should look like the following image:

![Test Results with Error](http://media.tumblr.com/666c5baa27f41e13edf7701c7dc0f4f9/tumblr_inline_mmrs7wLtbZ1qz4rgp.png)

# Testing Our Model One Step Further

Now that we have more of an understanding of QUnit as it relates to testing our Backbone.js code. Let's add another test for our Contact Model.

In this test I am going to change the values for the model's attributes and test that the changes did occur and return the correct results. I have changed my tests.js code to the following:

    module( "Contact Backbone Model Tests" );
    test("Can be instantiated with correct default values", function() {
        // Number of Assertions we Expect
        expect( 3 );

        // Instantiate Local Contact Backbone Model Object
        var contact = new Contact();

        // Default Attribute Value Assertions
        equal( contact.get("name"), "John Smith", "Default Name Correct!" );        // FIXED
        equal( contact.get("email"), "example@domain.com", "Default Email Correct!" );
        equal( contact.get("telephone"), "555-555-5555", "Default Telephone Correct!" );
    });
    test("Can be instantiated and attribute values changed", function() {
        // Number of Assertions expected
        expect( 3 );

        // Instantiate Local Contact Backbone Model Object with Attr. Values
        var contact = new Contact({ 
            name        : "Kevin Coughlin",
            email       : "me@kevintcoughlin.com",
            telephone   : "222-222-2222"
        });

        // Changed Attribute Value Assertions
        equal( contact.get("name"), "Kevin Coughlin", "Name Correct!" );
        equal( contact.get("email"), "me@kevintcoughlin.com", "Email Correct!" );
        equal( contact.get("telephone"), "222-222-2222", "Telephone Correct!" );
    });

In the new test, I am creating an object extended from our Contact Backbone Model object. However, I am passing the attribute values I wish for the object to have when it is created. I then have three assertions to test whether the changes were made as it should return the correct Strings that I expect. IMPORTANT: I corrected the test code that I made incorrect earlier so that everything would pass successfully.

Once you have added this code to your tests.js rerun the QUnit tests by reloading the page. You should be presented with the following image:

![Second QUnit Tests](http://media.tumblr.com/2b9a31ba8f230e37e003a9da160be0b9/tumblr_inline_mmrs8vR6oW1qz4rgp.png)

## Conclusion ##

I realize this tutorial barely scratches the surface the power of QUnit and how to properly and extensively test your Backbone Models. However, I hope that it serves as a good introduction to those that are unexperienced with Unit Testing their Backbone code and are looking to get their hands wet. I encourage you to take a look at [QUnit's API Documentation](http://github.com/jquery/api.qunitjs.com) to further expand your tests. Also, take a look at the "Further Reading" links below for more tutorials on QUnit &amp; Backbone testing. 

In my next tutorial I hope to cover Model testing further and move to testing your Collections. Thanks for reading!

## Further Reading ##

* [Addyosmani's Intro to Backbone.js, QUnit, and SinonJS](http://addyosmani.com/blog/unit-testing-backbone-js-apps-with-qunit-and-sinonjs/)
* [Gist Overview of Backbone.js, QUnit, and SinonJS](https://gist.github.com/peol/1915247)
* [StackOverflow answer for Backbone.js, QUnit, and Require.js](http://stackoverflow.com/questions/13991065/backbone-and-require-how-to-add-qunit)