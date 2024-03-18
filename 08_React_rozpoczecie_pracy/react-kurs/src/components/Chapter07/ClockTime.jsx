import React from 'react';

const ClockTime = ({time}) => {
    return (
        <div>
            <h2>{time}</h2>
            {true && <h2>test true</h2>}
            {false && <h2>test false</h2>}
        </div>
    );
};

export default ClockTime;
