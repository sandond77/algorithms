function maxInversions(prices) {

//1. Create array of 3-number combinations from the given price array
//2. Iterate the array through the array and test for inversion 
//	a. Test for inversion by checking the element's characters against each other using their values via indices
//3. Track inversion cases using a counter


//Flaws
//Doesn't work with elements containing multiple digits
//Combo generator doesnt maintain the order of input array
//long run time by generating every single combination

	//Generating all the POSSIBLE combinations from our prices array

  	let result = [];

  	let f = function(blank, prices) {
    	for (var i = 0; i < prices.length; i++) {
      		result.push(blank + prices[i]); 
      		f(blank + prices[i], prices.slice(i + 1));
    	}
  	}


  	f('', prices);
  	//console.log(result);

	//filter out all the three letter combinations
  	let threes = result.filter((combo) => combo.length === 3);
  	//console.log("3s" + threes)

	let counter = 0;
	for (var i = 0; i < threes.length; i++) {
		let temp = threes[i].split("")

		if (temp[0] > temp[1] && temp[1] > temp[2]) {
			counter++;
		}
	}

	//console.log(counter)
	return counter
}
