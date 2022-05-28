import React, { useRef, useState, useContext} from 'react'
import './contact.css'
import icon1 from '../../img/icon1.png'
import icon2 from '../../img/icon2.png'
import icon3 from '../../img/icon3.png'
import emailjs from 'emailjs-com'
import { ThemeContext } from '../../context'



const Contact = () => {
    const formref = useRef()
    const [done, setDone]= useState(false)
    const theme = useContext(ThemeContext);
    const darkMode =theme.state.darkMode;
     const handlesubmit =(e)=>{
     e.preventDefault();
     emailjs.sendForm('service_eo9ytkk', 'template_ai9jtnk', formref.current, 'ibpZPUVO0HFJ18nFl')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <div className='c'>
     <div className='c-bg'></div>
     <div className='c-wrapper'>
         <div className='c-left'>
             <h1 className='c-tittle'> Lets discuss with us</h1>
         <div className='c-info'>
           <div className='c-info-item'>
               <img className='c-icon' src={icon1}/>-0141962743
           </div>
           <div className='c-info-item'>
               <img className='c-icon' src={icon2}/>reactproject@email.com
           </div>
           <div className='c-info-item'>
               <img className='c-icon' src={icon3}/>P-No.: 007,Jaipur,Rajasthan India.
           </div>
         </div>
         </div>
           <div className='c-right'>
           <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
           </p>
           <form ref={formref} onSubmit={handlesubmit}>
               <input style={{backgroundColor: darkMode && "#333"}} type='text' placeholder='name' name='user_name' />
               <input style={{backgroundColor: darkMode && "#333"}} type='text' placeholder='subject' name='user_subject' />
               <input style={{backgroundColor: darkMode && "#333"}} type='text' placeholder='email' name='user_email' />
               <textarea style={{backgroundColor: darkMode && "#333"}} rows='5' placeholder='message' name='message'/>
               <button>submit</button>
               {done && 'Thank You.. '}



           </form>
          </div>
     </div>





    </div>
  )
}

export default Contact