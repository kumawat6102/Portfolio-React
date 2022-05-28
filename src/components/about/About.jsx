 import React from 'react'
 import "./about.css"
 import about from "../../img/about.png"
 import Award from '../../img/award.png'
 const About = () => {
   return (
     <div className='a'>
       <div className='a-left'>
           <div className='a-card bg'> </div>
           <div className='a-card'>
               <img className='a-img' src={about}/>
           </div>
       </div>
       <div className='a-right'>
       <h1 className="a-title">About Me</h1>
       <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">Website design has become way with the number of ready-made design templates surfacing online. All one has to do is purchase a template and get it done. Yes, it saves a lot of time, but then, in the long run, the options that you’d need for having your brand stand out is not available in the template sites. It would look static and appear stale over a period of time.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title"> Design Awards 2022</h4>
            <p className="a-award-desc">
            
            </p>
          </div>
        </div>
      
       
       </div>

     </div>
   )
 }
 
 export default About