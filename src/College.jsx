import { Link, NavLink, Outlet } from "react-router";

function College(){
    return(
        <div style={{textAlign:"center"}}>
            <h1>College Page</h1>
            <h3><Link to="/">Go Back to Home</Link></h3>
            <NavLink className="link" to="student">Student</NavLink>
            <NavLink className="link" to="department">Department</NavLink>
            <NavLink className="link" to="details">College Details</NavLink>
            <Outlet />
        </div>
    )
}

export default College;