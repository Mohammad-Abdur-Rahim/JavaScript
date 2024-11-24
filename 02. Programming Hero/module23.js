function woodQuantity(chair,table,bed){
    perChair = 3;
    perTable = 10;
    perBed = 60;
    const chairTotalWood = chair * perChair ;
    const tableTotalWood = table * perTable ;
    const bedTotalWood = bed * perBed ;
    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;

}
const chair = 5;
const table = 3;
const bed = 2;
const output = woodQuantity(chair,table,bed);
console.log("Total Wood :",output);