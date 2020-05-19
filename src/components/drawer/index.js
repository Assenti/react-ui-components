import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { Button, Tooltip } from '../index';
import { strinfigyClassObject } from '../utils';

const xsBreakpoint = 529;

const Drawer = (props) => {
    const [width, setWidth] = useState('');
    // const [overlay, setOverlay] = useState(false);
    let className = {
        name: 'rui-drawer',
        collapsable: props.collapsable ? 'collapsable' : '',
        hideOverlay: props.hideOverlay ? 'hide-overlay' : '',
        position: props.position ? props.position : 'left',
        smooth: props.smooth ? 'smooth' : '',
        lifted: props.lifted ? 'lifted' : '',
        min: props.min ? 'min' : '',
        absolute: props.absolute || width < xsBreakpoint ? 'absolute' : '',
        fullHeight: props.fullHeight ? 'full-height' : '',
        dark: props.dark && !props.light ? 'dark' : ''
    }

    let classNameOverlay = {
        name: 'rui-drawer__overlay',
        none: props.drawer ? '' : 'none',
        hideOverlay: props.hideOverlay ? 'hide-overlay' : ''
    }  

    const handleClose = (e) => {
        e.preventDefault();
        if (e.currentTarget === e.target) {
            if (props.onClose) props.onClose()
            // setTimeout(() => {
            //     setOverlay(false)
            // }, 300)
        } 
    }

    const handleCloseXs = (e) => {
        e.preventDefault();
        if (width < xsBreakpoint || props.absolute) {
            props.onClose()
        }
    }

    const handleResize = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        setWidth(window.innerWidth);

        window.addEventListener('resize', handleResize, true)

        return(() => window.removeEventListener('resize', handleResize, true))
    }, [props.drawer, props.absolute])

    return (
        <>
            {(width < xsBreakpoint || props.absolute) ?
            <CSSTransition
                in={props.drawer}
                classNames="rui-drawer__overlay"
                timeout={{ enter: 600, exit: 400 }}>
                <div className={strinfigyClassObject(classNameOverlay)} 
                    onClick={handleClose}>
                    <CSSTransition
                        in={props.drawer}
                        timeout={{ enter: 300, exit: 200 }}
                        classNames={`rui-drawer-${props.position ? props.position : 'left'}`}
                        unmountOnExit>
                        <CSSTransition
                            in={props.min}
                            timeout={300}
                            classNames="expand">
                                <div className={strinfigyClassObject(className)}>
                                    <div className="rui-drawer-content" onClick={handleCloseXs}>
                                        {props.children}
                                    </div>
                                    {props.collapsable &&
                                    (props.position !== 'top' && 
                                    props.position !== 'bottom') && 
                                    <div className="rui-drawer-footer">
                                        <Tooltip 
                                            tooltip={props.min ? 
                                                (props.expandText ? props.expandText : 'Expand') : 
                                                (props.collapseText ? props.collapseText : 'Collapse')
                                            }>
                                            <Button
                                                dark={props.dark}
                                                light={props.dark ? false : true}
                                                icon={props.min ? 'chevron-double-right' : 'chevron-double-left'}
                                                onClick={() => props.onResize()}/>
                                        </Tooltip>
                                    </div>}
                                </div>
                        </CSSTransition>
                    </CSSTransition>
                </div>
            </CSSTransition>
            :
            <CSSTransition
                in={props.drawer}
                timeout={{ enter: 300, exit: 200 }}
                classNames="rui-drawer"
                unmountOnExit>
                <CSSTransition
                    in={props.min}
                    timeout={300}
                    classNames="expand">
                        <div className={strinfigyClassObject(className)}
                            style={{
                                height: props.height ? props.height : '',
                                maxHeight: props.height ? props.height : ''
                            }}>
                            <div className="rui-drawer-content">
                                {props.header ? <div className={props.headerCentered ? 
                                        'rui-drawer-header centered' : 'rui-drawer-header'}>
                                            {props.header}</div> : ''}
                                {props.children}
                            </div>
                            {props.collapsable && 
                            (props.position !== 'top' && 
                            props.position !== 'bottom') && 
                            <div className="rui-drawer-footer">
                                <Tooltip tooltip={props.min ? 
                                        (props.expandText ? props.expandText : 'Expand') : 
                                        (props.collapseText ? props.collapseText : 'Collapse')
                                    }>
                                    <Button
                                        dark={props.dark}
                                        light={props.dark ? false : true}
                                        icon={props.min ? 'chevron-double-right' : 'chevron-double-left'}
                                        onClick={() => props.onResize()}/>
                                </Tooltip>
                            </div>}
                        </div>
                </CSSTransition>
            </CSSTransition>
            }
        </>
    )
}
Drawer.propTypes = {
    expandText: PropTypes.string,
    collapseText: PropTypes.string,
    drawer: PropTypes.bool,
    collapsable: PropTypes.bool,
    min: PropTypes.bool,
    onResize: PropTypes.func,
    onClose: PropTypes.func,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fullHeight: PropTypes.bool,
    position: PropTypes.oneOf([undefined,'','left','right','top','bottom']),
    dark: PropTypes.bool,
    lifted: PropTypes.bool,
    absolute: PropTypes.bool
}
export default Drawer;