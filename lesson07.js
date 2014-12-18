var http = require('http');

var url = process.argv[2];

//console.log('url---' + url);

http.get(url , function(response){
	
	response.setEncoding('utf8');
	//console.log('got the response--' + response.statusCode);

	response.on("data", function(data){
		console.log(data);
	});

	response.on("error", function(){
		console.log("error while getting the service");
	});

});
