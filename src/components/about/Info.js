import React from 'react';

const Info = () => {
    function calculateTimeFromDate(startDate) {
        const start = new Date(startDate);
        const now = new Date();

        let years = now.getFullYear() - start.getFullYear();
        let months = now.getMonth() - start.getMonth();

        if (months < 0 || (months === 0 && now.getDate() < start.getDate())) {
            years--;
            months += 12;
        }

        return `${years} year(s) and ${months} month(s)`;
    }

    return (
        <div className='about__info grid'>
            <div className="about__box">
                <i className='bx bx-award about__icon'></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">{calculateTimeFromDate('2023-02-01')}</span>
            </div>

            <div className="about__box">
                <i className='bx bx-briefcase-alt about__icon'></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">+8 Projects</span>
            </div>

            <div className="about__box">
                <i className='bx bxs-graduation about__icon'></i>
                <h3 className="about__title">Education</h3>
                <span className="about__subtitle">App Academy</span>
            </div>

        </div>
    );
};

export default Info;
