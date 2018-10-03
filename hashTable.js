var h = new Object(); // or just {}
h[0] = 0
h['one'] = 1;
h['two'] = 2;
h['three'] = 3;

// show the values stored
for (var k in h) {
    // use hasOwnProperty to filter out keys from the Object.prototype
    if (h.hasOwnProperty(k)) {
       	console.log('key is: ' + k + ', value is: ' + h[k]);
    }
}
     

console.log(h)
console.log(typeof h)