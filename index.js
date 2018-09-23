var fs = require('fs');
var colors = require('colors');

fs.readdir('./', 'utf-8', function(err, files) {
	for (var i = 0; i < files.length; i++ ) {
		fs.appendFile('./text.txt', files[i] + ', \n', function(err) { //dodałem przecinek, bo \n w pliku txt nie działa a chciałem to wylistować
	    	if (err) throw err;
	    });
	    }
	console.log('Zapisano!'.blue);
	fs.readFile('./text.txt', 'utf-8', function(err, data) {
	    console.log('Dane po zapisie'.blue)
	    console.log(data); 
	});
});