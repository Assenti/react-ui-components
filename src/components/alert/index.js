import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { Icon } from '../index';
import { strinfigyClassObject } from '../utils';

const Alert = (props) => {
    let className = {
        name: 'rui-alert',
        color: props.status ? props.status : 'info',
        className: props.className ? props.className : ''
    }

    const getStatusIcon = () => {
        switch (props.status) {
            case 'warning':
                return 'alert';
            case 'error':
                return 'alert-circle'
            case 'success':
                return 'check-circle';
            default:
                return 'info';
        }
    }

    return (
        <CSSTransition
            in={props.visible}
            timeout={300}
            classNames="rui-alert"
            unmountOnExit>
            <div className={strinfigyClassObject(className)}>
                <div>
                    <div className="rui-alert__status">
                        <Icon name={getStatusIcon()} size={20}/>
                        {props.message}
                    </div>
                    <div className="rui-alert__text">{props.text}</div>
                </div>
                <Icon className="rui-alert__close" 
                    name="close" 
                    size={18} 
                    onClick={() => props.onClose ? props.onClose() : {}}/>
            </div>
        </CSSTransition>
    )
}
Alert.propTypes = {
    status: PropTypes.oneOf([undefined,'info','success','error','warning']),
    message: PropTypes.string.isRequired,
    text: PropTypes.string,
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    className: PropTypes.string
}
export default Alert;