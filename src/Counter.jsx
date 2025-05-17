import { useState } from "react";

const Counter=()=>{
    const [count,setCount] = useState(0);
    const [display, setDisplay] = useState(true);
    return(
        <div>
            <h1>Counter: {count}</h1>
            <button 
                onClick={()=>setCount(count+1)}>
            Update counter</button> <br /><br />

            <button onClick={()=>setDisplay(!display)}>Togglle</button><h2>Toggle in React</h2>
            {
                display? <h3>Sunny</h3>: null
            }

            <h2>Multiple condition in React</h2>
            {
                count == 0?<h2>Condition 0</h2>
                :count == 1?<h2>Condition 1</h2>
                :count == 2?<h2>Condition 2</h2>
                :count == 3?<h2>Condition 3</h2>
                :count == 4?<h2>Condition 4</h2>
                :<h2>Other condition</h2>
            }

            


        </div>
    )
}

export default Counter;