import { useNavigate } from 'react-router-dom';

import img1 from '../../images/olx.png'
import img2 from '../../images/olxblack.jpg'
import img3 from '../../images/add.jpg'

import React from 'react';
import './Header.css';



function Header() {

    const navigate = useNavigate()

  return (   <>

<header>

<nav>

<div className="olxlogo">
    {/* <img src="./images/olx.png"/> */}
<img src={img1} alt='error'/>
</div>

<ul>

    <li>MOTORS</li>
    <li>PROPERTY</li>
</ul>

</nav>



<div className="secondrow">
    <div className="logo">
        {/* <img src="./images/olxblack.jpg"/> */}
        <img src={img2} alt="erroe"/>
      
      </div>

      <div className="location">
        <input type="search" className="search" placeholder="Search Location"/>
    </div>


    <div className="search">
        <input type="search" className="search2" placeholder="Search"/>
    </div>

    <div className="text" onClick={()=>navigate("/login")}>Login</div>
    
    <div className="selling_page">
        <button onClick={()=>navigate("/additem")}>
            <p>SELL</p>
        </button>
    </div>




</div>


</header>


<div className="categories">
    <h4>All CATEGORIES</h4>

    <ul>

        <li>Mobile Phones</li>
        <li>Cars</li>
        <li>Motorcycles</li>
        <li>Houses</li>
        <li>TV-Video-Audio</li>
        <li>Tablets</li>
        <li>Land & Plots</li>


    </ul>
</div>

<div className="add">

<img src={img3} alt='error'/>

</div>

<div className="popularsearches">

    <ul>
        <li><b>Popular Searches:</b></li>
        <li>infinix</li>
        <li>- oppo</li>
        <li>- vivo</li>
        <li>- realme</li>
        <li>- samsung</li>
        <li>- nokia</li>
        <li>- tecno</li>
        <li>- oneplus</li>
    </ul>

</div>



    </>
  
  )


}

export default Header