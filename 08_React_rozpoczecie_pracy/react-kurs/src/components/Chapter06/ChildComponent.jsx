const ChildComponent = ({children}) => {
    return (
        <div>
            <h2>To jest dziecko</h2>
            {children}
        </div>
    );
};

export default ChildComponent;
