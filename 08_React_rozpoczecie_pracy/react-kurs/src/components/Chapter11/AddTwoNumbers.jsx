import React, {useEffect, useState} from 'react';

const AddTwoNumbers = () => {
    const [numberA, setNumberA] = useState(0);
    const [numberB, setNumberB] = useState(0);
    const [result, setResult] = useState(0);

    useEffect(() => {
        if (!isNaN(parseInt(numberA)) && !isNaN(parseInt(numberB))) {
            setResult(parseInt(numberA) + parseInt(numberB));
        }
        else {
            setResult("Podaj dwie liczby.");
        }
    }, [numberA, numberB]);

    return (
        <form>
            <h1>{result}</h1>
            <input
                value={numberA}
                onChange={e => setNumberA(e.target.value)}
            />
            <input
                value={numberB}
                onChange={e => setNumberB(e.target.value)}
            />
        </form>
    );
};

export default AddTwoNumbers;
