let items = [250,645,300,900,50];

for (let i=0; i<items.length;i++){
    console.log(items[i]);
    let offer = items[i]/10;
    items[i]-=offer;
}
console.log(items)