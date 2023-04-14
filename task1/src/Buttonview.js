import React, { useState } from 'react';
import Inputview from './Inputview.js';

const Buttonview = (props) => {
        const [showHide , setShowHide] = useState(false);
    return(
        <div>
            <button type="submit" onClick={() => setShowHide (true)}> Submit </button>
            <div>
            {showHide && props.value}
            </div>
        </div>
    )
    }

export default Buttonview