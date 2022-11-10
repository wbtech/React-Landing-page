import React from 'react'


const Navbar = () => {
  return (
    <nav style={{display:'flex', justifyContent:'space-between',gap:'1.5rem'}} className='header'>
        
        <div>
            <a href='#'>Home</a>
        </div>
        <div>
            <a href='#'>Gallery</a> 
        </div>
        <div>
            <a href='#'>Purchase</a> 
        </div>
        <div>
            <a href='#'>Contact</a>
        </div>

    </nav>
  )
}

export default Navbar