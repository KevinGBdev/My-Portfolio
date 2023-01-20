import React from 'react'
import './qualification.css'
import { useState } from 'react'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) =>{
        setToggleState(index)
    }

  return (
    <section className="qualification section">
         <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div onClick={()=>toggleTab(1)} className={toggleState === 1 ? 'qualification__button qualification__ative button--flex' : 'qualification__button button--flex'}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>{' '} Education
                </div>

                <div onClick={()=>toggleTab(2)} className={toggleState === 2 ? 'qualification__button qualification__ative button--flex' : 'qualification__button button--flex'}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>{' '} Experience
                </div>
            </div>


            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            
                            <h3 className="qualification__title">HTML5 and CSS3</h3>

                            <span className="qualification__subtitle">B7Web - Institute</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    

                    <div className="qualification__data">
                        
                     


                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">JavaScript</h3>

                            <span className="qualification__subtitle">B7web - Dio</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022
                            </div>
                        </div>

                        
                    </div>



                    <div className="qualification__data">
                        
                        <div>
                            <h3 className="qualification__title">React</h3>

                            <span className="qualification__subtitle">Dio - B7Web</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>



                    <div className="qualification__data">

                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">TypScript</h3>

                            <span className="qualification__subtitle">B7web - DIO</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022
                            </div>
                        </div>
                    </div>
                </div>


                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">looking for first experience</h3>

                            <span className="qualification__subtitle">xxx - xxx</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> xxx - xxx
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>



                    <div className="qualification__data">

                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">looking for first experience</h3>

                            <span className="qualification__subtitle">xxx - xxx</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> xxx - xxx
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification