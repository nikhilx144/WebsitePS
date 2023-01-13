import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false)
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }
  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <Link to="/">
          <img src={ Logo } alt=""/>
        </Link>
        <div className='hiddenLinks'>
          <Link to="/"> Home </Link>
          <Link to="/blogs"> Blogs </Link>
          <Link to="/products"> Products </Link>
          <Link to="/recipes"> Recipes </Link>
          <Link to="/about"> About Us </Link>
          <Link to="/contact"> Contact Us </Link>
          <Link to="/healthcare"> Healthcare </Link>
          <Link to="/signup"> Sign Up </Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to="/"> Home </Link>
        <Link to="/blogs"> Blogs </Link>
        <Link to="/products"> Products </Link>
        <Link to="/recipes"> Recipes </Link>
        <Link to="/about"> About Us </Link>
        <Link to="/contact"> Contact Us </Link>
        <Link to="/healthcare"> Healthcare </Link>
        <Link to="/signup"> Sign Up </Link>
        <button>
          <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar
