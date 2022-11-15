import React from 'react'

import './App.css'
import Header from './Component/Header/Header';
// import LoginPage from './Component/Forms/LoginPage';
import { ShoppingCart } from '@material-ui/icons';



const App = () => {


  return (
    <>
   <Header />
   <p id='aide'>p</p>
   <ShoppingCart className='cart' id="cart" />
  
    {/* <LoginPage /> */}
    
    </>
  )
}

export default App
