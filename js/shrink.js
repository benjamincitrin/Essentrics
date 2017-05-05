/* global classie */

function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 100,
            logotop = document.querySelector("#logotop");
        if (distanceY > shrinkOn) {
            classie.add(logotop,"smaller");
        } else {
            if (classie.has(logotop,"smaller")) {
                classie.remove(logotop,"smaller");
            }
        }
    });
}
window.onload = init();

