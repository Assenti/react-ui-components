import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Icon } from '../index';

const Notification = (props) => {
    // const [visible, setVisible] = useState(props.visible);
    // // const [messages, setMessages] = useState(props.visible);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setVisible(false)
    //     }, 3000)
    // }, [props.visible])

    return (
        <CSSTransition  
            in={props.visible}
            timeout={300}
            classNames={props.bottom ? 'rui-snackbar-bottom' : 'rui-snackbar'}
            unmountOnExit>
            <div className={`rui-snackbar__container ${props.bottom ? 'bottom' : 'top'}`}>
                <div className={`rui-snackbar ${props.status ? props.status : 'info'}`}>
                    <div className="row align-center space-between">
                        <div>{props.message}</div>
                        <Icon
                            name="close"
                            className="ml-5"
                            size={16} 
                            color="#fff"
                            onClick={() => {
                                props.onClose(false)
                            }}/>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

export default Notification;