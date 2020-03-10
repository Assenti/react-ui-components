import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { Button, Tooltip } from '../index';

const Drawer = (props) => {
    const [isXs, setIsXs] = useState(false);

    const drawerClass = () => {
        let result = '';
        let className = {
            name: 'rui-drawer',
            collapsable: props.collapsable ? 'collapsable' : '',
            position: props.position && props.position !== 'default' ? props.position : '',
            smooth: props.smooth ? 'smooth' : '',
            min: props.min ? 'min' : '',
            absolute: props.absolute ? 'absolute' : '',
            fullHeight: props.fullHeight ? 'full-height' : '',
            dark: props.dark && !props.light ? 'dark' : ''
        }
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    const handleClose = (e) => {
        e.preventDefault();
        if (e.currentTarget === e.target) {
            if (props.onClose) props.onClose()
        } 
    }

    const handleCloseXs = (e) => {
        e.preventDefault();
        if (isXs || props.absolute) {
            props.onClose()
        }
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 529) {
                setIsXs(false)
            } else {
                setIsXs(true)
            }
        })

        return(() => {
            window.removeEventListener('resize', {},  false);
        })
    }, [])

    const drawerOverlayClass = () => props.drawer ? 'rui-drawer__overlay' : 'rui-drawer__overlay none';

    return (
        <React.Fragment>
            {isXs || props.absolute ?
            <CSSTransition
                in={props.drawer}
                timeout={100}
                classNames="drawer-background"
                unmountOnExit>
                <div className={drawerOverlayClass()} onClick={handleClose}>
                    <CSSTransition
                        in={props.drawer}
                        timeout={300}
                        classNames="drawer"
                        unmountOnExit>
                        <CSSTransition
                            in={props.min}
                            timeout={300}
                            classNames="expand">
                                <div className={drawerClass()}>
                                    <div className="rui-drawer-content" onClick={handleCloseXs}>
                                        {props.header ? 
                                        <div className={props.headerCentered ? 
                                                'rui-drawer-header centered' : 'rui-drawer-header'}>
                                                    {props.header}</div> : ''}
                                        {props.children}
                                    </div>
                                    {props.collapsable ? <div className="rui-drawer-footer">
                                        <Tooltip tooltip={props.min ? 'Expand' : 'Collapse'}>
                                            <Button
                                                dark={props.dark}
                                                light={props.dark ? false : true}
                                                icon={props.min ? 'chevron-double-right' : 'chevron-double-left'}
                                                onClick={() => props.onResize()}/>
                                        </Tooltip>
                                    </div> : ''}
                                </div>
                        </CSSTransition>
                    </CSSTransition>
                </div>
            </CSSTransition> :
            <CSSTransition
                in={props.drawer}
                timeout={300}
                classNames="drawer"
                unmountOnExit>
                <CSSTransition
                    in={props.min}
                    timeout={300}
                    classNames="expand">
                        <div className={drawerClass()}>
                            <div className="rui-drawer-content">
                                {props.header ? <div className={props.headerCentered ? 
                                        'rui-drawer-header centered' : 'rui-drawer-header'}>
                                            {props.header}</div> : ''}
                                {props.children}
                            </div>
                            {props.collapsable ? <div className="rui-drawer-footer">
                                <Tooltip tooltip={props.min ? 'Expand' : 'Collapse'}>
                                    <Button
                                        dark={props.dark}
                                        light={props.dark ? false : true}
                                        icon={props.min ? 'chevron-double-right' : 'chevron-double-left'}
                                        onClick={() => props.onResize()}/>
                                </Tooltip>
                            </div> : ''}
                        </div>
                </CSSTransition>
            </CSSTransition>
            }
        </React.Fragment>
    )
}
Drawer.propTypes = {
    drawer: PropTypes.bool,
    collapsable: PropTypes.bool,
    min: PropTypes.bool,
    onResize: PropTypes.func,
    onClose: PropTypes.func,
    fullHeight: PropTypes.bool,
    position: PropTypes.oneOf(['right, top, bottom']),
    header: PropTypes.any,
    headerCentered: PropTypes.bool,
    dark: PropTypes.bool,
    absolute: PropTypes.bool
}
export default Drawer;