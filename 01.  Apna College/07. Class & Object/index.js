class toyotaCar {
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

let car1 = new toyotaCar();
car1.setBrand("Mode 1");
let car2 = new toyotaCar();
car2.setBrand("Mode 2");
