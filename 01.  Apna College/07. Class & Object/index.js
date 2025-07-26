class Person{
    constructor(name){
        this.role ="Frontend React Developer";
        this.name=name; 
    }
    eat(){
        console.log("Eating");
    }
    sleep(){
        console.log("Sleep");
    }
    work(){
        console.log("Nothing to work");
    }
}

class Engineer extends Person{
    constructor(name){
        super(name); //invoke Parent Class Constructor
    }
    work(){
        console.log("React Developer ");
    }
}
class Doctor extends Person{
    work(){
        console.log("Treate the patient");
    }
}
let personobj = new Person();
let rahimobj = new Engineer("Md.Abdur Rahim");
let shakibobj = new Doctor();