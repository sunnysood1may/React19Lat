import { useEffect, useState } from "react";
import Univ from "./Univ";

const Clock = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  const [color, setColor] = useState("red");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const univData = [
    {
      name: "PU",
      city: "Chandigarh",
      website: "www.pu.com",
      student: [
        {
          name: "Sunny S",
          age: "39",
          email: "sunny@test.com",
        },
        {
          name: "shilpa S",
          age: "36",
          email: "shilpa@test.com",
        },
        {
          name: "shobhit S",
          age: "5",
          email: "shobhit@test.com",
        },
      ],
    },
    {
      name: "JNU",
      city: "Delhi",
      website: "www.jnu.com",
    },
    {
      name: "IIT Delhi",
      city: "Delhi",
      website: "www.iitdelhi.com",
    },
  ];

  return (
    <div>
      <select value={color} onChange={handleColorChange}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>

      <h4 style={{ color: color, backgroundColor: "yellow", width: "200px" }}>
        {" "}
        {time}{" "}
      </h4>

      <h2>Nested looping in Component</h2>
      {univData.map((univ, index) => (
        <div key={index}>
          <Univ colleg={univ} />
        </div>
      ))}
    </div>
  );
};

export default Clock;
