import { useState } from "react";

function Controlled(){
    const [name,setName] = useState();
    const [password,setPassword] = useState();
    const [email,setEmail] = useState();

    const [skills, setSkills] = useState([/*'php','js','node','java'*/]);

    const handleSkills = (event) => {
        if (event.target.checked) {
            setSkills([...skills, event.target.value]);
        } else {
            setSkills(skills.filter((item) => item !== event.target.value))
        }
    }

    const [gender,setGender] = useState('female');
    const [city,setCity] = useState('delhi');

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    return <div>
        <h2> Controlled Component</h2>
        { /*<form action="" method="get"> */ }
            <input type="text" value={name}
            onChange={(event)=>setName(event.target.value)} 
            placeholder="Enter name" />{name}<br /><br />
            <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter password" />{password}<br /><br />
            <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter email" />{email}<br /><br />

            <button>Submit</button><br /><br />

            <button onClick={()=>{setName('');setPassword('');setEmail('');}}>Clear</button>

        { /*</form> */ }

        <h2>Handle Checkbox</h2>
        <h3>Select your skills</h3>
        <input onChange={handleSkills} type="checkbox" id="php" value="php" />
        <label htmlFor="php">PHP</label>

        <input onChange={handleSkills} type="checkbox" id="js" value="js" />
        <label htmlFor="js">JS</label>

        <input onChange={handleSkills} type="checkbox" id="node" value="node" />
        <label htmlFor="node">Node</label>

        <input onChange={handleSkills} type="checkbox" id="java" value="java" />
        <label htmlFor="java">Java</label>

        <h4>{skills.toString()}</h4>

        <h2>Handle Radio andDropdown</h2>
        <h3>Select gender: {gender}</h3>
        <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" value="male" checked={gender=='male'} id="male" />Male
        <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" value="female" checked={gender=='female'} id="female" />Female
        <br />

        <h4>Select city: {city}</h4>
        <select value={city} onChange={handleCityChange}>
            <option value="noida">Noida</option>
            <option value="gurgaon">Gurgaon</option>
            <option value="delhi">Delhi</option>
        </select>

    </div>
}

export default Controlled;