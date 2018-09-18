function oddNumbers(l, r) {
    let holder = [];
    for(let i=l; i <= r; i++){
        if(i % 2 !== 0 ){
           holder.push(i);
        }
    }
    console.log(holder)
}



oddNumbers(3,9)