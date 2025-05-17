import { useState } from "react";

function About(){
    const [val,setVal] = useState("sunny s");
    return (
        <>
            <h1>About</h1>
            <h2>Get input field value: {val}</h2>
            <input type="text" value={val} onChange={(event)=>
                setVal(event.target.value)
            } placeholder="enter your name" /> <br />

            <button onClick={()=>setVal("")}>Clear value</button>
        </>
    )
}

export default About;