import { Button } from "react-bootstrap";

function PassFuncChild({displayName,name,clickUser}){
    return <div>
        <h4> Child Component Function </h4>
        <Button onClick={()=>displayName(name)}>Display name</Button>
        <Button onClick={()=>clickUser()}>Get User</Button>
    </div>
}

export default PassFuncChild;