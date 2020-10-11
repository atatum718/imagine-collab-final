import React from "react";
import "../Share/share-screen.css";
import facebook from "../Share/imgs/facebook.png";
import logo from "../Share/imgs/Imgine_logo_neon_1.png";
import twitter from "../Share/imgs/twitter.png";
import Social from "../Share/share components/Social";

function  share (){
  
   
  

    return (
      <div>
        <div>
        <img src={facebook} alt=""/>
         </div>
         <div>
             <img src={twitter}alt=""/>
         </div>
      </div>
    );
  
}
export default Share;