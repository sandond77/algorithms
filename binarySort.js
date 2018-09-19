/*
 * Complete the 'rearrange' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY elements as parameter.
 */

function rearrange(elements) {
    // Write your code here
    let INTEGER_ARRAY = [];
    elements = elements.map( element => element.toString(2));

    for(let i = 0; i < elements.length; i++){
        let temp = elements[i].split('');
        for(let j=0; i < temp.length; j++){
            let counter = 0;
            if (charAt(temp[j])=== 1){
                counter++
            }
        }
        console.log(temp)

    }

    console.log(elements)
}

// [7, 8 , 6 , 5]
rearrange([7, 8 , 6 , 5]);