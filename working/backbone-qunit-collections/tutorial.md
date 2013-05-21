## Source Code ##

* [Github Repo](https://github.com/KevinTCoughlin/tutorials/tree/master/published/backbone-qunit-models)

## Useful Links ##

* [QUnit: JavaScript Unit Testing Framework](http://qunitjs.com/)
* [QUnit API Documentation](http://github.com/jquery/api.qunitjs.com)
* [QUnit Github Repository](http://github.com/jquery/qunit)
* [Backbone.js Documentation](http://backbonejs.org)

## Overview ##

QUnit is a JavaScript Unit Testing Framework originally developed by John Resig that is now maintained by the jQuery team. It is a powerful JavaScript testing library and an alternative to other testing frameworks such as [Jasmine](http://pivotal.github.io/jasmine/) and [Mocha](http://visionmedia.github.io/mocha/).

# Getting Started

In this tutorial we will begin unit testing our Backbone Collecitons using QUnit. We will be building off of the app we began to create in the Backbone Models QUnit testing tutorial. #TODO If you have not viewed the previous tutorial and do not feel comfortable jumping into unit testing Backbone collections you may revisit the tutorial at the following link.

The app's directory structure is as follows:

* app/
** /src
*** /app.js
** /tests
*** /js
**** /tests.js
*** /index.html

## Create Your Backbone.js Collection ##
We will begin by creating a collection of the Contact Model we defined in the previous tutorial. We will name our Collection, "ContactCollections" and the source will look contain the following:

    // Address Book Contact Collection
    var ContactsCollection = Backbone.Collection.extend({

        // Model for the Collection to contain
        model: Contact
        
    });


Here we have defined the Contacts Collection as an extension of the base Backbone Collection object that will contain the Contact model we defined in our earlier tutorial. That is all the code that we need to get started with our collection.

## Prepare QUnit Resources ##

We will use the same QUnit index.html file that we used in the previous tutorial. Again note that we are loading the library dependencies from their CDNs for the sake of this tutorial. Also, I am using the development versions of the libraries since they will provide more useful error messages if the tests fail.
    
<div class="gist">https://gist.github.com/KevinTCoughlin/5573538</div>

Once the QUnit index.html file is ready we can begin writing our tests for our new Collection.

## Writing Unit Tests for our Collection ##

We will append our collection test cases to the original test.js file. Note that you could create a separate script file and import it in the QUnit's index.html if you wish to separate the code. However, since the tests are not too numerous we will use the module function as our test seperator and maintain the tests in the same file. We begin by creating a new module of tests aptly named for our Collection tests.

    module( "ContactsCollection Backbone Collection Tests" );

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


## Further Reading ##

* [Addyosmani's Intro to Backbone.js, QUnit, and SinonJS](http://addyosmani.com/blog/unit-testing-backbone-js-apps-with-qunit-and-sinonjs/)
* [Gist Overview of Backbone.js, QUnit, and SinonJS](https://gist.github.com/peol/1915247)
* [StackOverflow answer for Backbone.js, QUnit, and Require.js](http://stackoverflow.com/questions/13991065/backbone-and-require-how-to-add-qunit)