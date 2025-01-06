//Array of Object ---------- method use case
const product =[
    {id:1, name:'dell', price:72000, color:'silver'},
    {id:2, name:'hp', price:82000, color:'black'},
    {id:3, name:'mac', price:172000, color:'silver'},
    {id:4, name:'lenovo', price:52000, color:'red'},
    {id:5, name:'walton', price:12000, color:'silver'},
];

//reduce find total object price
const price =product.reduce((p,c)=>p+c.price ,0)
console.log(price);




