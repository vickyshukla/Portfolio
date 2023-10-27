import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';

const Header_Social = () => {
  return (
    <div className='header_social'>
        <a href="www.linkdin.com" target='_blank'><BsLinkedin/></a>
        <a href="www.github" target='_blank'><FaTwitterSquare/></a>
        <a href="www.twitter.com" target='_blank'><FaGithub/></a>
    </div>
  )
}

export default Header_Social;