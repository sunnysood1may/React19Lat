function Wrapper({ children }) {
    return (
        <div className="wrapper" style={{color:"green",
            border:'5px solid green',
            width: '300px'
        }}>
            {children}
        </div>
    );
}

export default Wrapper;