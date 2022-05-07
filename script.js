const navigation = document.querySelector(".navbar");

window.onscroll = function () {
    var top = window.scrollY;
    return top > 75
        ? navigation.classList.add("change-color")
        : navigation.classList.remove("change-color");
};

function toggleMenu() {
    var menuToggle = document.querySelector(".navbar__toggle");
    var menu = document.querySelector(".navbar__menu");
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
}

function updateCurrentYear() {
    var present = new Date();
    var year = present.getFullYear();
    document.getElementById("currentYear").innerHTML = year;
}
updateCurrentYear();
