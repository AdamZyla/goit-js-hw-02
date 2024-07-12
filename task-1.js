// Zadanie 1. Zamówienie droidów

function makeTransaction(quantity, pricePerDroid, customerCredits){

const totalPrice = quantity * pricePerDroid;

if (totalPrice <= customerCredits) {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
else {
    return `Insufficient funds!`;
}
}


console.log(makeTransaction(5, 3000, 23000));
console.log(makeTransaction(3, 1000, 15000));
console.log(makeTransaction(10, 5000, 8000));
console.log(makeTransaction(8, 2000, 10000));
console.log(makeTransaction(10, 500, 5000));

//          You ordered 5 droids worth 15000 credits!
// VM117:15 You ordered 3 droids worth 3000 credits!
// VM117:16 Insufficient funds!
// VM117:17 Insufficient funds!
// VM117:18 You ordered 10 droids worth 5000 credits!

