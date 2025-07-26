class Person{
    eat(){
        console.log("Eating");
    }
    sleep(){
        console.log("Sleep");
    }
}

class Engineer extends Person{
    Work(){
        console.log("React Developer ");
    }
}
class Doctor extends Person{
    Work(){
        console.log("Treate the patient");
    }
}
let rahimobj = new Engineer();
let shakibobj = new Doctor();