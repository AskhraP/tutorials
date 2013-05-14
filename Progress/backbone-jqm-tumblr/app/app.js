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