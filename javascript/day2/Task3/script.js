let book = {
    title: "JavaScript Basics",
    author: "John",
    price: 500
};
book.price = 600;
console.log(book);

let user = {
    name:"Pooja",
    age: 21,
    address: {
        city: "chennai",
        state: "Tamil Nadu"
    }
};
console.log(user.address.city);

let products = [
    { p1: "Laptop", price: 50000},
    { p2: "Mobile", price:20000},
    {p3:"Headphones", price: 2000}
];
for (let product of products){
    console.log(product.name);
}

let student = {
    Name1:"abi",
    age: 21,
    department: "CSBS"
};
let { Name1, age }= student;
console.log(Name1);
console.log(age);

let array1 = [10, 20, 30];
let array2 = [40, 50, 60];
let copy = [...array1];
let combined = [...array1, ...array2];
console.log(copy);
console.log(combined);

function add(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(add(10, 20));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15, 20));

let users = {
    name: "varsh"
};
let city = users.address?.city ?? "City not available";
console.log(city);