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