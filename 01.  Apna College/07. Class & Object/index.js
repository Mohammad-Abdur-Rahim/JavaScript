// Craete new class called Admin which Inherit User. Add A New Method called editData to Admin that Allow Edit website;

let data = "Secret Data";
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  view() {
    console.log("Website Data ", data);
  }
}

class Admin extends User {
    constructor(name,email){
        super(name,email);
    }
  editData() {
    data = "Some New Data";
  }
}

let admin= new Admin("Admin","admin34@gmail.com");
