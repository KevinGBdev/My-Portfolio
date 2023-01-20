import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-award about__icon'></i>

            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">4 Months Working</span>
        </div>

        <div className="about__box about__icon">
            <i class='bx bx-briefcase-alt'></i>

            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">1 + Projects</span>
        </div>

        <div className="about__box about__icon">
            <i class='bx bx-support'></i>
            
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info