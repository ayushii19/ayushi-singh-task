import React, { useEffect, useState } from "react";
const Places = () => {

    const [ data, setData ] = useState( [] );

    useEffect(() => {
        fetch("https://api.github.com/users").then((response)=>response.json()).then((data)=>{setData( data )})
    }, [])

    return(
        <div>
           { data.map( ( x ) => {
            return <div>
                <span>{x.id}</span>
                <span>{x.login}</span>
            </div>
           } ) } 
        </div>
    )
}
export default Places