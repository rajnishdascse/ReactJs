import { useState } from "react";

const ChangeTitle=(props)=>{
    let [title,setTitle] = useState('JavaScript');

const readValue=(value)=>{
    setTitle(value);
}


return(
    <div>
        <h3>{title}</h3> 
        <input type='text' placeholder='Enter your text' onChange={(event)=>{
            readValue(event.target.value);
        }}/>
        
    </div>


)
}
export default ChangeTitle;

