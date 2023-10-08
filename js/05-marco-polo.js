
// Marco! Polo!
// Create an application which iterates numbers from 1 to 100. 
// For multiples of 3, print "Marco!" instead of the number and 
// for multiples of 5, print "Polo!" instead of the number. 
// For numbers which are multiples of both 3 and 5 print "Marco! Polo!". 
// You will need to take advantage of the modulus operator to accomplish this task.

let str;
for (let i=1; i<=100; i++) {
    str = "";
    if (!(i%3)) {
        str += "Marco! ";
    }
    if (!(i%5)) {
        str += "Polo!";
    }
    if ((i%3) && (i%5)) {
        str = i;
    }
    console.log(i, str);
}
