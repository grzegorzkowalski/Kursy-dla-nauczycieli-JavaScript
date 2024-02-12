//Zadanie 1

const getSecondMaxNumber = (arr) => {
    if (arr.length < 2) return false;
    return [...arr].sort((a,b) => b - a)[1];
}

const arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9];
console.log(getSecondMaxNumber(arr1));
console.log(getSecondMaxNumber([33]));
//Wynik w consoli: 49