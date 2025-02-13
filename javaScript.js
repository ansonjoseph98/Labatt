/* Author :Anson Joseph */
/* Labatt Brewing Company Limited  */

document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "images/Budweiser/75w.png",
        "images/Budweiser/alex.png",
        "images/Budweiser/bud light.png",
        "images/Budweiser/busch.png",
        "images/Budweiser/corona.png",
        "images/Budweiser/hoe.png",
        "images/Budweiser/kokenee.png",
        "images/Budweiser/labatt.png",
        "images/Budweiser/leffe.png",
        "images/Budweiser/modelo.png",
        "images/Budweiser/stella.png",
        "images/Budweiser/ultra.png"
    ];

    const container = document.getElementById("imageContainer");

    // Loop 10 times to repeat images
    for (let i = 0; i < 10; i++) {
        images.forEach(src => {
            let img = document.createElement("img");
            img.src = src;
            img.alt = "Scrolling Image";
            container.appendChild(img);
        });
    }
});