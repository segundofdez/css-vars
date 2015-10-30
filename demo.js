"use strict";

let stylecow = require('stylecow-core'),
	http     = require("http");

let server = http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	let body = '',
		style = '',
		css = stylecow.parseFile('src/icons.css');

	css.getAll('CustomProperty').forEach(function (prop) {
		let value = prop.join(', ');

		body += `<li class="var-${prop.name}"><code>${prop.name}</code></li>`;
		style += `.var-${prop.name}::before { content: ${value}}`;
	});

	response.write(`
<!DOCTYPE html>
<html>
	<head>
		<title>Css Vars</title>
		<style>
			${style}
			body {
				font-family: Arial;
			}
			ul {
				list-style: none;
				padding: 0;
			}
			li::before {
				display: inline-block;
				width: 2em;
			}
		</style>
	</head>
	<body>
		<ul>
			${body}
		</ul>
	</body>
</html>
	`);

	response.end();
});

server.listen(8888);
console.log('Server is running at http://localhost:8888');