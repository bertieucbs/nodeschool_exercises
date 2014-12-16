
var fileFilter = require('./lesson06_filter_file');

var file_path = process.argv[2];
var extension = process.argv[3];

fileFilter(file_path,extension,function(error,data){

	if(error){
		console.log('**Error Occured**');
		return;
	}

	
	for(var i = 0 ; i<data.length ; i++){
	
		console.log(data[i]);

	}


});
