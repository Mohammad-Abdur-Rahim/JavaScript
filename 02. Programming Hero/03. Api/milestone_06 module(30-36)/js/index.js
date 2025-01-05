function add(n1=0,n2=0){
    const result =n1+n2;
    return result;

};
// ARRAY DEFAULT VALUE = [] 
function fullname(fname='' , lname=''){
    const result = fname+lname;
    return result;
}
const output1 =add(5);
const output3 =fullname('Md Abdur Rahim');
console.log(output1);
console.log(output3);