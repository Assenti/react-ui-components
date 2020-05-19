import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { strinfigyClassObject } from '../utils';

const Dropdown = (props) => {
    const container = useRef();
    const [visible, setVisible] = useState(false);
    let className = {
        name: 'rui-dropdown-container',
        dark: props.dark ? 'dark' : '',
        position: props.position ? props.position : '',
        className: props.className ? props.className : ''
    }

    const handleClick = (e) => {
        if (container.current.contains(e.target)) return;
        setVisible(false)
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClick, true);

        return () => {
            document.removeEventListener("mousedown", handleClick, true);
        }
    },[])

    return (
        <div className={strinfigyClassObject(className)}
            ref={container}>
            <div onClick={() => setVisible(true)}>{props.trigger}</div>
            <CSSTransition
                in={props.closeManaged ? props.visible : visible}
                timeout={300}
                classNames="rui-dropdown"
                unmountOnExit>
                <div className="rui-dropdown" 
                    style={{ 
                        width: props.width ? props.width : '', 
                        minWidth: props.minWidth ? props.minWidth : '',
                        right: props.rightOffset && !props.legtOffset ? props.rightOffset : '',
                        left: props.legtOffset && !props.rightOffset ? props.legtOffset : ''
                    }}>
                    <div className="rui-dropdown__content"
                        style={{ maxHeight: props.contentMaxHeight }} 
                        onClick={() => props.closeManaged ? {} : setVisible(false)}>
                        {props.content}
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}
Dropdown.propTypes = {
    content: PropTypes.any,
    trigger: PropTypes.any,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    dark: PropTypes.bool,
    position: PropTypes.oneOf([undefined,'','centered','right']),
    leftOffset: PropTypes.number,
    rightOffset: PropTypes.number,
    closeManaged: PropTypes.bool,
    visible: PropTypes.bool,
    contentMaxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    className: PropTypes.string
}
export default Dropdown;