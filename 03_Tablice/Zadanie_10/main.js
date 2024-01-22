function getEvenAverage (tab) {
    const evenTab = tab.filter(el => el % 2 === 0);
    if (evenTab.length === 0) {
        return null;
    }
    const sum = evenTab.reduce((prev,cur) => prev + cur);
    const len = evenTab.length;
    return sum/len;
}


console.log(getEvenAverage([1,2,3,4,5,6,7])) //=> 4
console.log(getEvenAverage([1,1,1,1])) //=> null
console.log(getEvenAverage([2,8,3,7,4])) //=> 4.666