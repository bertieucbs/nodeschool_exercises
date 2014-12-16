var fs = require('fs');

var file_path = process.argv[2];

fs.readFile(file_path,'utf-8',function(error,data){

	var contents = data.toString();
	var total_lines = contents.split('\n');
	var total_lines_count = (total_lines.length) - 1;
	console.log(total_lines_count);

});
