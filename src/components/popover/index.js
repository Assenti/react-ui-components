import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { Icon } from '../index';
import { strinfigyClassObject } from '../utils';

const PopOver = (props) => {
    const [visible, setVisible] = useState(false);
    const popup = useRef();
    const content = useRef();
    let className = {
        name: 'rui-popover',
        dark: props.dark ? 'dark' : '',
        position: props.position ? props.position : 'top',
        className: props.className ? props.className : ''
    }

    const getPosition = () => {
        switch (props.position) {
            case 'left':
                return 'popleft';
            case 'right':
                return 'popright';
            case 'bottom':
                return 'popdown';
            default:
                return 'popup';
        }
    }

    return (
        <div className={strinfigyClassObject(className)}
            tabIndex={-1}  
            ref={popup}
            onBlur={() => props.control && !props.noBlur ? props.onClose() : setVisible(false)}
            onMouseLeave={() => props.trigger === 'hover' ? setVisible(false) : {}} >
            <CSSTransition
                in={props.control ? props.visible : visible}
                timeout={150}
                classNames={getPosition()}
                unmountOnExit>
                <div className="rui-popover__content" ref={content}>
                    {props.title ? <div className="rui-popover__content-header">
                        <span>{props.title}</span>
                        <Icon size={18} 
                            name="close" 
                            color={props.dark ? '#fff' : 'gray'} 
                            onClick={() => props.control ? props.onClose() : setVisible(false)}/>
                    </div> : ''}
                    <div className="rui-popover__content-body">{props.content}</div>
                </div>
            </CSSTransition>
            <div className="rui-popover__children"
                onMouseOver={() => props.trigger === 'hover' ? setVisible(true) : {}}
                onClick={() => props.trigger !== 'hover' ? 
                    (props.control ? {} : setVisible(!visible)) : {}}>{props.children}</div>
        </div>
    )
}
PopOver.propTypes = {
    title: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
    control: PropTypes.bool,
    onClose: PropTypes.func,
    trigger: PropTypes.oneOf(['hover','click']),
    dark: PropTypes.bool,
    noBlur: PropTypes.bool,
    position: PropTypes.oneOf(['top','bottom','left','right']),
    className: PropTypes.string
}
export default PopOver;