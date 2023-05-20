window.addEventListener("load", function() {
    var gif = document.getElementById("gif");
    var shopContainer = document.getElementById("shopContainer");

    gif.addEventListener("animationend", function() {
        gif.style.opacity = 0;
        shopContainer.style.opacity = 1;
    });
});
