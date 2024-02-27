document.getElementById("open_modal_btn").addEventListener("click", function() {
    document.getElementById("my_modal").classList.add("open")
})

document.getElementById("close_my_modal_btn").addEventListener("click", function() {
    document.getElementById("my_modal").classList.remove("open")
})