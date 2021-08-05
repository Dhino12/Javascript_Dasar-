const arabicaOrder = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Kopi arabica");
        }, 3000);
    })
}

const kapal_apiOrder = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Kopii kapal api");
        }, 3000);
    })
}

const luwakOrder = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Kopi luwak");
        }, 3000);
    })
}

const promises = [arabicaOrder, kapal_apiOrder, luwakOrder];

Promise.all(promises)
    .then(resolveValue => {
        console.log(resolveValue);
    })