import React from "react";
import "./Intro.css";
import intro2 from "../../img/intro2.png"


const Intro = () => {
  return (
    <div className="i">
    <div className="i-left">
     <div className="i-left-wrapper">
          <h2 className="i-intro"> Hello My Name is</h2>
          <h1 className="i-name">Abhishek Kumawat</h1>
          <div className="i-tittle">
              <div className="i-tittle-wrapper">
                  <div className="i-tittle-item">web Developer</div>
                  <div className="i-tittle-item">UI/UX desiner</div>
                  <div className="i-tittle-item">Javascript Developer</div>
                  <div className="i-tittle-item">MERN stack Developer </div>
                  <div className="i-tittle-item">Photographer</div>
              </div>
          </div>
          <div className="i-desc">I am a positive, enthusiastic and competent Web Developer who, over the years, has built up a diverse range of skills, qualities and attributes that guarantee I will perform highly in this role.</div>
        </div> 
          
    </div>  
    <div className="i-right">
        <div className="i-bg"> 
        <img alternate="" className="i-img" src={intro2}/>
     
        </div>
     
    </div>    
    </div>
  )
}

export default Intro