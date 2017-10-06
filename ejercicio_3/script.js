{
    let box = document.querySelector(".caja1");
    box.addEventListener('click', change);

    function change() {
        box.classList.toggle("change_color")
    }
}
