// menjalankan banyak promise sekaligus
    // Promise.all() dapat menerima banyak promise dalam bentuk array pada parameternya.
const  {
    state, checkAvailability, brewCoffee,checkStock,  boilWater, grindCoffeeBeans
} = require('./prepare/checkAvailability')

function makeEspresso() {
    checkAvailability()
        .then((value) => {
            console.log(value);
            return checkStock()
        })
        .then(value => {
            console.log(value);
            
            const promise = [boilWater(), grindCoffeeBeans()] 

            return Promise.all(promise) // promise all
        })
        .then((value) => {
            console.log(value);
            return brewCoffee()
        })
        .then(value => {
            console.log(value);
            state.isCoffeeMachineBusy = false
        })
        .catch(rejectedReason => {
            console.log(rejectedReason);
            state.isCoffeeMachineBusy = false
        })
}

makeEspresso()