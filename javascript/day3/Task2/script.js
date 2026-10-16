//1
let campusName = "REC";
function campus(){
    return campusName;
}
console.log(campus());

//2
if (true){
    let variable1 = "Let variable";
    var variable2 = "var variable";
}
console.log(variable2);
//console.log(variable1);

//3
//console.log(a);
//var a = "hii";

//3.1
//console.log(b);
//let b = 10;

//4
function makeCounter(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}
let counter = makeCounter();
counter();
counter();
counter();
counter();

