import React from "react";
import {NavLink} from "react-router-dom";
import homeimg from"../Images/homeimg.png";

const About=()=>{
    return(
        <div>
      <div className="mainSection">
        <div className="contentBox">
          <h1>Know</h1>
          <p>Your Bank</p>
          <div className="btnBox">
            <div className="btn">
              <NavLink to="/" className="readMore">
                ReadMore
              </NavLink>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <img src={homeimg} alt="home"/>
          </div>
      </div>
    </div>
    )
}

export default About;