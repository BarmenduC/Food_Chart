import food from './food.json' assert { type: "json" }

const {
    id,
    foodname,
    calorie,
    category,
    proteins,
    cab,
  } = food;

//To Display the names of all the food items
console.log("Name of all the food items is :")
console.log("\n")
food.forEach((element) => {
    console.log(element.foodname)
})

console.log("\n")

//To List all the food items with the category vegetable
console.log("Name of all the food items with the category of Vegetable are :")
console.log("\n")
food.forEach((element) => {
    if(element.category === "Vegetable")
    {
        console.log(element.foodname)
    }
})

console.log("\n")

//To List all the food items with the category fruit
console.log("Name of all the food items with the category of Fruit are :")
console.log("\n")
food.forEach((element) => {
    if(element.category === "Fruit")
    {
        console.log(element.foodname)
    }
})

console.log("\n")

//To List all the food items with the category protein
console.log("Name of all the food items with the category of Protein are :")
console.log("\n")
food.forEach((element) => {
    if(element.category === "Protein")
    {
        console.log(element.foodname)
    }
})

console.log("\n")

//To List all the food items with the category Nuts
console.log("Name of all the food items with the category of Nuts are :")
console.log("\n")
food.forEach((element) => {
    if(element.category === "Nuts")
    {
        console.log(element.foodname)
    }
})

console.log("\n")

//To List all the food items with the category Grains
console.log("Name of all the food items with the category of Grains are :")
console.log("\n")
food.forEach((element) => {
    if(element.category === "Grain")
    {
        console.log(element.foodname)
    }
})

console.log("\n")

//To List all the food items with the category Dairy
console.log("Name of all the food items with the category of Dairy are :")
console.log("\n")
food.forEach((element) => {
    if(element.category === "Dairy")
    {
        console.log(element.foodname)
    }
})

console.log("\n")

//To List all the food items with calorie above 100
console.log("Name of all the food items with calorie above 100 are :")
console.log("\n")
food.forEach((element) => {
    if(element.calorie>=100)
    {
        console.log(element.foodname)
    }
})

console.log("\n")

//To List all the food items with calorie below 100
console.log("Name of all the food items with calorie below 100 are :")
console.log("\n")
food.forEach((element) => {
    if(element.calorie<100)
    {
        console.log(element.foodname)
    }
})

console.log("\n")

//To List all the food items with highest protein content to lowest
console.log("Name of all the food items with highest to lowest protein content are :")
console.log("\n")

food.sort((a,b) => b.protiens - a.protiens)

food.forEach((element) => {
    console.log(element.foodname + " " + element.protiens)
})

console.log("\n")

//To List all the food items with lowest protein content to highest
console.log("Name of all the food items with highest to lowest protein content are :")
console.log("\n")

food.sort((a,b) => a.cab - b.cab)

food.forEach((element) => {
    console.log(element.foodname + " " + element.cab)
})

console.log("\n")