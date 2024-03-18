import {useState, useEffect} from 'react';

const StrobeLight = ({color, frequency}) => {
    const [bgColor, setBgColor] = useState("white");

    useEffect(() => {
        const id = setInterval(() => {
            setBgColor(prevState => {
                if (prevState === "white") {
                    return color;
                }
                else {
                    return "white";
                }
            })
        }, frequency);
    }, []);

    return (
        <div style={{
            width: "500px",
            height: "500px",
            backgroundColor: bgColor
        }} />
    );
};

export default StrobeLight;
