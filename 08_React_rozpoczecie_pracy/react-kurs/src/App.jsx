import Artist from "./data/artist.js";
import Fruits from "./data/fruits.js";
import './App.css'

function App() {
// const numA = parseInt(prompt("Podaj pierwszą liczbę?"));
// const numB = parseInt(prompt("Podaj drugą liczbę?"));
// const operator = prompt("Wybierz operacje +,-,*,/?");
// let result = "";
// switch (operator) {
//     case "+":
//         result = <h1>{numA+numB}</h1>;
//         break;
//     case "-":
//         result = <h2>{numA-numB}</h2>;
//         break;
//     case "*":
//         result = <h3>{numA*numB}</h3>;
//         break;
//     case "/":
//         result = <h4>{numA/numB}</h4>;
//         break;
//     default:
//         result = <h5>Błędny wybór, spróbuj jeszcze raz</h5>;
// }
// const year = parseInt(prompt("Podaj swój rok urodzenia"));

 //Zadanie nr 2 - Atrybuty
    const randomNumber = () => {
        return Math.round(Math.random() * 9 + 1);
    }
    const randOne = randomNumber();
    const randomTwo = randomNumber();

    const sum = parseInt(prompt(`Jaka jest suma liczby ${randOne} + ${randomTwo}?`));

    const sumResult = sum === randOne + randomTwo;


    //Zadanie nr 4 - Atrybuty

    const color = prompt("Wybierz kolor red/green/blue?");
    let colorDiv = "";
    const colors = ["red", "green", "blue"];
    const isOk = colors.includes(color);
    if (isOk) {
        colorDiv = <div style={{
            width: "100px",
            height: "100px",
            borderStyle: "solid",
            borderColor: color
        }}></div>;
    }
    else {
        colorDiv = <div>Błędny wybór</div>;
    }

    return (
    <>
        <div style={{backgroundColor: sumResult ? "green" : "red"}}>
            <p>{sumResult ? "Poprawna odpowiedź" : "Niepoprawna odpowiedź"}</p>
        </div>
        {colorDiv}
        {/*<h1>{numA + numB}</h1>*/}
        {/*<h2>{new Date().getFullYear() - year}</h2>*/}
        <ul>
            <li>{Artist.nickname}</li>
            <li>{Artist.firstName}</li>
            <li>{Artist.lastName}</li>
            <li>{Artist.age}</li>
        </ul>
        {/*<div>{result}</div>*/}
        <p>Owoce: {Fruits.length}</p>
        <p>{Fruits.join("-")}</p>
    </>
  )
}

export default App
