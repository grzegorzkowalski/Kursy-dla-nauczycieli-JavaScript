const ShowUserFunc = ({name, surname}) => {

    const clickHandler = (e, el1, el2) => {
        console.log(e, "to jest obiekt eventu");
        console.log(el1, el2);
    }

    return (
        <div>
            <button onClick={(e) => clickHandler(e, name, surname)}>Dane użytkownika</button>
        </div>
    );
};

export default ShowUserFunc;
