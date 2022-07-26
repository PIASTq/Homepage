{
    const init = () => {
        console.log("Cześć wszystkim z YouCode'a");
    };

    const przycisk = document.querySelector(".przycisk")
    przycisk.addEventListener("click", () => {
        const foto = document.querySelector(".foto");
        foto.remove();
        przycisk.remove();
    });

    init();
}