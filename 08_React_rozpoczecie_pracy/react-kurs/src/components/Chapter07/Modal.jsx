import {useState, useEffect} from 'react';

const Modal = ({heading}) => {
    const [start, setStart] = useState(false);

    useEffect(() => {
        const id = setTimeout(() => {
            setStart(true);
        }, 5000);

        return () => clearTimeout(id);
    }, []);

    return (
        <div>
            {start && <h1>{heading}</h1>}
        </div>
    );
};

export default Modal;
