// Question 1
let teaFlavors = ["green tea", "black tea", "oolong tea"]
const firstTea = teaFlavors[0]

// Question 2
let cities = ["London", "Tokyo", "Paris", "New York"]
favouriteCity = cities[2]

// Question 3
let teaTypes = ["herbel tea", "white tea", "masala chai"]
teaTypes[1] = "jasmine tea"
// console.log(teaTypes);

// Question 4
let citiesVisited = ["Mumbai", "Sydney"]
citiesVisited.push("Berlin")
// console.log(citiesVisited);

// Question 5
let teaOrders = ["chai", "ice tea", "matcha", "earl grey"]
teaOrders.pop()
// console.log(teaOrders);

let teaOrder = ["chai", "ice tea", "matcha", "earl grey"]
teaOrder.reverse()
// console.log(teaOrder);

// Question 6
let popularTeas = ["green tea", "black tea", "oolong tea"]
let softCopyTeas = popularTeas;
popularTeas.pop();
// console.log(softCopyTeas);
// console.log(popularTeas);

// Question 7
let topCities = ["Berlin", "Singapore", "New York"]
let hardCopyCities = [...topCities];
// let hardCopyCities = topCities.slice();
topCities.pop();
// console.log([...hardCopyCities]);

// Question 8
let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);
// console.log(worldCities);

// Question 9
let teaMenu = ["green tea", "black tea", "oolong tea", "earl grey"]
let menuLength = teaMenu.length;
// console.log(menuLength);

// Question 10
let citiesBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList = citiesBucketList.includes("London");
// console.log(isLondonInList );
