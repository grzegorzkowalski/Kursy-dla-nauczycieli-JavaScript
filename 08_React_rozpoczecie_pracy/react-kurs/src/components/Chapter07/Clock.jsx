import {useState, useEffect} from 'react';
import ClockTime from "./ClockTime";
import ClockDate from "./ClockDate";

const Clock = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => {
            setDateTime(new Date());

        }, 1000);

        return () => clearInterval(id);
    }, []);

    return (
        <div>
            <ClockTime time={dateTime.toLocaleTimeString()} />
            <ClockDate date={dateTime.toLocaleDateString()} />
        </div>
    );
};

export default Clock;
