const animals = ["Lew", "Tygrys", "Słoń", "Żyrafa", "Niedźwiedź", "Kangur"];

function showArray (animalArr) {
    let sum = 0;
    for (let i = 0; i < animalArr.length; i++) {
        console.log(animalArr[i], "Element pętli for");
        console.log(animalArr[i].length);
        sum += animalArr[i].length;
    }

    // for (const animalArrElement of animalArr) {
    //     console.log(animalArrElement, "Element pętli for of");
    // }
    //
    // animalArr.forEach(function (el) {
    //     console.log(el, "forEach");
    // })
    return sum;
}

const animalSum = showArray(animals);
console.log(animalSum);
