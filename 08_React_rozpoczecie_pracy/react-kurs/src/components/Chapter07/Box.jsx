import {useState, useEffect} from "react";

const Box = () => {
    const [color, setColor] = useState("green");

    useEffect(() => {
        const intervalID = setInterval(() => {
            setColor(prev => {
                if (prev === "green") {
                    return "red";
                }
                else {
                    return "green";
                }
            })
            return () => clearInterval(intervalID);
        }, 3000);
    }, []);

    return (
        <div
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: color}}
        />
    );
};

export default Box;
