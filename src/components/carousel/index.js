import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../index';

const Carousel = (props) => {
    const [active, setActive] = useState(0);
    const [hover, setHover] = useState(false);

    const className = () => {
        let result = '';
        let className = {
            name: 'rui-carousel',
            className: props.className ? props.className : ''
        }
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    const handlePrev = () => {
        if (active === 0) setActive(props.items.length - 1)
        else if (active > 0) setActive(active - 1)
    }
    
    const handleNext = () => {
        if (active < props.items.length - 1) setActive(active + 1)
        else if (active === props.items.length - 1) setActive(0)
    }

    const Slide = (props) => {
        return (
            <div className="rui-carousel-slide"
                onClick={e => props.onClick(e)} 
                style={{ backgroundImage: `url(${props.img})` }}>
                {props.title ? <div className="rui-carousel-slide-title">{props.title}</div> : ''}
            </div>
        )
    }

    const handleClick = (e, index, item) => {
        e.preventDefault();
        if (props.onClick) props.onClick(index, item)
    }

    useEffect(() => {

        if (props.autoMotion && !hover) {
            setTimeout(() => {
                if (active < props.items.length - 1) {
                    setActive(active + 1)
                } else {
                    setActive(0)
                }
            }, props.interval ? props.interval : 3000)
        }
        
    }, [active, hover])
    
    return (
        <div className={className()}
            style={{ 
                width: props.width ? props.width : '',
                maxWidth: props.width ? props.width : '', 
                height: props.height ? props.height : 300
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            {!props.hideArrows ? <Icon
                onClick={handlePrev}
                size={30}
                name="chevron-back"
                className="rui-carousel-slide-prev-btn"/> : null}
                <div 
                    className="rui-carousel-slider-wrapper"
                    style={{ transform: `translateX(-${(active)*(100)}%)`}}>
                    {props.items.map((item, index) => 
                        <Slide 
                            key={index} 
                            img={item.img} 
                            title={item.title} 
                            onClick={e => handleClick(e, index, item)}/>)
                    }
                </div>
                <ul className="rui-carousel-dots">
                    {!props.hideDots ? 
                    props.items.map((item, index) => 
                        <li 
                            key={index} 
                            className={index === active ? 'active' : ''}
                            onClick={() => setActive(index)}></li>) : null}
                </ul>
            {!props.hideArrows ? <Icon
                onClick={handleNext}
                size={30}
                name="chevron-next"
                className="rui-carousel-slide-next-btn"/> : null}
        </div>
    )
}
Carousel.propTypes = {
    items: PropTypes.array,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    autoMotion: PropTypes.bool,
    hideArrows: PropTypes.bool,
    hideDots: PropTypes.bool,
    interval: PropTypes.number,
    onClick: PropTypes.func,
    className: PropTypes.string
}
export default Carousel;

