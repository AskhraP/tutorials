## Source Code ##

* [Github Repo](https://github.com/KevinTCoughlin/tutorials/tree/master/published/backbone-qunit-models)

## Useful Links ##

* [QUnit: JavaScript Unit Testing Framework](http://qunitjs.com/)
* [QUnit API Documentation](http://github.com/jquery/api.qunitjs.com)
* [QUnit Github Repository](http://github.com/jquery/qunit)
* [Backbone.js Documentation](http://backbonejs.org)

## Overview ##

QUnit is a JavaScript Unit Testing Framework originally developed by John Resig that is now maintained by the jQuery team. It is a powerful JavaScript testing library and an alternative to other testing frameworks such as [Jasmine](http://pivotal.github.io/jasmine/) and [Mocha](http://visionmedia.github.io/mocha/).

## Getting Started ##

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

Before we begin writing test cases for our Contacts Collection, we will utilize QUnit's [module setup() and teardown()](http://api.qunitjs.com/module/) functions. The setup() function will execute before each test, conversely the teardown() function will run after each test. We will utilize these functions to instantiate, populate, and remove our Collection for each test case. This will ensure consistancy as our Collection will be created identically for each test and all objects used removed before another test is run.

Before we code our setup() and teardown() functions, we must first modify our module function call to accept the setup() and teardown() callbacks as its second parameter.

    // Contacts Collection Tests
    module( "ContactsCollection Backbone Collection Tests", {
        setup: function() {
            
        },
        teardown: function() {

        }
    });

Now that our module has the appropriate callbacks, let's begin by creating our Contacts Collection in our module's setup() function in tests.js.

    // Contacts Collection Tests
    module( "ContactsCollection Backbone Collection Tests", {
        // Run before each test
        setup: function() {
            // Instantiate and Populate Contacts Collection
            this.contacts = new ContactsCollection;
            this.contacts.add(new Contact());
            this.contacts.add(new Contact());
        },
        // Run after each test
        teardown: function() {

        }
    });

Here we have instantiated our Contacts Collection that will use our model Contact as its model and assigned it to the scope of the test that is run. We then populate the collection with two new Contact models that use the default attribute values as no parameters were passed at creation time.

Before we write our test case, let's also write our teardown() code.

    // Contacts Collection Tests
    module( "ContactsCollection Backbone Collection Tests", {
        // Run before each test
        setup: function() {
            // Instantiate and Populate Contacts Collection
            this.contacts = new ContactsCollection;
            this.contacts.add(new Contact());
            this.contacts.add(new Contact());
        },
        // Run after each test
        teardown: function() {
            // Clear Window of errors after test
            window.errors = null;
        }
    });

Here we are simply clearing the Browser's windows of any errors after each test is run.

Now that our setup() and teardown() functions have been created, we can write our first unit test for our new Collection.

## Running Your QUnit Tests ##

## Testing Our Collection One Step Further ##

## Conclusion ##

## Further Reading ##

* [Addyosmani's Intro to Backbone.js, QUnit, and SinonJS](http://addyosmani.com/blog/unit-testing-backbone-js-apps-with-qunit-and-sinonjs/)
* [Gist Overview of Backbone.js, QUnit, and SinonJS](https://gist.github.com/peol/1915247)
* [StackOverflow answer for Backbone.js, QUnit, and Require.js](http://stackoverflow.com/questions/13991065/backbone-and-require-how-to-add-qunit)