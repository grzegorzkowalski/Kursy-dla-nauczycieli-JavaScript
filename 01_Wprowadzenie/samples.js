//Liczby (Number)
let age = 36;
// Tekst (String)
const name = "Grzegorz";
// Wartości logiczne (Boolean)
const isProgrammer = true;
// Wartości specjalne
const hasCat = null;
const isHappy = undefined;

//Obiekt
const user = {
    id: 1,
    name: "Grzegorz",
    surname: "Kowalski",
    age: 36,
    email: "grzegorzkowalski@yahoo.com",
    dogs: ["Szogi👴", "Mamba👼"]
};

const age2 = "age";
console.log(user);

//Pobieranie
console.log(user.age);
console.log(user["age"]);
console.log(user[age2]);
const age3 = user.age;
console.log(age3, "age3");

user.age = 37;
console.log(user.age, "spodziewam się 37")
delete user.age;
console.log(user.age, "spodziewam się, że nie ma")

//Próba nadpisania obiektu dla const nieudana
//user = {};
//console.log(user);
user.car = "Dodge";
console.log(user);

//Tablica
const favouriteFruits = ["wiśnie", "czereśnie", "mandarynki"];

/*
Jest to tak zwany komentarz blokowy.
Między tymi znacznikami wszystko jest zakomentowane.
*/

// To jest komentarz liniowy - wszystko w tej linii będzie w komentarzu.

