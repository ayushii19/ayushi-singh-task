import React , { useState } from "react";
const Contact = () => {
    const[count , setCount] = useState(0);
    const increment = () => {
        console.log("button is clicked");
        setCount(count + 1);
    }
    const decrement = () => {
        console.log("button is clicked");
        if(count > 0){
        setCount(count - 1);
        }
    }
    return(
        <div>
            <button className ="countbtn" onClick={increment}> + </button>
            <div>
                {count}
            </div>
            <button className ="countbtn" onClick={decrement}> - </button>
        </div>
    )
}
export default Contact