const data = {
    "error" : false,
    "message" : "success",
    "books" : [
        {
            "id": 1,
            "title": "Laskar Pelangi",
            "author": "Andrea Hirata"
        },
        {
            "id": 2,
            "title": "Filosofi Kopi",
            "author": "Dewi Lestari"
        },
        {
            "id": 3,
            "title": "Clean Code",
            "author": "Robert C Martin"
        },
    ]
}

console.log(`Error ? ${data.error}`);

console.log("Daftar Buku");

data.books.forEach((book, index) => {
    console.log(`${index - 1}. ${book.title} ( ${book.author} )`);
})

/** 
 *  jika key terdiri dari karakter yang tidak dapat digunakan dalam
 *  penamaan variabel seperti white space, dash, slash atau yang lainnya, datanya dapat kita askes melalui indexing seperti ini:
 * 
data.["books"].forEach((book, index) => {
    console.log(`${index - 1}. ${book.title} ( ${book.author} )`);
})

*/