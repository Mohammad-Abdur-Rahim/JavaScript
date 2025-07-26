// Craete a college website . create class user with 2 properties nbame,email. it also called method viewData() that allow user view data .
let data ="Secret Data";
class User {
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    view(){
        console.log("Website Data ",data);
    }
}
let student1 = new User("Md. Abdur Rahim","Rahim44@gmail.com");
let student2= new User(" Abdur ","asdfta@gmail.com");
let teacher= new User("Dean","sakib6743t@gmail.com");