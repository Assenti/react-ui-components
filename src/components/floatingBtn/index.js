import React from 'react';
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

export default FloatingBtn;
