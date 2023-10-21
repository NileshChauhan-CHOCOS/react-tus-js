import React from "react";
import { useState } from "react";
export default counter = ()=>{
    const [count, setCount] = useState(0);
    const handleClick = ()=>{
        setCount(count + 1);
    }
    return(
        <>
        <button onClick={handleClick}>
            You pressed me {count} times
        </button>
        </>
    );
}