fetch("https://web-server-book-dicoding.appspot.com/add", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": "12345"
    },
    body: JSON.stringify({
        id: 10,
        title: "One Piece",
        author: "Eichiro Oda"
    })
})