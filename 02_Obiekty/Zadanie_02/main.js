//W zmiennej color utwórz obiekt opisujący kolor.
//
// Ma on mieć następujące atrybuty:
//
// red o wartości 100 green o wartości 0 blue o wartości 50 Poprzez zmienną referenceColor zmodyfikuj wcześniej utworzony obiekt – ustaw mu:
//
// red na wartość 50 green na wartość 50

const colors = {
    red: 100,
    green: 0,
    blue: 50
}

console.log(colors);
colors.red = 50;
colors.green = 50;
console.log(colors);