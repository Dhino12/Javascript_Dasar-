function Car(manufacture, color){
    this.manufacture = manufacture;
    this.color = color;
    this.engineActive = false;

}

Car.prototype.startEngine = function(){
    console.log("Mobil dinyalakan.....");
    this.engineActive = true;

}

Car.prototype.info = function(){
    console.log(`Manufacture : ${this.manufacture}`);
    console.log(`Color : ${this.color}`);
    console.log(`Engines : ${this.engineActive ? "aktif" : "tidak aktif"} `);

}

const jhonCar = new Car("Honda", "Red");
jhonCar.startEngine();
jhonCar.info();