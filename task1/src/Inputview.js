import React, { useState } from 'react';

const Inputview = (props) => {
    
    return(
        <div><input type="text" placeholder="Enter Something" onChange={(e) => props.setValue(e.target.value)}></input>
        </div>
    )
}

export default Inputview