import style from './assets/user.module.css';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';

function Login(){
    const Head = styled.h3`
        border: 1px solid gray;
        color: red;
        font-weight: 600;
        margin-top: 10px;`
    ;

    const StyleBtn = styled.button`
        border: 1px solid gray;
        color: green;
        width: 130px;
        height: 40px;
        margin-top: 20px;
    `;
    
    return (
        <div>
            <h1 className={style.heading}>Login User</h1>
            <Head>Style components</Head>
            <StyleBtn>Button component</StyleBtn><br />
            <Button>Ok</Button>
            <Alert onClick={()=>alert("Success")} variant="success">Hello, BT installed</Alert>
            <Alert variant="warning">Hello, BT installed</Alert>
            <Alert variant="danger">Hello, BT installed</Alert>
        </div>
    )
}
export default Login

export function Profile(){
    return (
        <div>
            <h2>Profile</h2>
        </div>
    )
}

export function Setting(){
    return (
        <div>
            <h2>Setting</h2>
        </div>
    )
}

export const UserKey = "@##$#$##$#$#$";