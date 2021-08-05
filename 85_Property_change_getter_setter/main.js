class Car{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    get name(){
        return `Nama mobil = ${this._name}`;
    }

    set name(name){
        console.log(`anda ganti mobil dari ${this._name} menjadi ${name}`);
        this._name = name;
    }
}

const jokoCar = new Car("Toyota", 5);

jokoCar.name = "Honda";
jokoCar.age = 6;

console.log(jokoCar.name);

/** 
 * Tanda underscore berfungsi sebagai tanda bahwa properti _color tidak sebaiknya diakses langsung, 
 * namun harus melalui property accessor (getter/setter).
*/