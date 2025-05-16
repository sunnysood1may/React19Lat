import { useState } from "react";
import Counter from "./Counter";

function State(){
    const [fruit, setFruit] = useState("apple");
    const [count, setCount] = useState(10);

    const handleFruit=()=>{
        setFruit("banana");
    }

    return <div>
        <h2>State in React</h2>
        <h2>{ fruit }</h2>
        <button onClick={handleFruit}>Change fruit</button>
        <Counter />
    </div>
}

export default State;