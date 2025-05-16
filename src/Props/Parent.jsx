import { useState } from "react";
import Child from "./Child";
import Wrapper from "./Wrapper";

function Parent(){

    const [uname, setName] = useState("Shilpa");
    //let uname = "shilpa";
    let age = 29;
    let email = "shilpa@test.com";

    let userObj1 = {
        uname: "sunny",
        age: 39,
        email: "sunny@test.com"
    }
    let userObj2 = {
        uname: "shobhit",
        age: 5,
        email: "shobhit@test.com"
    }

    const updateName = ()=>{
        setName("Sood");
    }

    return <div>
        <h2> Props in React</h2>
        <h2>{uname}</h2>
        <Child user = {userObj1} name={uname} age={age} email = {email} />
        <Child user = {userObj2} />
        <button onClick={updateName}>Update Name</button>
        
        <Wrapper>
    <h2 style={{color: 'red'}}>Hello 1</h2>
</Wrapper>

<Wrapper>
    <h2 style={{color: 'red'}}>Hello 2</h2>
</Wrapper>

    </div>
}

export default Parent;