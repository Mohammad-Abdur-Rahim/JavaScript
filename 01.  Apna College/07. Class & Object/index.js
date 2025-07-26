class Person{
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
let rahimobj = new Engineer();
let shakibobj = new Doctor();