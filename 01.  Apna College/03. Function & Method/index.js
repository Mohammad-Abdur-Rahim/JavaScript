// find only one value  Return -------------------------

let arr = [1, 2, 3, 4, 5,6,77,43,90];

let evenArray = arr.find((data)=>{
    return data%2===0;
});
console.log(evenArray);