import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import Avatar from '../avatar';
import Slider from '../slider';
import Divider from '../divider';

const Dock = (props) => {
    const dockItem = useRef();

    const componentClass = () => {
        let result = '';
        let className = {
            name: 'rui-dock',
            position: props.position ? props.position : 'bottom',
            tile: props.tile ? 'tile' : '',
            dark: props.dark ? 'dark' : ''
        }
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    const handleClick = (item) => {
        if (props.onItemClick) {
            props.onItemClick(item)
        }
    }

    const getDockLength = () => {
        if (props.length && (props.position === 'left' || props.position === 'right')) {
            return { height: props.length ? props.length : ''}
        } else if (props.length && (props.position === 'top' || props.position === 'bottom')) {
            return { width: props.length ? props.length : ''}
        }
    }

    const getVertical = () => {
        if (props.position === 'left' || props.position === 'right') {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className={(`rui-dock-container ${props.position ? props.position : ''}`).trim()}>
            <CSSTransition
                in={props.visible}
                timeout={300}
                classNames={`dock-${props.position}`}
                mountOnEnter
                unmountOnExit>
                <div className={componentClass()} 
                    style={getDockLength()}>
                    <Slider
                        items={props.items}
                        dark={props.dark}
                        length={props.length - 16}
                        vertical={getVertical()}
                        onItemClick={item => handleClick(item)}
                        render={(item) => 
                            item.divider ?
                            <Divider vertical dark={props.dark}/> :
                            <div className="rui-dock-icon" ref={dockItem}>
                                <Avatar    
                                    img={item.img} 
                                    icon={item.icon} 
                                    iconColor={item.iconColor}
                                    size={props.itemSize ? props.itemSize : 60}
                                    transparent
                                    iconSize={props.iconSize ? props.iconSize : 40}/>
                                {item.title ? <div className="rui-dock-item-title">{item.title}</div> : null}
                            </div>
                        }
                        />
                </div>
            </CSSTransition>
        </div>
    )
}
Dock.propTypes = {
    position: PropTypes.oneOf(['top','bottom','left','right']),
    items: PropTypes.array.isRequired,
    lenght: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    itemSize: PropTypes.number,
    iconSize: PropTypes.number,
    visible: PropTypes.bool,
    dark: PropTypes.bool,
    tile: PropTypes.bool,
    onItemClick: PropTypes.func
}
export default Dock;