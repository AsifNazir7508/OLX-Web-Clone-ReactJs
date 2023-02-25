import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import Addproduct from './components/additems/Additem'
import Addinfo from './components/addinfo/Addinfo'

function Routing() {


return (
<>

<Header/>


<Routes>

<Route path='/' element={<Dashboard/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/additem' element={<Addproduct/>}/>
<Route path='/addinfo/:id' element={<Addinfo/>}/>


</Routes>

<Footer/>


  
  
  
</>
    )
}

export default Routing