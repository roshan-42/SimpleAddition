import { useState } from "react";

const Add = () => {
    const [a, setA]=useState(0); //first: Variable, setFirst: Variable set garney funtion
    const [b,setB]=useState(0);
    const [sum, setSum]=useState(0);

    const functionA=(e) =>{
        setA(e.target.value);
    };

    const functionB=(e) =>{
        setB(e.target.value);
    }
function calcSum(){
    // let result;
    // result= a+b;
    setSum(a+b);
    // setSum(result);
}
return(
    <div>
        <label> First Number:</label>
        <input type='text' value={a} onChange={functionA}  ></input>
        {/* onChange={(e) => {setA(e.target.value)} };alternative way using function  */} 

        <label> Second Number:</label>
        <input type='text' value={b} onChange={functionB}></input>

        <button onClick={calcSum}> Addition</button>
        <p> Answer:{sum}</p>
    </div>
)
}
export default Add
