const ParentComponent = ({children}) => {
    return (
        <div>
            <h1>To jest rodzic</h1>
            {children}
        </div>
    );
};

export default ParentComponent;
