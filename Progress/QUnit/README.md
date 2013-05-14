# Introduction to JavaScript Unit Testing with QUnit

# Necessary Files

* [CDN-Hosted CSS](http://code.jquery.com/qunit/qunit-1.11.0.css)
* [CDN-Hosted JS](http://code.jquery.com/qunit/qunit-1.11.0.js)

# A Very Brief History

QUnit was originally developed by [John Resig](http://ejohn.org/) [@jeresig](https://twitter.com/jeresig) in 2008 for use with jQuery. It later became a standalone testing library in 2009.

# Overview

Taken from [QUnit.com](http://qunitjs.com/):

> What is QUnit?
> QUnit is a powerful, easy-to-use JavaScript unit testing framework. It's used by the jQuery, jQuery UI and jQuery Mobile projects and is capable of testing any generic JavaScript code, including itself!

QUnit is 

# Getting Started

## index.html

Note that the resources are CDN loaded instead of local for this demo.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>QUnit Example</title>
  <link rel="stylesheet" href="http://code.jquery.com/qunit/qunit-1.11.0.css">
</head>
<body>
  <div id="qunit"></div>
  <div id="qunit-fixture"></div>
  <script src="/resources/qunit.js"></script>
  <script src="http://code.jquery.com/qunit/qunit-1.11.0.js"></script>
</body>
</html>
```

Now we will create a JavaScript file named "tests.js" that will contain our QUnit test code.



