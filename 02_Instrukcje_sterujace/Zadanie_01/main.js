const jan = 30;

if (jan >= 15) {
    console.log("Zdane!")
}
else {
    console.log("Niezaliczone");
}

const tab = [30, 10, 16];
//pierwszy element tablicy tab[0]
//drugi element tab[1]

// długość tablicy tab.length => 3
// ostatni element tablicy tab[tab.length - 1]

for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
    if (tab[i] >= 15) {
        console.log("Zdane!")
    }
    else {
        console.log("Niezaliczone");
    }
}
