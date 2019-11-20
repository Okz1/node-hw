const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: null,
});


rl.on('line', function(line){
	console.log(line.split('').reverse().join(''));
});
