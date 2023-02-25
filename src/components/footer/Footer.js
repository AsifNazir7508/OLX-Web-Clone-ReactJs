import React from 'react'
import './Footer.css'
import footerimg1 from '../../images/footer1.jpg'

import footimg2 from "../../images/appicon1.svg"


function Footer() {

    
  return ( <>

  <footer>

<div className="foot">

    <div className="img1">

<img src={footerimg1} alt="error"/>
        {/* <img src="./images/footer1.jpg"/> */}
    </div>

    <div className="foottext">
        <h3>TRY THE OLX APP</h3>

        <h4>Buy, sell and find just about anything <br/> the app on your mobile.</h4>

    </div>

    <div className="applogo">
        <h3>GET YOUR APP Today</h3>
    
        <div>

            <img src={footimg2} alt='error' />
            <img src={footimg2} alt='error' />
            <img src={footimg2} alt='error' />
            
        </div>
        
        
   
    </div>
    
    
</div>

<div className="trending">
    <div className="box1">
        <h3>POPULAR <br/>CATEGORIES</h3>

        <h2>Cars</h2>
        <h2>Flats for rent</h2>
        <h2>Mobile Phones</h2>
        <h2>Jobs</h2>
    </div>

    <div className="box2">
        <h3>TRENDING<br/> SEARCHES</h3>

        <h2>Bikes</h2>
        <h2>Watches</h2>
        <h2>Books</h2>
        <h2>Dogs</h2>
    </div>

    <div className="box3">
        <h3>ABOUT US</h3>

        <h2>About EMPG</h2>
        <h2>OLX Blog</h2>
        <h2>Contact US</h2>
        <h2>OLX for Businesses</h2>
    </div>

    <div className="box4">
        <h3>OLX</h3>

        <h2>Help</h2>
        <h2>Sitemap</h2>
        <h2>Terms of use</h2>
        <h2>Privacy Policy</h2>
    </div>


</div>
<div className="lastline">
    <p>Free classNameifieds in Pakistan . © 2006-2022 OLX</p>
</div>
</footer>

  

  
  
  </>
    )
}


export default Footer