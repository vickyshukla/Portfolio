import React from 'react';
import './header.css';
import CTA from './CTA';
import Hero from '../../assest/vicky2.png';
import Header_Social from './Header_Social';
import {BsArrowDownSquare} from 'react-icons/bs';


const Header = () => {
  return (
    <header>
      <div className="container container_header">
        <h5>Hello I'm</h5>
        <h1>Vighnesh Shukla</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <Header_Social/>

        <div className="hero">
          <img src={Hero} alt="Hero" />
        </div>
       
       <a href="#contact" className='scroll_down'><BsArrowDownSquare/></a>
      </div>
    </header>
  )
}

export default Header;