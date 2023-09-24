// ordered-sales.js

const sales = [
    { amount: 10000, quantity: 10 },
    { amount: 15000, quantity: 5 },
    { amount: 5000, quantity: 20 }
];

const orderedSales = sales.map((sale) => ({ ...sale, Total: sale.amount * sale.quantity }));
orderedSales.sort((a, b) => b.Total - a.Total); // Sort by Total in descending order

console.log(orderedSales);
