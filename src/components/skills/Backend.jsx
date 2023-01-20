import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Backend developer</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills_name">Python</h3>
                    <span className="skills__level">Basic</span>
                </div>
            </div>

            <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills_name">Nodejs</h3>
                    <span className="skills__level">basic</span>
                </div>
            </div>
            
            <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills_name">MySQL</h3>
                    <span className="skills__level">beginner</span>
                </div>
            </div>
        </div>

       
    </div>
</div>
  )
}

export default Backend