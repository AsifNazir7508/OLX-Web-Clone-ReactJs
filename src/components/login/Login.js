import React from 'react'
import { useState } from 'react'
import './Login.css'
import avt1 from '../../images/olx_logo.png'
import { signIn } from '../../firebase'
//import swal from 'sweetalert2'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

function Login() {


const [signindata,setSignindata]=useState({})

const navigate=useNavigate()

const handlesignin=async()=>{

    let result=await signIn(signindata)

    if(result.success){

        Swal.fire({
            title: 'Success!',
            text: result.message,
            icon: 'success',
            confirmButtonText: 'Cool'
        })


    }

    else{

        
        Swal.fire({
            title: 'Error!',
            text: result.message,
            icon: 'error',
            confirmButtonText: 'Cool'
        })

    }
    

}


  return (
<>

<div className='container'>

<div className='login'>

    

    <div className='logavt'>

        <img src={avt1} alt='error'/>
    </div>

    <div className='loginwelcome'>
        <h3>Welcome to OLX </h3>
    </div>

<div className='loginemail'>

<input type="text" placeholder='email' onChange={(e)=>setSignindata({...signindata,email:e.target.value})}/>

</div>

<div className='loginpassword'>

<input type="text" placeholder='password' onChange={(e)=>setSignindata({...signindata,password:e.target.value})} />

</div>


<div className='loginpagebutton'>
    <button onClick={handlesignin}>Login</button>
</div>

<div className='loginregister'>

<button onClick={()=>navigate("/signup")}>Register now!</button>
    {/* <h5>Register now</h5> */}
</div>
</div>


    
    
    </div>    
    
  
</>
    )
}

export default Login