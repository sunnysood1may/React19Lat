import { useRef } from "react";
import PassFuncChild from "./PassFuncChild";
import { Button, Form } from "react-bootstrap";
import UserInput from "./UserInput";

function PassFunc(){
    const displayName=(name)=>{
        alert(name);
    }
    const getUser=()=>{
        alert("get user function called");
    }
    const inputRef = useRef(null);
    const updateInput=()=>{
        inputRef.current.value = 1000;
        inputRef.current.focus();
        inputRef.current.style.color = "red";
    }
    return <div>
        <h4> Call Parent Component Function from child Component</h4>
        <PassFuncChild displayName={displayName} name="sunny" clickUser={getUser} />
        <PassFuncChild displayName={displayName} name="shilpa" clickUser={getUser} />
        <PassFuncChild displayName={displayName} name="shobhit" clickUser={getUser} />

        <h1>Forward Ref</h1>
       
        <UserInput ref={inputRef} />
        <Button onClick={updateInput}>Update Input Field</Button>

    </div>
}

export default PassFunc;