import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
      <div className='about__box'>
        <i class="uil uil-graduation-cap about__icon"></i>
        <h3 className='about__title'>Education</h3>
        <span className='about__subtitle'>Bachelor's in Computer Science</span>
      </div>

      <div className='about__box'>
        <i class="uil uil-layers about__icon"></i>
        <h3 className='about__title'>Experience</h3>
        <span className='about__subtitle'>2+ Years</span>
      </div>

      <div className='about__box'>
        <i class='bx bxs-bolt-circle about__icon'></i>
        <h3 className='about__title'>Completed</h3>
        <span className='about__subtitle'>10+ Projects</span>
      </div>
    </div>
  )
}

export default Info