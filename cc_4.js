//Task 1 If Statements

let purchaseAmount = 500; // Declaring a purchase amount
let actualAmount = purchaseAmount; // The actual price after discount 
if (purchaseAmount > 100 ) {
    actualAmount = purchaseAmount * 0.9
} //Discount
console.log('Final amount after discount: $${actualAmount}'); // Logging Amount after discount


//Task 2 For Loop
let sales =[60, 40, 100, 70, 30]; //Array of sales figures
let totalSales = 0 
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i]
    
}; //Loop to Calculate Total Sales
console.log('Total Sales: $${totalSales}'); // Logging total sales


