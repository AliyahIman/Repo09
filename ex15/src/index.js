 // Only change code below this line

 function myDoWhile(){

    var myNumbers ="";

    var i=0;
    do {
        myNumbers +=i;  
        myNumbers+= ",";
        i++;
    } while (i<10);
    myNumbers=myNumbers.substring(0,19);
    return myNumbers;
 }
 console.log(myDoWhile());
// Only change code above this line

module.exports = myDoWhile;
