import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { Icon } from '../index';
import { strinfigyClassObject } from '../utils';

const Modal = (props) => {
    const [full, setFull] = useState(false);
    const [strictClose, setStrictClose] = useState(false);

    let className = {
        name: 'rui-modal-container',
        hideOverlay: props.hideOverlay ? 'no-overlay' : '',
        hidden: props.visible ? '' : 'hidden',
        headerReverse: props.headerReverse ? 'reverse' : '',
        centered: props.centered ? 'centered' : '',
        fullPage: full ? 'full-page' : '',
        sctrictClose: strictClose ? 'strict-close' : '',
        className: props.className ? props.className : ''
    }

    const modalClass = () => {
        let result = '';
        let className = {
            name: 'rui-modal',
            dark: props.dark ? 'dark' : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    const handleStrictCloseMode = (e, flag) => {
        if (e.target === e.currentTarget && !props.closable) {
            setStrictClose(flag)
        }
    }


    const close = (e) => {
        if (e.target === e.currentTarget) props.onClose()
    }

    return (
        <div 
            className={strinfigyClassObject(className)}
            onClick={(e) => props.closable ? close(e) : {}}
            onMouseDown={e => handleStrictCloseMode(e, true)}
            onMouseUp={e => handleStrictCloseMode(e, false)}>
            <CSSTransition
                in={props.visible}
                timeout={300}
                classNames="modal"
                unmountOnExit>
                <div className={modalClass()}
                    style={{ 
                        marginTop: (props.marginTop && !full) ? props.marginTop : (!full ? 20 : ''),
                        padding: props.padding ? props.padding : '',
                        width: props.width ? props.width : '' 
                    }}>
                    <div className="rui-modal-header">
                        <div>{props.header}</div>
                        <div className="rui-modal-header-icons">
                            {props.toggleFullscreen ? 
                                <Icon
                                    color={props.fullscreenIconColor ? props.fullscreenIconColor : ''} 
                                    name={full ? 'fullscreen-exit' : 'fullscreen'} 
                                    onClick={() => setFull(!full)}/> : ''}
                            <Icon
                                color={props.closeIconColor ? props.closeIconColor : ''} 
                                name="close" 
                                onClick={() => props.onClose ? props.onClose() : {}}/>
                        </div>
                    </div>
                    <div className="rui-modal-content">{props.children}</div>
                    {props.footer ? <div className="rui-modal-footer">{props.footer}</div> : ''}
                </div>
            </CSSTransition>
        </div>
    )
}
Modal.propTypes = {
    visible: PropTypes.bool,
    marginTop: PropTypes.number,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    padding: PropTypes.string,
    closable: PropTypes.bool,
    closeIconColor: PropTypes.string,
    fullscreenIconColor: PropTypes.string,
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
    footer: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
    headerReverse: PropTypes.bool,
    toggleFullscreen: PropTypes.bool,
    centered: PropTypes.bool,
    full: PropTypes.bool,
    dark: PropTypes.bool,
    onClose: PropTypes.func,
    hideOverlay: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string
}
export default Modal;