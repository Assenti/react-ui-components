import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Button, Icon } from '../index';

const Dialog = (props) => {
    const [loading, setLoading] = useState(false);

    const modalClass = () => {
        let result = '';
        let className = {
            name: 'rui-dialog',
            dark: props.dark ? 'dark' : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    const handleConfirm = () => {
        if (props.onConfirm) {
            return new Promise(async (resolve, reject) => {
                setLoading(true)
                try {
                    const result = await props.onConfirm()
                    resolve(result)
                    props.onCancel()
                } catch (e) {
                    reject(e)
                } finally {
                    setLoading(false)
                }
            })
        }
    }

    return (
        <CSSTransition
            in={props.visible}
            timeout={300}
            classNames="dialog"
            unmountOnExit>
            <div className={modalClass()}>
                <div className="rui-dialog__title">
                    {props.icon ? 
                        <Icon 
                            className="mr-5" 
                            size={20}
                            color={props.iconColor ? props.iconColor : ''} 
                            name={props.icon ? props.icon : ''}/> : ''}
                    <span style={{ color: props.titleColor ? props.titleColor : ''}}>
                        {props.title}
                    </span>
                </div>
                <div className="rui-dialog__description">{props.description}</div>
                <div className="rui-dialog__controls">
                    <Button 
                        onClick={() => props.onCancel()}
                        className="mx-5"
                        disabled={loading} 
                        color={props.cancelBtnColor ? props.cancelBtnColor : 'secondary'} 
                        name={props.cancelText ? props.cancelText : 'Cancel'}/>
                    <Button
                        onClick={handleConfirm}
                        className="mx-5"
                        loading={loading} 
                        color={props.confirmBtnColor ? props.confirmBtnColor : 'primary'} 
                        name={props.confirmText ? props.confirmText : 'Confirm'}/>
                </div>
            </div>
        </CSSTransition>
    )
}

export default Dialog;
