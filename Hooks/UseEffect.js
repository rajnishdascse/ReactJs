import React, {useState,useEffect} from 'react'
import "./style.css";

const UseEffect = () => {
    const initialState = 0;
    const [myNum, setMyNum] = useState(initialState);
    useEffect(() => {
        document.title = `Chats(${myNum})`;
    })
    return (
        <>
            <div className="center-div">
                <p>{myNum}</p>
                <div className="button2" onClick={()=>setMyNum(myNum+1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Increment
                </div>
            
            </div>
        </>
    )
}

export default UseEffect;