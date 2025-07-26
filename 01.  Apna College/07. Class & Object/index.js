class Person{
    constructor(){
        this.role ="Frontend React Developer"
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
    constructor(branch){
        super(); //invoke Parent Class Constructor
        this.branch=branch;
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
let rahimobj = new Engineer("Daffodil");
let shakibobj = new Doctor();