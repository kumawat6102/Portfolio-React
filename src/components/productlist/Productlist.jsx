import React from 'react'
import './productlist.css'
import Product from '../product/Product'
import m2 from '../../img/m2.png'
import m1 from '../../img/m1.png'
import m3 from '../../img/m3.png'
import m4 from '../../img/m4.png'
import m5 from '../../img/m5.png'
import m6 from '../../img/m6.png'



const Productlist = () => {
  return (
    <div className='pl'>
    <div className='pl-texts'>
        <h1 className='pl-tittle'>Create and inspire it</h1>
        <p className='pl-desc'>
        Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
    </div>
    <div className='pl-list'>
        <Product img={m1}/>
        <Product img={m2}/>
        <Product img={m3}/>
        <Product img={m4}/>
        <Product img={m5}/>
        <Product img={m6}/>

        
        
    </div>
 
    </div>
  ) 
}

export default Productlist