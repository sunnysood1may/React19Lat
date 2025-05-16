import { createElement } from "react";

function JsXml(){
    const userName = "Sunny S";
    const userObj = {
        name: 'sunny',
        email: 'sunny1may@gmail.com',
        phone: 7009124980
    }
    const userArray = ['sunny','shilpa','shobhit'];
    let x = 20;
    let y = 30;
    function callFun(){
        alert("function called");
    }
    function fruit(){
        return "Apple"
    }
    function sum(a,b){
        return a+b;
    }
    function operation(a,b,op){
        if(op=="+"){
            return a+b;
        } else if(op=="-"){
            return a-b;
        }else {
            return a*b;
        }
    }
    const path = "https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found-1024x576.png";

    const games=(name)=>{
        alert(name);
    }
    return <div>
        <h1> Jsx Exercise</h1>
        <h3>Input value: <input value={userName} /></h3>
        <h2>User name : { userName ? userName: "user not found!" }</h2>
        <h2>{ x + y }</h2>
        <h3>Fruit: { fruit() }</h3>
        <h3>Sum: { sum(10,22) }</h3>
        <h3>Operation: { operation(5,6,"") }</h3>

        <button onClick={()=>alert("hello")}>Click</button>  <br />

        <img style={{width:60}} src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found-1024x576.png" />

        <ul>
            <li>message 1</li>
            <li>message 2</li>
            <li>message 3</li>
        </ul>

        <button onClick={callFun}>Click me</button> <br />

        <button onClick={() => games('cricket')}>Click game</button> <br />
        
        
        
        <h3>{userObj.name}</h3>
        <h3>{userObj['email']}</h3>

        <h3>{userArray[0]}</h3> <br />

        <img width="60" src={path} />


    
    
    </div>

    /*return createElement("div", {
            id:"rootDiv"
        }, "hello div")*/
    
    /*return createElement("div", 
        {
            id:"rootDiv"
        }, 
        createElement("h1",{class:'abc'},
            "heading tag"
        ));*/
    
    /*return(
        <div className="rootOther">Hello other</div>
    )*/
}

export default JsXml;