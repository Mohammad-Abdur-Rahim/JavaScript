//  JavaScript ----Array ----
//practice question 2-- price of 5 items [250,645,300,900,50] all item 10% offer . change array to final price after apply offer....

// let prices = [250,645,300,900,50];
// let i=0;
// for (let price of prices) {
//     console.log(`value at index ${i} = ${price}`);
//     //offer create
//     let offer =price/10;
//     prices[i]=prices[i]-offer;
//     console.log(`value at index ${i} = ${prices[i]}`);
//     i++;
// }
let prices = [250,645,300,900,50];
for (let i=0;i<prices.length;i++) {
    let offer = prices[i]/10;
    prices[i]-=offer;
}
console.log(`value at index  = ${prices}`);
