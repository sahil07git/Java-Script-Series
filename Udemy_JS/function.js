// Question 01
function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;
    console.log(test);
}
let teaOrder = makeTea("lemon tea");
// console.log(teaOrder);

// Question 02
function orderTea(teaType) {
    function confirmOrder() {
        return `Order confirmed for chai`;
    }
    return confirmOrder();
}
let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation);

// Question 03
const calculateTotal = (price, quantity) => price * quantity
let totalCost = calculateTotal(499 * 100)

// Question 04
function makeTea(typeOfTea) {
    return `Maketea: ${typeOfTea} tea`;
}

function processTeaOrder(teaFunction) {
    return teaFunction("earl grey");
}

let order = processTeaOrder(makeTea);
console.log(order);


// Question 05
function createTeaMaker() {
    return function(teaType) {
        return `Making ${teaType}`
    };
}

let teaMaker = createTeaMaker();
let result = teaMaker("green tea");
console.log(result);
