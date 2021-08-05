const state = {
    isCoffeeReady : true,
    seedStock: {
        arabica : 250,
        luwak : 60,
        kapal_api : 80,
    }
}

const getSeeds = (type, miligram ) => {
    return new Promise((resolve, reject) => {

        if(state.seedStock[type] >= miligram){
            state.seedStock[type] -= miligram;
            resolve("Biji kopi tersedia");

        }else{
            reject("Maaf stock kopi habis");
        }
    })
}

const makeCoffee = seed => {
    return new Promise((resolve, reject) => {

        if(state.isCoffeeReady){
            resolve("Kopi berhasil dibuat");
        }else{
            reject("Maaf mesin kopi rusak");
        }
    })
}

const servingToTable = coffee => {
    return new Promise(resolve => {
        resolve("Pesanan kopi sudah tersedia");
    })
}

function reserveACoffee(type, miligram){
    getSeeds(type, miligram)
        .then(makeCoffee)
        .then(servingToTable)
        .then(resolvedValue => {
            console.log(resolvedValue);
        })
        .catch(rejectedReason => {
            console.log(rejectedReason);
        })
}

reserveACoffee("kapal_api", 10);