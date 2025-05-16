import { useEffect } from "react";

const UCounter=({count, data})=>{

    const handleCounter=()=>{
        console.log("handleCounter called");
    }
    const handleData=()=>{
        console.log("handleData called");
    }

    useEffect(()=>{
        //handleCounter();
        //handleData();
        console.log("mounting phase only");
    },[]);

    useEffect(()=>{
        console.log("update phase only");
    },[count]);

    useEffect(()=>{
        return () =>{
            console.log("unmount phase only");
        }
    },[]);

    return (
        <div>
            <h1>Counter Value {count}</h1>
            <h1>Data Value {data}</h1>
        </div>
    )
}

export default UCounter;