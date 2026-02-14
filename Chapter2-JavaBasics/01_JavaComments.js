console.log("Srirama");
/*java scritpt
is a programming language
used to make web pages interactive
it can be used for both front-end and back-end development
*/

//identifiers
//variables
let a = 10;
let b = 20;
console.log(a + b);

//literals
let name = "Govinda";
let age = 30;
let isStudent = true;
console.log(name, age, isStudent);

//var, let, const
var x = 5;      

function test() {
    var y = 10; 
    var x = 21;
    console.log(x); 
    console.log(y); 
    console.log("Inside function",x+y);
    if (true) {
        var x = 15; 
        console.log(x); 
        console.log("Inside True function", x+y);
    }
}

test();
console.log(x); 