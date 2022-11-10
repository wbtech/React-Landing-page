import React from 'react'
import Navbar from './Navbar';

const styles = {
    display:'flex', 
    justifyContent:'space-between',
    alignItems: 'center' ,
    backgroundColor: 'lightblue',
    padding: '.5rem',
    width: "1000px",
    height: '40px',
    color: 'blue',
    boxShadow: '2px 2px 4px black'

}

const Header = () => {
  return (
    <div style ={{display:'flex', justifyContent:'center', alignItems:'center'}} >
        <div style= {styles}>
            <h2> Logo </h2>
            <input type='search'
            placeholder="search"
            />
            <Navbar/>
            
        </div>  
        
    </div>
  )
}

export default Header