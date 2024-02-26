import './App.css'

function App() {
const numA = parseInt(prompt("Podaj pierwszą liczbę?"));
console.log(numA);
const numB = parseInt(prompt("Podaj drugą liczbę?"));
console.log(numB);

    return (
    <>
        <h1>{numA + numB}</h1>
    </>
  )
}

export default App
