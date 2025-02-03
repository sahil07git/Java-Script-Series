// Question 01
let sum = 0;
let i = 1;

while (i <= 5) {
    sum += i; // sum = sum + 1
    i++;
}
// console.log(sum);

// Question 02
let countdown = [];
let j = 5;
while (j > 0) {
    countdown.push(j);
    j--
}
// console.log(countdown);

// Question 03
// let teaCollection = []
// let tea

// do {
//     tea = prompt(`Enter your favourite tea (type "stoop" to finish)`)

//     if (tea !== "stop") {
//         teaCollection.push(tea)
//     }
// } while (tea !== "stop");

// Question 04
let total = 0
let k = 1

do {
    total += k;
    k++;
} while (k <= 3);

// Question 05
let multipliedNumbers = []
// let numbers = [2, 4, 6]

for (let l = 0; i < numbers.length; l++) {
    takeNumber = numbers[l] * 2
    multipliedNumbers.push(takeNumber)
}

// Questin 06
// let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let c = 0; c < cities.length; c++) {
    const myCity = cities[c];
    cityList.push(myCity);
}

// Question 07
let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
    if(teas[i] === 'chai') {
        break;
    }
    selectedTeas.push(teas[i]);
}

// Question 08
let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
    if (cities[i] === "paris") {
        continue;
    }

    visitedCities.push(cities[i]);
}
console.log(visitedCities);

// Question 09
let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
    if (num === 4) {
        break;
    }
    smallNumbers.push(num);
}
// console.log(smallNumbers);

// Question 10
let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const tes of teaTypes) {
    if (teaTypes === "herbal tea") {
        continue;
    }
    preferredTeas.push(teaTypes);
}

// Question 11
