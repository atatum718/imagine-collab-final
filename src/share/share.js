import React from "react";
import facebook from "../share/imgs/facebook.png";
import twitter from "../share/imgs/twitter.png";


function Share (){

    return (
        <>
        <div>
            <img  src={facebook} alt=""/>
        </div>
        <div>
            <img src={twitter} alt=""/>
        </div>
       
        </>
    )
}



export default Share