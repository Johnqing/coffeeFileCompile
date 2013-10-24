var fs = require('fs');
var path = require('path');  
var exec = require('child_process').exec;  

function walk(path, callback){
		var dirList = fs.readdirSync(path);

		dirList.forEach(function(item){
			if(fs.statSync(path + '/' + item).isFile()){
				// fileList.push(path + '/' + item);
				callback && callback(path, item)
			}
		});

		dirList.forEach(function(item){
			if(fs.statSync(path + '/' + item).isDirectory()){
				walk(path + '/' + item, callback);
			}
		});
	}


var CoffeeCompile = function(){
	this.public_dir = __dirname+'/src/www/front/';
	this.init()
}

CoffeeCompile.prototype = {
	init: function(){
		var that = this;

		walk(that.public_dir + 'other', function(root_path, item){
			var input = root_path+'/',
				outputPath = root_path.replace(/other/g, 'js'),
			input = path.resolve(input);
			output = path.resolve(outputPath+'/')
			that.toJs(input, output)
		})
	},
	toJs: function(input, output){
		var cmd = 'coffee.cmd -o '+output+' -cw '+input+'/';

		exec(cmd, {encoding: 'utf-8'}, function(error, stdout, stderr){
			if(error !== null){
				console.log(error);
				return
			}
			console.log(stdout)
		})
	}
}


new CoffeeCompile()
