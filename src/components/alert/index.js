import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { Icon } from '../index';

const Alert = (props) => {
    const [visible, setVisible] = useState(false);
    const componentClass = () => {
        let result = '';
        let className = {
            name: 'rui-alert',
            color: props.status ? props.status : 'info',
            className: props.className ? props.className : ''
        }
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
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
            <div className={componentClass()}>
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
    status: PropTypes.oneOf([undefined,'info','success','error','warning']).isRequired,
    message: PropTypes.string.isRequired,
    text: PropTypes.string,
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func
}
Alert.defaultProps = {
    status: 'info'
}
export default Alert;