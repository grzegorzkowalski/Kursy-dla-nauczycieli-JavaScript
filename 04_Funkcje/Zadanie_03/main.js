function checkFemale(name) {
    const lastChar = name[name.length-1];
    console.log(lastChar);
    return lastChar === "a";
}

console.log(checkFemale("Anna"));
console.log(checkFemale("Grzegorz"));
console.log(checkFemale("Ryszard"));