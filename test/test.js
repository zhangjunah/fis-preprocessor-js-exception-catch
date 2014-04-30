var fs = require('fs');
fs.readFile('./origin.js', 'utf8', function(err, data){

	var jserrormonitor = require('../index.js');

	c = jserrormonitor(data, 
		{
			id: './origin.js', 
			rExt: '.js'
		}, 
		{
			file: {
				include: /.js$/i
			},
			func: {
				include: /(init|click)/i
			}, 
			funcDeclaration: true
		}
	);
	fs.writeFile('./result.js', c);
});

