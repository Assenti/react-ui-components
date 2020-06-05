import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { strinfigyClassObject } from '../utils';

const Drawer = (props) => {
    const drawer = useRef();
    let className = {
        name: 'rui-drawer',
        position: props.position ? props.position : 'left',
        dark: props.dark && !props.light ? 'dark' : ''
    }

    const handleClick = (e) => {
        if (drawer.current && drawer.current.contains(e.target)) return;
        props.onClose()
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClick, true);

        return(() => {
            document.removeEventListener("mousedown", handleClick, true);
        })
    }, [])

    return (
        <CSSTransition
            in={props.drawer}
            timeout={300}
            classNames={`rui-drawer-${props.position ? props.position : 'left'}`}
            unmountOnExit>
            <div className="rui-drawer-overlay">
                <div ref={drawer}
                    style={{ width: props.width ? props.width : 280 }}
                    className={strinfigyClassObject(className)}>
                    {props.children}
                </div>
            </div>
        </CSSTransition>
    )
}
Drawer.propTypes = {
    drawer: PropTypes.bool,
    onClose: PropTypes.func,
    position: PropTypes.oneOf([undefined,'','left','right','top','bottom']),
    dark: PropTypes.bool,
    children: PropTypes.node
}
export default Drawer;