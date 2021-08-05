class Car{
    constructor(manufacture, color){
        this.manufacture = manufacture;
        this.color = color;
        this.engineActive = false;

    }

    startEngine() {
        console.log('Mobil dinyalakan...');
    }

    info(){
        console.log(`Manufacture : ${this.manufacture}`);
        console.log(`Color : ${this.color}`);
        console.log(`Engines : ${this.engineActive ? "aktif" : "tidak aktif"}`);
    }
}

const jhonCar = new Car("Honda", "Red");
jhonCar.startEngine();
jhonCar.info();