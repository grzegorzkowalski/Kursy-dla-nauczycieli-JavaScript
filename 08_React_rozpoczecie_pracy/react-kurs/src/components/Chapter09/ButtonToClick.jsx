import React from 'react';

const ButtonToClick = ({setCounter}) => {
    const updateState = () => {
        if (typeof setCounter === "function") {
            setCounter();
        }
    }

    return <button onClick={updateState}>Klik</button>
};

export default ButtonToClick;
