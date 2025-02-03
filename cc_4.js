//Task 1

let purchaseAmount = 150; // Set the purchase amount
// Apply a 10% discount if the purchase amount is greater than $100
if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.9;
}
// Log the final amount to the console
console.log(`Final amount after discount: $${finalAmount}`);

//Task 2

let sales = [120, 85, 200, 150, 90]; // Array of sales figures
let totalSales = 0; // Variable to store total sales
// Use a for loop to calculate the total sales
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
}
console.log(`Total sales: $${totalSales}`); // Log the total sales to the console

