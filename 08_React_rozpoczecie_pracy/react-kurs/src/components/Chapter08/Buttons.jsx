const Buttons = () => {

    const clickHandler = () => {
        const numA = parseInt(prompt("Podaj liczbę A?"));
        const numB = parseInt(prompt("Podaj liczbę B?"));

        console.log(numA ** numB);
        console.log(Math.pow(numA, numB));
    };

    const windowHandler = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        console.log(`Rozmiar okna to: ${width}px X ${height}px`);
    }

    return (
        <div>
            <button onClick={() => console.log("Pierwszy przycisk kliknięty")}>Klik 1</button>
            <button onClick={clickHandler}>Klik 2</button>
            <button onClick={windowHandler}>Klik 3</button>
        </div>
    );
};

export default Buttons;
