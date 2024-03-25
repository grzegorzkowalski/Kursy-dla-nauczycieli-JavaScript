import React from 'react';

const NumberInfo = ({number}) => {
    function isPrime(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        let sqrt = Math.sqrt(num);
        for (let i = 2; i <= sqrt; i++)
            if (num % i === 0) return false;
        return true;
    }

    function powerOfTwo(x) {
        return Math.log2(x) % 1 === 0;
    }

    return (
        <ul>
            <li>{number}</li>
            <li>{number % 2 === 0 ? "Parzysta" : "Nieparzysta"}</li>
            {isPrime(number) && <li>Liczba pierwsza</li>}
            {powerOfTwo(number) && <li>Potęga liczby 2</li>}
        </ul>
    );
};

export default NumberInfo;
