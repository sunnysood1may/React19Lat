import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router";

function College() {
  const [carStyle, setCarStyle] = useState({
    border: "1px solid gray",
    color: "red",
    background: "pink",
    width: "200px",
  });

  const [textColor,setTextColor] = useState("red");
  const [grid,setGrid] = useState(true);

  const updateTheme=(bgColor,textColor)=>{
    setCarStyle({...carStyle,
        background:bgColor,color:textColor
    });
    setTextColor(textColor);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "red", background: "yellow" }}>College Page</h1>
      <h3>
        <Link to="/">Go Back to Home</Link>
      </h3>
      <NavLink className="link" to="student">
        Student
      </NavLink>
      <NavLink className="link" to="department">
        Department
      </NavLink>
      <NavLink className="link" to="details">
        College Details
      </NavLink>
      <Outlet />

      <div style={{ display: grid?'flex':'block', flexWrap: "wrap" }}>
        <h1 style={carStyle}>Car Page</h1>
        <h1 style={carStyle}>Car Page</h1>
        <h1 style={carStyle}>Car Page</h1>
        <h1 style={carStyle}>Car Page</h1>
        <h1 style={carStyle}>Car Page</h1>
      </div>
      <button onClick={()=>updateTheme('gray','green')}>Gray theme</button>
      <button onClick={()=>updateTheme('white','black')}>Default theme</button>

      <button onClick={()=>setGrid(!grid)}>Toggle grid</button>
    </div>
  );
}

export default College;
