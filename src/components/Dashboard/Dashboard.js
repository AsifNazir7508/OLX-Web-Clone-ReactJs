import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import iphone12 from '../../images/iphone12.jpg'
import { getData } from '../../firebase'
import { useNavigate } from 'react-router-dom'
function Dashboard() {

    const [dashboard, setDashboard] = useState([])

    const getitems = async () => {
        let result = await getData(dashboard)
        setDashboard(result)

    }


    const handledetails=(addId)=>{

        navigate(`/addinfo/${addId}`)
    }
    useEffect(() => {

        getitems()
    }, [])





    
const navigate=useNavigate()
    
    return (
        <>
            <main>

                <div className="containerdashboard">

                    <h4>Mobile Phones in Karachi</h4>

                    <div className="main">

                        <div className="filter">
                            <h4>Filters</h4>
                            <hr />
                            <h4>CATEGORIES</h4>

                            <h5>All categories</h5>

                            <h6><b>Mobile Phones</b></h6>

                            <h6>Accessories</h6>
                            <h6>Smart Watches</h6>
                            <h6>Tablets</h6>

                            <hr />

                            <div className="filter-location">

                                <h4>LOCATIONS</h4>

                                <input type="searc" placeholder="Pakistan" />

                                <h5>Pakistan</h5>

                                <h6><b>Karachi</b></h6>

                                <h6>Gulshan-e-Iqbal</h6>


                                <h6>DHA Defence</h6>
                                <h6>Jamshed Town</h6>

                            </div>
                        </div>

                        <div className="adds">

{

(dashboard.length == 0) ? <h1>Loading...</h1> :

    dashboard.map((item,index)=>{
        return ( 
        <div key={index}> 
        
            <div className="card" onClick={()=>handledetails(item.itemId)}
>
                                <div className="box11">
                                    
                                    <div className="cardimage">
                                        <img src={iphone12} alt="error" />

                                    </div>
                                </div>



                                <div className="box12">

                                    <h5>{item.name}</h5>
                                    <h4><b>{item.price}</b></h4>
                                    <h6>{item.address}</h6>
                                </div>
                            </div>


                                    </div>


            
        )
    })
}

            

                        </div>




                    </div>


                </div>



            </main>




        </>
    )
}

export default Dashboard