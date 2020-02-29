import * as React from 'react';
import * as Button from './index';
export type ButtonColor = 'primary' | 'info' | 'success' | 'error' | 'black' | 'secondary';
export type BorderType = 'tile' | 'smooth' | 'rounded';
export type ButtonSize = 'medium' | 'large';
export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
    name?: string,
    type?: ButtonType
    icon?: string,
    iconLeft?: boolean,
    onClick?: Function
    lifted?: boolean,
    disabled?: boolean,
    uppercase?: boolean,
    light?: boolean,
    dark?: boolean,
    small?: boolean,
    size?: ButtonSize,
    block?: boolean,
    outlined?: boolean,
    alotted?: boolean,
    color?: ButtonColor,
    borderType?: BorderType,
    className?: string,
    style?: object,
    ref?: React.RefObject
}

export default Button;