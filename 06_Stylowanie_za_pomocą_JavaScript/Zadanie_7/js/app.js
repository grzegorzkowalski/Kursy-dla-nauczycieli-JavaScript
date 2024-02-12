const btn1 = document.querySelector("#button1");
const counters = document.querySelectorAll(".counter");
counters.forEach(el => el.style.color = "black");
btn1.addEventListener("click", function() {
    let el = this.previousElementSibling.children[0];
    console.log(el);
    let currentValue = parseInt(el.innerText);
    currentValue += 1;
    el.innerText = currentValue;
});