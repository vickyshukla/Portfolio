import React from 'react';
import './experience.css';
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container exper_container">
        <div className="frontent_exp">
        <h3>Frontend Developement</h3>
          <div className="exp_content">
             <BsFillPatchCheckFill/>
          </div>
        </div>
        <div className="backend_exp"></div>
      </div>
    </section>
  )
}

export default Experience;