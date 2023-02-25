import React, { useState } from 'react'
import './Additem.css'
import { addData } from '../../firebase'
import Swal from 'sweetalert2'
function Additem() {

    const [addinfo,setaddInfo]=useState({})


    const handleaddinfo=async ()=>{

        let result=await addData(addinfo)

        
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

<div className='aditem'>

    
    <div className='aditemwelcome'>
        <h3>Add New Item Details</h3>
        
    </div>

<div className='aditememail'>

<input type="text" placeholder='name' onChange={(e)=>setaddInfo({...addinfo,name:e.target.value})} />

</div>

<div className='aditempassword'>

<input type="text" placeholder='price' onChange={(e)=>setaddInfo({...addinfo,price:e.target.value})}/>

</div>

<div className='aditemaddress'>

<input type="text" placeholder='address' onChange={(e)=>setaddInfo({...addinfo,address:e.target.value})}/>

</div>

<div className='aditempagebutton'>
    <button onClick={handleaddinfo}>Add Item</button>
</div>


</div>


    
    
    </div>    


  

</>
    )
}

export default Additem