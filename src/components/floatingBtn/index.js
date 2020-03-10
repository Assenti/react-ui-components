import React from 'react';
import PropTypes from 'prop-types';
import { Button, Tooltip } from '../index';

const FloatingBtn = (props) => {
    const getStyles = () => {
        switch (props.position) {
            case 'top-left':
                return {
                    left: props.offsetX ? props.offsetX : 5, 
                    top: props.offsetY ? props.offsetY : 5
                }
            case 'top-right':
                return {
                    right: props.offsetX ? props.offsetX : 5, 
                    top: props.offsetY ? props.offsetY : 5
                }
            case 'bottom-left':
                return {
                    left: props.offsetX ? props.offsetX : 5, 
                    bottom: props.offsetY ? props.offsetY : 5
                }
            default:
                return {
                    right: props.offsetX ? props.offsetX : 5, 
                    bottom: props.offsetY ? props.offsetY : 5
                }
        }
    }

    return (
        <div 
            className="rui-floating-btn"
            style={getStyles()}>
            {props.tooltip ?
                <Tooltip tooltip={props.tooltip} position={props.tooltipPosition}>
                    <Button 
                        icon={props.icon}
                        lifted={props.lifted}
                        color={props.color ? props.color : 'primary'}
                        size={props.size ? props.size : 'medium'}
                        onClick={() => props.onClick ? props.onClick() : {}} 
                        light={props.light}
                        dark={props.dark}/>
                </Tooltip> : 
                <Button 
                    icon={props.icon}
                    lifted={props.lifted}
                    color={props.color ? props.color : 'primary'}
                    size={props.size ? props.size : 'medium'}
                    onClick={() => props.onClick ? props.onClick() : {}}  
                    light={props.light}
                    dark={props.dark}/>
            }
        </div>
    )
}
FloatingBtn.propTypes = {
    icon: PropTypes.string,
    position: PropTypes.oneOf([undefined,'','top-left','top-right','bottom-left']),
    offsetX: PropTypes.number,
    offsetY: PropTypes.number,
    lifted: PropTypes.bool,
    color: PropTypes.oneOf([undefined,'','primary','info','success','error','secondary','black']),
    size: PropTypes.oneOf([undefined,'','medium','large']),
    onClick: PropTypes.func,
    dark: PropTypes.bool,
    light: PropTypes.bool,
    tooltip: PropTypes.string,
    tooltipPosition: PropTypes.oneOf([undefined,'','bottom','left','right'])
}
FloatingBtn.defaultProps = {
    color: 'primary',
    size: 'medium'
}
export default FloatingBtn;