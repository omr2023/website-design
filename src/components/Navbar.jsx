import React from 'react'

const Navbar = ({containerStyles}) => {
  return (
      <nav className={`${containerStyles}`}>
        <a href="#home" className='active-link'>Home</a>
        <a href="#shop" className=''>Shop</a>
        <a href="#contact" className=''>Contact</a>
      </nav>
  )
}

export default Navbar