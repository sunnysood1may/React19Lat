import { Link, useParams } from "react-router";

function UserDetail(){
    const paramsData = useParams();
    console.log(paramsData);

    return (
        <div style={{ marginLeft: 20 }}>
            <h1>UserDetail page</h1>  
            <h2>User id is: {paramsData.id || "N/A"}</h2>   
            {paramsData.name && <h2>User name is: {paramsData.name}</h2>   }
            <h3><Link to="/users">Back</Link></h3>    
        </div>
    )
}

export default UserDetail;