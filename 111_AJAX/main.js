const xhr = new XMLHttpRequest();

xhr.onload = function(){
    console.log(this.responseText);
}

xhr.onerror = function(){
    console.log("Ups something error");
}

xhr.open("GET", "https://web-server-book-dicoding.appspot.com/list");
xhr.send();