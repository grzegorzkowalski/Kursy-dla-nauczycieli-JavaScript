function addToNumbers(a=1,b=3) {
    console.log(a + b);
}

const addToNumbers2 = function (a,b) {
    return a + b;
}

addToNumbers(1,2);
addToNumbers(1);
console.log(addToNumbers2(1,2,3));

const sum = addToNumbers(1,2);
console.log(sum, "sum");

const sum2 = addToNumbers2(1,2);
console.log(sum2, "sum2");

//Napisz funkcję countWord(txt),
// która wymagać będzie tekstu.
// Funkcja powinna zwrócić liczbę słów
// z ilu składa się przekazany tekst.
// Następnie użyj jej do wypisania tekstu:
// "Tekst: 'tutaj twój przykładowy tekst' składa się z 4 wyrazów".
// Przykładowy tekst pobierz od użytkownika
// za pomocą funkcji prompt().
// Jeżeli użytkownik nic nie wpisze,
// wypisz w konsoli tekst nie mam co liczyć.

function countWord(txt) {
    console.log(txt);
    if (txt === null || txt === "") {
        return "Nie mam co liczyć."
    }
    const tab = txt.split(" ");
    console.log(tab);
    return "Tekst: " + txt + " składa się z " + tab.length + " wyrazów."
}

const textFromUser = prompt("Wpisz jakieś zdanie");
console.log(countWord(textFromUser));
