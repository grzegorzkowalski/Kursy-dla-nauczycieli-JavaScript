import React, {useEffect, useState} from 'react';

const BookInfo = ({isbn}) => {
    const [title, setTitle] = useState(false);

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
            .then(response => response.json())
            .then(res => setTitle(res.items[0].volumeInfo.title));
    }, []);

    return (
        <div>
            {title && <h1>{title}</h1>}
        </div>
    );
};

export default BookInfo;
