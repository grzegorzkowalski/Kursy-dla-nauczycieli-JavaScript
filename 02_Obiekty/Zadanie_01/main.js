//W zmiennej car utwórz obiekt opisujący samochód.
// Ma on mieć następujące atrybuty:
// type o wartości "sedan" color o wartości "green" engine o wartości 2.5
// Stwórz zmienną carDescription. Ma ona zawierać informacje o obiekcie poprzez konkatenację (z wykorzystaniem spacji)
// z wartości w jego atrybutach type, color, engine (należy użyć operatora + do konkatenacji).
// Wyświetlcie zmienną carDescription w konsoli. Wynik:
//
// sedan green 2.5

const car = {
    type: "sedan",
    color: "green",
    engine: 2.5,
    carDescription: function () {
        console.log(this.type + " " + this.color + " " + this.engine);
    }
}

car.carDescription();