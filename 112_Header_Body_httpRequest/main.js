const xhr = XMLHttpRequest();

xhr.onload = function(){
    console.log(this.responseText);
}

xhr.onerror = function(){
    console.log("Ups somthing error");
}

xhr.open("POST", "https://web-server-book-dicoding.appspot.com/add");

// menambahkan properti pada header request
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("X-Auth-Token", "12345");


// set data to body request
const book = {
    id: 10,
    title: "Edensor",
    author: "Andrea Hirata"
}

xhr.send(JSON.stringify(book));