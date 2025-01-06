//Array of Object ---------- method use case
const product =[
    {id:1, name:'dell', price:72000, color:'silver'},
    {id:2, name:'hp', price:82000, color:'black'},
    {id:3, name:'mac', price:172000, color:'silver'},
    {id:4, name:'lenovo', price:52000, color:'red'},
    {id:5, name:'walton', price:42000, color:'silver'},
];


const price =product.find((product)=>product.price >= 60000);
console.log(price);




