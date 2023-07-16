import { useState } from "react"

const Form= () => {
    const [firstName, setFirstName]= useState("");
    const [lastName, setLastName]=useState("");
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const functionA=(e) =>{
        setFirstName(e.target.value)
    }

    const functionB=(e) =>{
        setLastName(e.target.value)
    }

    const functionC=(e) =>{
        setEmail(e.target.value)
    }

    const functionD=(e) =>{
        setPassword(e.target.value)
    }

    const validate=(e) =>{
        e.preventDefault()
        if(firstName==""&&firstName.length<=4) {
            alert("First name should be longer than 4 characters")

        }
        if(password==""||password.length<=5) {
            alert('password must be longer than 5')
        }
    }



    
    return(
    <> <form>
        <label> First Name </label>
        <input type="text" value={firstName} onChange={functionA} ></input>
        <br></br>
        
        <label> Last Name: </label>
        <input type="text" value={lastName} onChange={functionB}></input>
        <br></br>

        <label> Email Id: </label>
        <input type={"email"} value={email} onChange={functionC} ></input>
        <br></br>

        <label> Password: </label>
        <input type="password" value={password} onChange={functionD}></input>
        <br></br>

        <button onClick={validate}>Submit</button>

       
        </form>



         </>

    )

}
export default Form