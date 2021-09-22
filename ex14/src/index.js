// Only change code below this line

function myForLoop1(){

    evenNumbers = "";

    for (var i=0; i<5; i++) {
        evenNumbers += (2 * i);
        evenNumbers += ",";
    }

    evenNumbers = evenNumbers.substring(0,9); //Removing last coma
    return evenNumbers;
 }
    
 function myForLoop2(){
    evenInverseNumbers = "";

    for (var i=0; i<5; i++) {
        evenInverseNumbers += 8 - (2 * i);
        evenInverseNumbers += ",";
    }
    evenInverseNumbers = evenInverseNumbers.substring(0,9); //Removing last coma
    return evenInverseNumbers;
 }
 console.log(myForLoop1()); 
 console.log(myForLoop2())
// Only change code above this line

module.exports = {
    myForLoop1,
    myForLoop2
}