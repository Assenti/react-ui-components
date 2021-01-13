import React, { useEffect, useState, createRef } from 'react'
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { Tooltip, Button } from '../index';

const BackTopBtn = (props) => {
    const [visible, setVisible] = useState(false);
    const [breakpoint] = useState(props.breakpoint ? props.breakpoint : 60);
    const blockRef = createRef();

    const handleScroll = (e) => {
        if (e.srcElement.scrollTop > breakpoint) setVisible(true)
        else setVisible(false)
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScroll, true);
        return () => document.removeEventListener('scroll', handleScroll, true);
    }, [])

    const goTop = () => {
        if (props.setRef.current) {
            props.setRef.current.scrollIntoView({
                behavior: "smooth",
                block: 'start'
            })
        }
    }

    return (
        <div 
            className={(`rui-btn-back-top ${props.dark ? 'dark' : ''}`).trim()}
            ref={blockRef}
            style={{ 
                right: props.offsetX ? props.offsetX : 25, 
                bottom: props.offsetY ? props.offsetY : 25
            }}>
            <CSSTransition
                in={visible}
                timeout={500}
                classNames="btn-back-top"
                unmountOnExit>
                {props.tooltip ?
                    <Tooltip tooltip={props.tooltip}>
                        <Button 
                            icon={!props.name ? props.icon : null}
                            name={!props.icon ? props.name : null}
                            lifted={props.lifted}
                            size={props.size ? props.size : ''}
                            onClick={() => goTop()} 
                            light={!props.dark ? true : false}
                            dark={props.dark ? true : false}/>
                    </Tooltip> : 
                    <Button 
                        icon={!props.name ? props.icon : null}
                        name={!props.icon ? props.name : null}
                        lifted={props.lifted}
                        size={props.size ? props.size : ''}
                        onClick={() => goTop()} 
                        light={!props.dark ? true : false}
                        dark={props.dark ? true : false}/>
                }
            </CSSTransition>
        </div>
    )
}
BackTopBtn.propTypes = {
    setRef: PropTypes.any,
    size: PropTypes.oneOf(['default','medium','large']),
    dark: PropTypes.bool,
    tooltip: PropTypes.string,
    breakpoint: PropTypes.number,
    name: PropTypes.string,
    icon: PropTypes.node,
    lifted: PropTypes.bool
}
BackTopBtn.defaultProps = {
    lifted: true
} 
export default BackTopBtn;