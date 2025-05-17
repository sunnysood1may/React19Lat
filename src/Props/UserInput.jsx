/*import { forwardRef } from "react";
const UserInput=(props,ref)=>{
    return (<div>
        <input type="text" ref={ref} style={{ width: '300px', border: '1px solid gray' }} />
    </div>)
}
export default forwardRef(UserInput);*/

const UserInput=(props)=>{
    return (<div>
        <input type="text" ref={props.ref} style={{
            border: '1px solid green'
        }} />
    </div>)
}

export default UserInput;