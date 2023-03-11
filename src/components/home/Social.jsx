import React from 'react'

const Social = () => {
  return (
      <div className='home__social'>
          <a
              href="www.github.com/zyanislam" className='home__social-icon'
              target="_blank"
          >
            <i class="uil uil-github"></i>
          </a>

          <a
            href="www.linkedin.com"
            className='home__social-icon'
            target="_blank"
          >
            <i class="uil uil-linkedin"></i>
          </a>

          <a
              href="www.instagram.com"
              className='home__social-icon'
              target="_blank"
          >
            <i class="uil uil-instagram"></i>
          </a>
    </div>
  )
}

export default Social