//Zadanie 1

const getSecondMaxNumber = (arr) => {
    if (arr.length < 2) return false;
    return [...arr].sort((a,b) => b - a)[1];
}

const arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9];
console.log(getSecondMaxNumber(arr1));
console.log(getSecondMaxNumber([33]));
//Wynik w consoli: 49


//Zadanie 2

const runInterval = (n = 8) => {
    if (n < 1 || n > 10) {
        console.log(`Wartość n = ${n} nieprawidłowa.`);
        return false;
    }
    let i = 0;
    const intervalID = setInterval(() => {
        if (i < n) {
            console.log("Hello World!");
            i++;
        }
        else {
            clearInterval(intervalID);
        }

    }, 500);
}

runInterval(5);

//Zadanie 3

const pages = ["google", "twitter", "facebook"];

const generateLinks = (arr) => arr.map(el => "https://" + el + ".com");

console.log(generateLinks(pages), "links");

const insertLinks = (tab, container) => {
    const links = tab.map(el => {
        const newLi = document.createElement("li");
        const newA = document.createElement("a");
        newA.href = el;
        newA.innerText = el;
        newLi.append(newA);
        console.log(newLi);
        return newLi;
    });
    links.forEach(link => {
        container.append(link);
    });
};

const list = generateLinks(pages);
const menu = document.querySelector("#menu");
insertLinks(list, menu);