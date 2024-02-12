const parents = document.querySelectorAll(".parent");

parents.forEach(el => el.addEventListener("mouseenter", function () {
    this.firstElementChild.style.display = "flex";
}));

parents.forEach(el => el.addEventListener("mouseleave", function () {
    this.firstElementChild.style.display = "none";
}));