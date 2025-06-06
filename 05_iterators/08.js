const myNums = [1, 2, 3, 4];

let myTotal = myNums.reduce(function (accumulator, currentValue) {
    console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
    return accumulator + currentValue;
}, 0); // 0 -> initial value

console.log(myTotal); // 10

myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
console.log(myTotal); // 10

const shoppingCart = [
    {
        itemName: "study lamp",
        itemCount: 1,
        price: 1000
    },
    {
        itemName: "study table",
        itemCount: 1,
        price: 5000
    },
    {
        itemName: "copy",
        itemCount: 10,
        price: 100
    },
    {
        itemName: "pen",
        itemCount: 20,
        price: 10
    }
];

const deliveryCharge = 100;

const priceToPay = shoppingCart.reduce(
    (acc, item) => acc + item.itemCount * item.price,
    deliveryCharge
);

console.log(priceToPay);
