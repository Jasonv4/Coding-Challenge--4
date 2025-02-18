//Task 1 If Statements

let purchaseAmount = 500; // Declaring a purchase amount
let actualAmount = purchaseAmount; // The actual price after discount 
if (purchaseAmount > 100 ) {
    actualAmount = purchaseAmount * 0.9
} //Discount
console.log(`Final amount after discount: $${actualAmount}`); // Logging Amount after discount


//Task 2 For Loop

let sales =[60, 40, 100, 70, 30]; //Array of sales figures
let totalSales = 0 
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i]
    
}; //Loop to Calculate Total Sales
console.log(`Total Sales: $${totalSales}`); // Logging total sales

//Task 3 While Loop

let stock = 10; //Declaring initial stock
while (stock > 0) {
    console.log(`Current Stock: ${stock}`);
    stock--
    
}; // Decreasing stock until it reaches 0
console.log("No Stock Left") // When no stock is left

//Task 4 Do.. While Loop

let responses = 0; // Initiqal responses
do { responses++;
    console.log(`Number of responses ${responses}`)
    
} while (responses < 3); // Increasing responses until 3 

//Task 5 For.. In Loop
let employee = {
    name: "Jordan",
    position: "Accountant",
    salary: 80000
}; // Declaring employee
for (let key in employee) {
    console.log(`${key}: ${employee[key]}`)
        
    } // for loop

// Task 6 For.. Of Loop
let products = ["cheetos", "fritos", "doritos"]; // Declaring product names
for (let product of products) {
    console.log(`Chip: ${product}`)

} // Loop of Products

//Task 7 forEach() Method 
let orders = [68,69,70]; // Declaring orders
orders.forEach(order => {
    console.log(`Order ID: ${order}`)
    
}); //Logging each order id

//Task 8 Function Declaration

function calculateTax(amount, taxRate) {
    return amount * taxRate
} // Function to calculate tax
let tax  = calculateTax(5000, .05); // Ammount and tax
console.log(`Tax: $${tax}`); // Logging tax

//Task 9 Function Expressions

const applyDiscount = function(price, discountPercentage) {
    return price  - (price * discountPercentage / 100)
}; // Function that discounts price
let discountedPrice = applyDiscount(50,10)
console.log(`Discounted Price:$${discountedPrice}`); //Logging discounted price

//Task 10 Arrow functions

const calculatePoints = (purchaseAmount) => {
    return (purchaseAmount / 10)
}; //Function that calculates points earned
let points = calculatePoints(90); // Declare number of points
console.log(`points earned: ${points}`);// Logging Points earned


