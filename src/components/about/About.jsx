import React from 'react'
import './about.css';
import AboutImg from '../../assest/about-me.png';
import {LiaAwardSolid} from 'react-icons/lia';
import {FiUsers} from 'react-icons/fi';
import {CgWebsite} from 'react-icons/cg';


export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container container_about">
        <div className="about_img">
          <img src={AboutImg} alt="About" />
        </div>
        <div className="about-des">
          <div className="about_cards">
          <article className='about_card'>
          <LiaAwardSolid className='abt_icon'/>
            <h5>Experience</h5>
            <small>2 Years Working</small>
          </article>

          <article className='about_card'>
          <FiUsers className='abt_icon'/>
            <h5>Clients</h5>
            <small>15+</small>
          </article>
          
          <article className='about_card'>
          <CgWebsite className='abt_icon'/>
            <h5>Projects</h5>
            <small>50+ completed</small>
          </article>
          </div>
          <p className='abt_content'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Possimus facere laborum, culpa error amet dignissimos explicabo sequi tempora harum repellendus voluptate aliquam, 
              officia temporibus quam sed, dolorem recusandae debitis! Expedita!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Chat</a>
        </div>
      </div>
    </section>
  )
}

export default About;
