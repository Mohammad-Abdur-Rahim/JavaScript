let items = [250,645,300,900,50];
let idx = 0;
for (let data of items){
    console.log(`index of ${idx} = ${data}`)
    let offer = data /10;
    items[idx] =items[idx] - offer;
    console.log(`After offer = ${items[idx]}`)
    idx++
}