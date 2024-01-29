function checkPalindrom(txt) {
    const reverse = txt.split("").reverse().join("");
    console.log(reverse);
    return txt.toLowerCase() === reverse.toLowerCase();
}

console.log(checkPalindrom("Grzegorz"));
console.log(checkPalindrom("Ala"));
console.log(checkPalindrom("kajak"));