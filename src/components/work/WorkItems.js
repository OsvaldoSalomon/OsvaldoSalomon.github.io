import React from 'react';

const WorkItems = ({item}) => {
    const addDefaultSrc = (ev) => {
        ev.target.src = item.image;
    }

    return (
        <div className='work__card' key={item.id}>
            <img onError={addDefaultSrc} src={item.gif} alt="" className='work__img' />
            <h3 className="work__title">{item.title}</h3>
            <p className="work__description">{item.description}</p>
            <a href={item.link} className="work__button" target="_blank">
                Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
        </div>
    );
};

export default WorkItems;
