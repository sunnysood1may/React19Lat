import { useRef } from "react";

function Uncontrolled(){
    const handleForm=(event)=>{
        event.preventDefault();
        const user = document.querySelector("#user").value;
        const password = document.querySelector("#password").value;
        console.log("handleForm",user,password);
    }

    const userRef = useRef();
    const passwordRef = useRef();

    const handleFormRef=(event)=>{
        event.preventDefault();
        const user = userRef.current.value;
        const password = passwordRef.current.value;
        console.log("handleFormRef",user,password);
    }
    return <div>
        <h4> Uncontrolled Componnet</h4>
        <form action="" method="post" onSubmit={handleForm}>
            <input type="text" id="user" placeholder="enter user name" /><br />
            <input type="password" id="password" placeholder="enter user password" /><br />
            <button>Submit</button>
        </form> <br></br>

        <h4> Uncontrolled Componnet with useRef</h4>
        <form action="" method="post" onSubmit={handleFormRef}>
            <input type="text" ref={userRef} id="userRef" placeholder="enter user name" /><br />
            <input type="password" ref={passwordRef} id="passwordRef" placeholder="enter user password" /><br />
            <button>Submit with ref</button>
        </form>
    </div>
}

export default Uncontrolled;