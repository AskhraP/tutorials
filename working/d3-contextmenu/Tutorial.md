## Getting Started with D3.js - Circles

## Recommended Links

 * [D3.js Homepage](http://d3js.org/)
 * [D3.js Github Repo](https://github.com/mbostock/d3)
 * [D3.js creator Mike Bostock's Twitter](https://twitter.com/mbostock)
 * [SVG Mozilla Developer Network Documentation](https://developer.mozilla.org/en-US/docs/Web/SVG)

## Necessary Files

 * [D3.js Library (Hosted)](http://d3js.org/d3.v3.min.js)

## What is D3.js?

Created by [@mbostock](https://twitter.com/mbostock)

## Introduction

	In this D3.js introduction we are going to append 200 circles of random size (radius) and position to a dynamically created SVG (Scalable Vector Graphics) HTML element. 

## Getting Started
	
	Let's begin by creating our basic HTML5 document and importing Mike Bostock's D3.js library hosted on the project's site. It's important to note that when running D3.js in production it is often better to link to a popular CDN repository or to store the library local to the application / site. Our index.html document should contain the following code:

		<!DOCTYPE html>
		<html>
		<head>
		  <meta charset="utf-8">
		  <title>D3.js Context Menu Tutorial</title>
		  <script type="text/javascript" src="http://d3js.org/d3.v3.min.js"></script>
		</head>
		<body>

		</body>
		</html>

	If you wish to view the unminified D3.js source, you can do so [here](http://d3js.org/d3.v3.js). Currently, our index.html only contains the basic HTML5 markup and the imported D3.js library. So let's get started with our random circle generation script! Let's begin by creating an inline script that dynamically generates a SVG element based on the browser' windows height and width.

		<!DOCTYPE html>
		<html>
		<head>
		  <meta charset="utf-8">
		  <title>D3.js Context Menu Tutorial</title>
		  <script type="text/javascript" src="http://d3js.org/d3.v3.min.js"></script>
		</head>
		<body>

			<script type="text/javascript">
			var svgWidth = window.innerWidth
			 ,  svgHeight = window.innerHeight;

			  // SVG we will draw to
			  var svg = d3.select("body").append("svg")
			      .attr("width", svgWidth)
			      .attr("height", svgHeight);
			</script>

		</body>
		</html>

	Here we declare two variables "svgWidth" and "svgHeight" that contain the width and height of our browser window element. Next we create an "svg" object and append it to the HTML document's body element. If you are familiar with jQuery or Zepto.js, D3.js has a very similar syntax and chaining pattern. We use D3 to select the body element and then the append method to create and append an "SVG" HTML element. We then continue our chain by making the "SVG" element's width and height attributes equal to that of the browser window.

	The SVG is our graphics container that resides in our HTML document. Now that we have our container in the document, we can use D3.js to create objects and draw them to it. Let's accomplish this by first generating the N number of circles we are going to draw. In this tutorial I am going to pick 200 as the number of circles to generate. I am going to store these objects in an Array. Each circle object will contain the three attributes we need to draw it, a center-x (cx), center-y (cy), and a radius (r).

	Let's begin generating the circle objects. D3.js has a built-in [range](https://github.com/mbostock/d3/wiki/Arrays#wiki-d3_range) function that iterates over a numeric sequence similar to Python's [range](http://docs.python.org/library/functions.html#range) function. Since I want 200 randomly generated circles, I'm going to enter 200 into the range function and map each iteration into an array with the returned object. This object will contain the three circle properties (cx, cy, and radius). The code is below:

		<!DOCTYPE html>
		<html>
		<head>
			<meta charset="utf-8">
			<title>D3.js Context Menu Tutorial</title>
			<script type="text/javascript" src="http://d3js.org/d3.v3.min.js"></script>
		</head>
		<body>

		<script type="text/javascript">
			var svgWidth = window.innerWidth
			 ,  svgHeight = window.innerHeight
			 ,  nodes = d3.range(200).map(function() { return { 
				  		radius: Math.random() * 12 + 4, 
				    	cx: Math.random() * svgWidth, 
				    	cy: Math.random() * svgHeight 
					} 
			    });

			// SVG we will draw to
			var svg = d3.select("body").append("svg")
			  .attr("width", svgWidth)
			  .attr("height", svgHeight);
		</script>

		</body>
		</html>

	Here you can see that I created a "nodes" variable that contains my results from the d3 range and mapping functions explained earlier. If you open your Browser's developer console and print the nodes variable to console:

		console.log(nodes);

	You'll see that it is an array of objects containing three keys and values. The circle properties were generated using JavaScript's Math.random() and the height and width of the SVG element we accessed earlier. The radius is generated again using Math.random() times the maximum radius I chose of 12 with a minimum of 4 added so that some circles are not too small.


	Now that we have our array of 200 circles, all we have to do is draw them on the SVG element. To do this we will use D3's [append method](https://github.com/mbostock/d3/wiki/Selections#wiki-append) to append our nodes each named a "circle" and drawn by setting the appropriate attributes (radius, cx, cy). The code to perform this drawing is:

		// Append each circle in nodes to SVG
		for (var i = 0; i < nodes.length; i++) {
		svg.append("circle")
		   .attr("cx", nodes[i].cx)
		   .attr("cy", nodes[i].cy)
		   .attr("r", nodes[i].radius);
		}

	In the above code we simply loop through our array of circle nodes and for each node we append a circle object to our SVG element with their radius, center-x, and center-y having the values of the object at the current index.

	At this point you can open / refresh the index.html page in your browser and should see 200 black circles of random size drawn at random positions. But black is boring, so let's finally finish this exercise by randomly coloring the circles.

	To do this we will modify the appending code we just wrote to apply three styles (fill, stroke, and stroke-width). These are our circle's fill color, border color, and border width respectively. The code to do this is very similar to jQuery, Zepto, etc and is as follows:

		// Append each circle in nodes to SVG
		for (var i = 0; i < nodes.length; i++) {
		svg.append("circle")
		   .attr("cx", nodes[i].cx)
		   .attr("cy", nodes[i].cy)
		   .attr("r", nodes[i].radius)
		   .attr("fill", function() { return "hsl(" + Math.random() * 360 + ", 100%, 75%)" })
		   .style("stroke", "black")
		   .style("stroke-width", 1);
		}

	The most complex piece of this added code is the random color generation. Here we calculate the fill value from the return value of a function that utilizes D3.js's [HSL color space method](https://github.com/mbostock/d3/wiki/Colors#wiki-d3_hsl). The parameters we pass to the method are hue, saturation, and lightness. Again we are utilizing Math.random for the random hue generation and I have preset the saturation and lightness to my liking. You may tinker with these values to achieve different color variation. Finally we added a black border of width 1 pixel.

	Congratulations! You've officially used D3.js to create 200 random circles drawn to SVG in the browser. This is only the absolute tip of the iceberg that is the D3.js library.

## Final Code

	Your final code should look as follows:

		<!DOCTYPE html>
		<html>
		<head>
			<meta charset="utf-8">
			<title>D3.js Context Menu Tutorial</title>
			<script type="text/javascript" src="http://d3js.org/d3.v3.min.js"></script>
		</head>
		<body>

			<script type="text/javascript">
				var svgWidth = window.innerWidth
				 ,  svgHeight = window.innerHeight
				 ,  nodes = d3.range(200).map(function() { return { 
				      radius: Math.random() * 12 + 4, 
				      cx: Math.random() * svgWidth - 50 , 
				      cy: Math.random() * svgHeight - 50 } 
				    });

				// SVG we will draw to
				var svg = d3.select("body").append("svg")
				  .attr("width", svgWidth)
				  .attr("height", svgHeight);

				// Append each circle in nodes to SVG
				for (var i = 0; i < nodes.length; i++) {
				svg.append("circle")
				   .attr("cx", nodes[i].cx)
				   .attr("cy", nodes[i].cy)
				   .attr("r", nodes[i].radius)
				   .attr("fill", function() { return "hsl(" + Math.random() * 360 + ", 100%, 75%)" })
				   .style("stroke", "black")
				   .style("stroke-width", 1);
				}
			</script>

		</body>
		</html>

## Demo

## Further Reading




