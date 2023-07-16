import { useState } from "react"

const Si=() =>{
    const [p, setP] = useState(0);
    const [t, setT] = useState(0);
    const [r, setR] = useState (0);
    const [Si,setSi]= useState (0);


return (<div>
    <label>Principle:</label>
    <input type="number">
        <br></br>

        <label>Time:</label>
        <input type="Number"></input>
        <br></br>

        <label>Rate:</label>
        <input type="Number"></input>
        <br></br>

    </input>
</div>
)
}
export default Si;