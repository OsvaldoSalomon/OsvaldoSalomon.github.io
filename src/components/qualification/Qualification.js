import React from 'react';
import './Qualification.css';

const Qualification = () => {
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active button--flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div className="qualification__button button--flex">
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className="qualification__content qualification__content-active">

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Coding Bootcamp Student</h3>
                                <span className="qualification__subtitle">App Academy</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Feb 2022 - Sep 2022
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
                                <h3 className="qualification__title">Software Developer Intern</h3>
                                <span className="qualification__subtitle">NADA (Not Another Dating App)</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> March 2023 - August 2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Technology Apprentice</h3>
                                <span className="qualification__subtitle">Accenture</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> August 2023 - September 2024
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Software Developer</h3>
                                <span className="qualification__subtitle">Accenture</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> September 2024 - Present
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Qualification;
