import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../index';
import { CSSTransition } from 'react-transition-group';

const Tag = (props) => {
    const [visible, setVisible] = useState(props.visible ? props.visible : true);

    const tagClass = () => {
        let result = '';
        let className = {
            name: 'rui-tag',
            lifted: props.lifted ? 'lifted' : '',
            uppercase: props.uppercase ? 'uppercase' : '',
            borderType: props.borderType ? (props.borderType === 'default' ? '' : props.borderType) : '',
            color: props.color ? props.color : 'primary',
            small: props.small ? 'small' : '',
            outlined: props.outlined ? 'outlined' : '',
            className: props.className ? props.className : ''
        }
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    useEffect(() => {
        if (props.closable) setVisible(props.visible)
    }, [props.visible])

    return (
        <CSSTransition
            in={visible}
            timeout={300}
            classNames="rui-tag"
            unmountOnExit>
            <div className={tagClass()}
                ref={props.setRef} 
                style={{ width: props.width ? props.width : ''}}>
                {props.iconLeft ? <Icon name={props.iconLeft}/> : ''}
                {props.value}
                {props.iconRight ? <Icon name={props.iconRight}/> : ''}
                {props.closable ? 
                    <Icon 
                        className="rui-tag__close" 
                        name="close"
                        color="gray" 
                        onClick={() => {
                            props.onClose()
                            setVisible(false)
                        }}/> : ''}
            </div>
        </CSSTransition>
    )
}
Tag.propTypes = {
    visible: PropTypes.bool,
    uppercase: PropTypes.bool,
    outlined: PropTypes.bool,
    lifted: PropTypes.bool,
    color: PropTypes.oneOf([undefined,'secondary','primary', 'info', 'success', 'error', 'dark', 'yellow']),
    borderType: PropTypes.oneOf([undefined,'','tile','smooth','rounded']),
    setRef: PropTypes.any,
    small: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    closable: PropTypes.bool,
    className: PropTypes.string
}
export default Tag;