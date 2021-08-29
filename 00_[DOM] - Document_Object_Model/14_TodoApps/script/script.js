document.addEventListener("DOMContentLoaded", function() {
    const submitForm = document.getElementById("form");

    submitForm.addEventListener("submit", function(e){
        e.preventDefault(); // untuk mencegah behaviour asli agar tidak dijalankan.
        addToDo();
    })
})

console.log("test");
