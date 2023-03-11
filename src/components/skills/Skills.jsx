import React from 'react'
import "./skills.css"
import Frontend from "./Frontend.jsx"
import Backend from "./Backend.jsx"


const Skills = () => {
  return (
    <section className='skill section' id='skills'>
        <h2 className='section__title'>My Skills</h2>
        <span className='section__subtitle'>A Glance Of My SkillSet!</span>
        <div className='skills__container container grid'>
            <Frontend />
              
            <Backend />
        </div>
    </section>
  )
}

export default Skills