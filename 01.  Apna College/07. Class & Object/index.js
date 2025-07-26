class toyotaCar {
    constructor(brand,mileage){
        console.log("Create constructor method");
        this.brand= brand;
        this.mileage= mileage;
    }
  start() {
    console.log("start car");
  }

  end() {
    console.log("stop car");
  }
  setBrand(brand) {
    this.brand = brand;
  }
}

let car1 = new toyotaCar("Car 1",70);
let car2 = new toyotaCar("car 2",100);

console.log(car1);
console.log(car2);

