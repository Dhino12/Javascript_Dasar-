class Car{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

/**
 * instance = objek yang memiliki properti dan method yang telah ditentukan oleh blueprint-nya (class), 
 * atau singkatnya adalah objek yang merupakan hasil realisasi dari sebuah blueprint.
*/

const jokoCar = new Car("Toyota", 5);