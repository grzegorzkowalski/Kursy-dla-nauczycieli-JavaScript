const btns = document.querySelectorAll(".btn");

console.log(btns);

//Ustawianie koloru dla elementu counter
document.querySelector(".counter").style.color = "black";

btns.forEach(el => {
    el.addEventListener("click", function () {
        const spanEl = this.parentElement.querySelector("span");
        console.log(spanEl);
        spanEl.innerText = parseInt(spanEl.innerText) + 1;
        console.log(spanEl);
    });
})