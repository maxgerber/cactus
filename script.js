window.onload = function background() {
    "use strict";
    var imageno = Math.floor(Math.random()*3);
    var main = document.getElementsByTagName('main')[0];
    main.style.backgroundImage = "url('cactus" + imageno + ".svg')";
};