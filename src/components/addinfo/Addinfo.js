import React, {useEffect,useState} from 'react'
import imginfo1 from '../../images/iphone12.jpg'
import imginfo2 from '../../images/avat.png'
import './Addinfo.css'

import { useParams } from 'react-router-dom'
import { getSignleitemdata } from '../../firebase'



function Addinfo(props) {


const params=useParams()
const [addinfo,setAdddinfo]=useState(null)


async function fetchdata(){

    const result=await getSignleitemdata(params.id)
    
if(result.length>0){
    setAdddinfo(result)
}

else{
    setAdddinfo(null)
}

console.log(addinfo)
console.log("test")
}


useEffect(()=>{

    fetchdata()
},[])

if(!addinfo){
    return(
        <div><h3>Loading</h3></div>
    )
}



return (
<>
<main>

        <div className="maindiv">


        <div className="mainbox1">
            {/* <img src="./images/iphone12.jpg"/> */}
       <img src={imginfo1} alt="error"/>
       
        </div>




        
        <div className="maindiv2">

            <div className="mainbox2">
              
              <h4>{addinfo[0].name}</h4>
              <h5>Iphone 12 pro max</h5>
              <h6>Saddr Karachi</h6>

                
            </div>
            


            <div className="mainbox3">
                
                           <div className="sellerdescription">Seller Description</div>
            
                                   <div className="avt">
            
                                   <img src={imginfo2} alt="error"/>

                                          <div className="avttext">OLX User</div>
                                          
                                     </div>
    
                <div className="chatwithseller">
                    <div>Chat with seller</div>
                </div>
            </div>

        </div>
       
    </div>

</main>




</>
        )
}

export default Addinfo