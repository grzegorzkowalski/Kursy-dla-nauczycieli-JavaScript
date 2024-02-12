//Zadanie 1
const header = document.querySelector(".about-blog__content-title");
console.log(header);

const picture = document.querySelector("img");
console.log(picture);

const blogForm = document.querySelector("form");
console.log(blogForm);

const mail = document.querySelector(".e-mail a");
console.log(mail);

//Zadanie2

const galleryItems = document.querySelectorAll(".gallery-main-photo");
console.log(galleryItems);
const galleryArray = Array.from(galleryItems);
console.log(galleryArray, "galleryArray");
//galleryItems.forEach(el => console.log(el));

//Zadanie 3

console.log(header.textContent);
header.textContent = "Hello world!";
console.log(picture.tagName, "tagName");
const wwsiLogo = "https://wwsi.edu.pl/wp-content/themes/hello-theme-child-master/assets/imgs/logo-300x81.png";
picture.setAttribute("src", wwsiLogo);

//Dokończyć wspólnie od podpunktu 4
console.log(blogForm.innerHTML, "formularz");
mail.setAttribute("href", "mailto:gk@wp.pl");
console.log(mail, "mail");

const headerClassname = header.className;
const headerClasslist = header.classList;
console.log(headerClassname);
console.log(headerClasslist[0]);
header.className = "";
console.log(header.className);
header.classList.remove("about-blog__content-title");
console.log(header.classList);

const title = document.querySelector(".first-article__text-title");
//title.className += " " + headerClassname;
title.classList.toggle(headerClassname);
title.classList.toggle("first-article__text-title");

//Zdanie 4

const newLi = document.createElement("li");
const newA = document.createElement("a");
newA.href = "https://wwsi.edu.pl";
newA.textContent = "WWSI";
newLi.append(newA);
const menu = document.querySelector("ul");
menu.append(newLi);
menu.style.width = "80%";

//Zadanie 5

const elementToCopyList = document.querySelectorAll("ul li");
const dotToCopy = elementToCopyList[0].cloneNode(true);
const liToCopy = elementToCopyList[1].cloneNode(true);
console.log(dotToCopy, "skopiowana kropka");
console.log(liToCopy, "skopiowane li");

liToCopy.querySelector("a").href = "https://wp.pl";
liToCopy.querySelector("a").textContent = "wp.pl";
menu.append(dotToCopy);
menu.append(liToCopy);

//Zadanie 6

const elToDel = document.querySelector(".about-me-title");
console.log(elToDel);
elToDel.remove();

//Zadanie 1
// Wykorzystaj selektor nagłówka, który utworzyliśmy w poprzednim rozdziale.
//
// Za jego pomocą zmień kolor nagłówka na dowolny wybrany,
// powiększ rozmiar fontu i dodaj podkreślenie.
console.log(header, "nagłówek");
console.log(header.style, "header.style");
header.style.color = "deeppink";
header.style.fontSize = "36px";
header.style.textDecoration = "underline";

//Zadanie 2

const formButton = document.querySelector(".form-button");
formButton.addEventListener("click", function () {
    console.log(this);
    blogForm.classList.add("hide");
    const text = document.createElement("h3");
    text.innerText = "Wiadomość została wysłana";
    text.className = "about-blog__content-title";
    blogForm.before(text);
});

//Zadanie 3

const laosHeader = document.querySelector(".about-blog__content--welcome-text p");
console.log(laosHeader);
laosHeader.style.color = "deeppink";
document.querySelector(".about-blog__content--welcome-text")
    .previousElementSibling.style.backgroundImage = "url(https://www.state.gov/wp-content/uploads/2019/04/Laos-2500x1406.jpg)";
