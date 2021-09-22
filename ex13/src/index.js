// Write code below this line

function inverseWhile(){

    var fiveNumbers = "";

    var i=5;

    while (i >=0) {
        fiveNumbers +=i;
        fiveNumbers +=","
        i--;
    }
    fiveNumbers = fiveNumbers.substring(0,11);
    return fiveNumbers;
}
// Write code above this line

console.log(inverseWhile()); 
module.exports = inverseWhile;
