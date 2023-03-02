//change nav-bar when scroll

window.addEventListener('scroll', () => {
    document.querySelector('.nav').classList.toggle
        ('window-scroll', window.scrollY > 0)
});

//side navigation bar
var menu = document.querySelector('.fa-bars');
var sidebar = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
    if (menu.className === "fa fa-bars") {
        sidebar.style.display = "block";
    }
    else {
        sidebar.style.display = "none";
    };

    if (menu.className === "fa fa-bars") {
        menu.className = "fa fa-times"
    }
    else {
        menu.className = "fa fa-bars"
    };

});
window.onresize = function () {
    if (window.innerWidth > 1024) {
        sidebar.style.display = "block";
    } else {
        sidebar.style.display = "none";
        menu.className = "fa fa-bars"
    }
}