function calculateTotal(price, quantity){
    return price*quantity
}
let total = calculateTotal(100,3);
console.log("Total Price: "+ total);

function greet(name) {
    return "Hello, " + name + "! Welcome";
}
let a = prompt("Enter your name: ");
console.log(greet(a));

let array = ["Music Concert", "Cultural Fest", "Audio Launch", "Dance", "Singing"];
console.log("Event Names:", array);
console.log("Array Length", array.length)

let numbers = [5, 12, 8, 20, 15, 3];
let filteredNumbers = numbers.filter(function(num) {
    return num > 10;
});
console.log("Numbers greater than 10 =", filteredNumbers);

let doubledNumbers = numbers.map(function(num) {
    return num * 2;
});
console.log("Doubled Numbers =", doubledNumbers);

let values = [20, 30, 40];
let totalsum = values.reduce(function(sum, num) {
    return sum + num;
}, 0);
console.log("Total =", totalsum);

console.log(" Original Array =", numbers);
console.log("Filter Result =", filteredNumbers);
console.log("Map Result =", doubledNumbers);
console.log("filter() and map() do not change the original array.");