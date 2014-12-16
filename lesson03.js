var fs = require('fs');

var file_path = process.argv[2];
var data = fs.readFileSync(file_path);

var total_lines = data.toString().split('\n').length;
total_lines = total_lines-1;
console.log(total_lines);
