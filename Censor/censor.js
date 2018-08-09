var prompt = require('prompt');

function censor(string1,string2){
	var stars = "";

	for (var i = 0; i < string1.length; i++) {
		stars = stars.concat("*");
	}
	
	

	for (var i = 0; i < string2.length; i++) {
		string2 = string2.replace(string1,stars);
	}
	return (
		// console.log(stars)
		console.log(string2)
	);
}

// var string1 = "test";
// var string2 = "This is a test case where I am testing the code test ... test ... test";

// censor(string1,string2);

prompt.start();

prompt.get([
	{
		name: "censor",
		description: "Enter your censor word",
		required: true
	},{
		name: "string",
		description: "Enter the string you want to censor",
		required: true
	}
], function (err,result){
	if (err) {
		console.log(err)
	} else {
		censor(result.censor, result.string)
	}
})