module( "Contact Backbone Model Tests" );
test("Can be instantiated with correct default values", function() {
    // Number of Assertions we Expect
    expect( 3 );

    // Instantiate Local Contact Backbone Model Object
    var contact = new Contact();

    // Default Attribute Value Assertions
    equal( contact.get("name"), "John Smith", "Default Name Correct!" );       // Expected Name String has been changed to be incorrect
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