/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Navbar from './Navbar';
import { Menu } from '@material-ui/icons';

const styles = {
    display:'flex', 
    justifyContent:'space-between',
     alignItems: 'center' ,
    backgroundColor: 'orange',
    padding: '.5rem',
    width: "1000px",
    height: '40px',
    color: 'white',
    boxShadow: '2px 2px 4px black'

}
let menu = document.querySelector('#menu')
let navbar = document.querySelector('.navbar')
console.log(navbar)
console.log(menu)

menu.addEventListener('click', function() {
  navbar.classList.toggle('hide');
})



const Header = () => {

function keysUp() {
  let aides = document.querySelector('#aides').value
  document.getElementById('aide').innerHTML = aides;

}

  return (
    <div className='header' >
       
        <div style= {styles}>
            <h2> Logo </h2>
            <input type='search'
            placeholder="search"
            id='aides'
            onKeyUp={keysUp}
            />
            <Navbar/>
          <div id='menu'><Menu /></div>  
        </div>  
    </div>
  )
}

export default Header
