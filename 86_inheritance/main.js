class Vehicle{
    constructor(licensePlate, manufacture, wheels){
        this.licensePlate = licensePlate;
        this.manufacture = manufacture;
        this.wheels = wheels;
        this.engineActive = false;

    }

    startEngine(){
        console.log(`Mesin kendaraan dengan nomor ${this.licensePlate}`);
    }

    info(){
        console.log(`Nomor kendaraan : ${this.licensePlate}`);
        console.log(`Manufacuter : ${this.manufacture}`);
        console.log(`Mesin : ${this.engineActive ? "Aktif" : "Mati"}`);

    }

    droveOff(){
        console.log(`Kendaraan ${this.licensePlate} melaju`);
    }

    openDoor(){
        console.log(`Membuka pintu`);
    }

    parking(){
        console.log(`Kendaraan ${this.licensePlate} parkir`);
    }

}

class Car extends Vehicle{
    constructor(licensePlate, manufacture, wheels){
        super(licensePlate, manufacture, wheels); // super untuk akses properti dari parrent
        this.wheels = wheels;
    }


    droveOff(){
        console.log(`Kendaraan ${this.licensePlate} melaju`);
    }

    openDoor(){
        console.log(`Membuka pintu`);
    }

    info(){
        console.log(`Roda ada ${this.wheels}`);
    }
}

const car = new Car("H123", "Honda", 4);
car.startEngine();


