// Load data Fetch 1st 
const loadCategories = () =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
    .then(data=> displayCategories(data.categories))
    .catch(error => console.log(error))
}
// Display function load data 2nd
const displayCategories = (categories) =>{
    const categoriesContainer  = document.getElementById('categories')
    categories.forEach((item)=>{
        console.log(item);
        const button = document.createElement('button');
        button.classList ='btn btn-primary';
        button.innerText= item.category; 
        categoriesContainer.append(button);
    });
};





loadCategories();

