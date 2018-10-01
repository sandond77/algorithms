/*
 * Complete the 'getUmbrellas' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY p
 */

function getUmbrellas(n, p) {
	let range = arguments[1];
	let umbrellas = 1;

	for (let i=0; i < range.length; i++){
		if(n % range[i] === 0){ //easiest condition, assuming one umbrella size can meet the number
			if (n/range[i] <= umbrellas){
				umbrellas = n/range[i];
			}
		} else if (gcdFinder(range) < 1000 && (n % range[i]) !== 0){ //hard condition, multiple umbrella sizes to meet the number
			let GCD = gcdFinder(range);
			umbrellas = GCD/n;
		} else { //if no combination of umbrella sizes can cover the population
			umbrellas = -1;
		}
	}

	function gcdFinder(array){
		let lcm = array[0];
		for (let i = 1; i < array.length; i++) { 
			let GCD = gcd(lcm, array[i]); 
			// lcm = (lcm * holder[i]) / GCD; 
		}
		return GCD;
	}

	function gcd(a, b){ 
		if (b === 0){
			return a; 
		} else {
			return gcd(b, a % b);
		}
	}
	  
	console.log(range, umbrellas);
	return umbrellas
}

getUmbrellas(4, [2,4])