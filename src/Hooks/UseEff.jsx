import { useEffect, useRef, useState } from "react";
import UCounter from "./UCounter";

function UseEff(){
    const [count,setCount] = useState(0);
    const [data,setData] = useState(0);
    const [display,setDisplay] = useState(false);

    useEffect(()=>{
        countFunction();
    },[/*count,data*/]);
    
    function countFunction(){
        console.log("countFunction",count);
    }

    const inputRef = useRef(null);
    const h1Ref = useRef(null);
    const inputHandler= ()=>{
        console.log(inputRef);
        inputRef.current.focus();
        inputRef.current.style.color = 'red';
        inputRef.current.placeholder = 'enter value';
        inputRef.current.value = "123";
    }

    const toggleHandler=()=>{
        if(inputRef.current.style.display != 'none'){
            inputRef.current.style.display = 'none';
        } else {
            inputRef.current.style.display = 'inline';
        }
    }
   
    const h1Handler=()=>{
        h1Ref.current.style.color="green";
    }

    return <div>
        <h1> useEffect Hook</h1>
        {
            display? <UCounter count={count} data={data} />: null
        }
  
        <button onClick={()=>setCount(count+1)}>Count: {count}</button>
        <button onClick={()=>setData(data+1)}>Data</button>
        <button onClick={()=>setDisplay(!display)}>Toggle</button>

        <h2>Handle Props Side Effect with useEffect in Componnet</h2>

        <h1>useRef</h1>
        <input ref={inputRef} type="text" placeholder="Enter username" />
        <button onClick={inputHandler}>Focus on Input field</button>

        <button onClick={toggleHandler}>Toggle</button>
        
        <h1 ref={h1Ref}>React Learn</h1>
        <button onClick={h1Handler}>Focus on Input field</button>

    </div>
}

export default UseEff;