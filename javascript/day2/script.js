console.log("Name : Pooja");
console.log("Course : Computer Science and Business Systems");
console.log("Number : 30");

let eventName = "Movie Audio Launch";
let ticketPrice = 1000;
let seatsLeft = 205;

console.log("Eventname : "+ eventName);
console.log("Ticketprice : "+ ticketPrice);
console.log("Seatsleft : "+ seatsLeft);

let numberofTickets = 3;
let totalPrice = ticketPrice * numberofTickets;

console.log("EventName : " + eventName);
console.log("Total Price : $" + totalPrice);

if(totalPrice > 500){
    console.log("Total Price exceeds $500");
}
else{
    console.log("Total price does not exceed $500");
}

let input = -6;

if(input>0){
    console.log("Positive Value");
}
else if (input === 0) {
    console.log("Zero");
}
else{
    console.log("Negative Value");
}

for (let i = 2; i <= 10; i += 2){
    console.log(i);
}

