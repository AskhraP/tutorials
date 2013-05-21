// Address Book Contact Model
var Contact = Backbone.Model.extend({
 
  // Default Attribute Values
  defaults : {
    name      : "John Smith",
    email     : "example@domain.com",
    telephone : "555-555-5555"
  }

});

// Address Book Contact Collection
var ContactsCollection = Backbone.Collection.extend({

	// Model for the Collection to contain
	model: Contact
	
});