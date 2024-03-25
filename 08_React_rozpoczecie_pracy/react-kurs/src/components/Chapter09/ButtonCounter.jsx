import React, {useState} from 'react';
import ButtonToClick from "./ButtonToClick";

const ButtonCounter  = () => {
    const [counter, setCounter] = useState(0);

    const clickHandler = () => {
        setCounter(prev => prev + 1);
    }

    return (
        <div>
            <h1>{counter}</h1>
            <ButtonToClick setCounter={clickHandler} />
        </div>
    );
};

export default ButtonCounter ;
