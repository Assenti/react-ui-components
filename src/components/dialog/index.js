import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { Button, Icon } from '../index';

const Dialog = (props) => {
    const [loading, setLoading] = useState(false);

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
            mountOnEnter
            unmountOnExit>
            <div 
                className={(`rui-dialog ${props.dark ? 'dark' : ''}`).trim()}>
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
                    {!props.confirmOnly ? <Button 
                        onClick={() => props.onCancel()}
                        className="mx-5"
                        disabled={loading} 
                        color={props.cancelBtnColor ? props.cancelBtnColor : 'secondary'} 
                        name={props.cancelText ? props.cancelText : 'Cancel'}/> : null}
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
Dialog.propTypes = {
    dark: PropTypes.bool,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    title: PropTypes.string,
    titleColor: PropTypes.string,
    description: PropTypes.any,
    confirmOnly: PropTypes.bool,
    cancelText: PropTypes.string,
    cancelBtnColor: PropTypes.oneOf(['primary','info','secondary','error','success','black']),
    confirmText: PropTypes.string,
    confirmBtnColor: PropTypes.oneOf(['primary','info','secondary','error','success','black'])
}
export default Dialog;