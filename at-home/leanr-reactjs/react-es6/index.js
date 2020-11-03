class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        console.log("I have a " + this.brand + " car");
    }
}

let c = new Car("shit");
console.log(c);
c.present();