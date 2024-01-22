const numbers = [1, 1000, 101, 11];

function compareNumbers(a, b) {
   return a - b;
}

console.log(numbers.sort(compareNumbers));
//console.log(numbers.toSorted(compareNumbers), "toSorted"); <= funkcja niemutacyjna (niezmieniająca oryginalnej tablicy)
console.log([8,9,2,3,11, 101].sort(compareNumbers));
console.log(numbers, "numbers");