import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const Dropdown = (props) => {
    const [visible, setVisible] = useState(false);

    const dropdownClass = () => {
        let result = '';
        let className = {
            name: 'rui-dropdown-container',
            dark: props.dark ? 'dark' : '',
            position: props.position ? props.position : '',
            className: props.className ? props.className : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div className={dropdownClass()} 
            tabIndex={-1}
            onBlur={() => props.closeManaged ? {} : setVisible(false)}>
            <div onClick={() => setVisible(true)}>{props.trigger}</div>
            <CSSTransition
                in={props.closeManaged ? props.visible : visible}
                timeout={300}
                classNames="dropdown"
                unmountOnExit>
                <div className="rui-dropdown" 
                    style={{ 
                        width: props.width ? props.width : '', 
                        minWidth: props.minWidth ? props.minWidth : '',
                        right: props.rightOffset && !props.legtOffset ? props.rightOffset : '',
                        left: props.legtOffset && !props.rightOffset ? props.legtOffset : ''
                    }}>
                    <div className="rui-dropdown__content" 
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
    width: PropTypes.number || PropTypes.string,
    minWidth: PropTypes.number || PropTypes.string,
    dark: PropTypes.bool,
    position: PropTypes.oneOf(['centered','right']),
    leftOffset: PropTypes.number,
    rightOffset: PropTypes.number,
    closeManaged: PropTypes.bool,
    visible: PropTypes.bool,
    className: PropTypes.string
}
Dropdown.defaultProps = {
    leftOffset: 0,
    rightOffset: 0
}
export default Dropdown;