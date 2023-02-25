import React, { useState } from 'react'
import './Signup.css'
import avt1 from '../../images/olx_logo.png'

import { signUp } from '../../firebase'

function Signup() {


const [signupdata,setSignupdata]=useState({})


const submitsignin=()=>{

signUp(signupdata)

}


  return (
    
  <>
  <div className='container'>

<div className='signup'>

    

    <div className='sgnavt'>

        <img src={avt1} alt='error'/>
    </div>

    <div className='sgnwelcome'>
        <h3>Welcome to OLX </h3>
    </div>

<div className='sgnemail'>

<input type="text" placeholder='email' onChange={(e)=>setSignupdata({...signupdata,email:e.target.value})} />

</div>

<div className='sgnpassword'>

<input type="text" placeholder='password' onChange={(e)=>setSignupdata({...signupdata,password:e.target.value})}/>

</div>


<div className='sgnpagebutton'>
    <button onClick={submitsignin}>Signup</button>
</div>


</div>


    
    
    </div>    
    
  </>
  
    )
}

export default Signup