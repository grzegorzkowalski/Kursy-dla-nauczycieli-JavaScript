import React, {useState} from 'react';

const Hello = () => {
    const [name, setName] = useState("Grzegorz");
    return (
        <form>
            <h1>{name}</h1>
            <input
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
        </form>
    );
};

export default Hello;
