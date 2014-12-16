var fs = require('fs');
var path = require('path'); 

var file_path = process.argv[2];
var extension = process.argv[3];

fs.readdir(file_path, function(error,data){

	for(var index = 0 ; index<data.length ; index++){

		ext = path.extname(data[index]);		
		if(ext.toLowerCase() == ("." + extension)){
			console.log(data[index]);
		}

	}
		
});
