import { useState } from "react";

const LoginForm= () =>{
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    const functionA= (e) =>{
        setEmail(e.target.value)
    }

    const functionB=(e) =>{
        setPassword(e.target.value)
    }



    return(<>
    <label>Email</label>
    <input type="email" value={email} onChange={functionA}></input>
    <br></br>

    <label>Password</label>
    <input type="password" value={password} onChange={functionB}></input>
    <br></br> 

    <button>Submit</button>

    
    
    </>

    )
} 
export default LoginForm;
