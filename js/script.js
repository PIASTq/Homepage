{
    const welcome = () => {
        console.log("Cześć wszystkim z YouCode'a");
    };

    const deletePhoto = () => {
        const foto = document.querySelector(".foto");
        foto.remove();
        przycisk.remove();
    };

    const init = () => {
        const przycisk = document.querySelector(".przycisk")
        przycisk.addEventListener("click", deletePhoto);

        welcome();
    };

    init();
}