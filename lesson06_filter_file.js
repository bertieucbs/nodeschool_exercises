module.exports = function filterFileExtension(fp,ext,callback){


var fs = require('fs');
var path = require('path');

var filter_list = [];

var file_path = fp;
var extension = ext;

fs.readdir(file_path, function(error,data){

	if(error){
		return callback(error);
	}


	for(var index = 0 ; index<data.length ; index++){

                ext = path.extname(data[index]);

                if(ext.toLowerCase() == ("." + extension)){
                       filter_list.push(data[index]);
                }

        }


	return callback(null,filter_list);

});

}

