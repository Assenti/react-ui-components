import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, Tooltip } from '../index';

const CopyToClipboard = (props) => {
    const [tooltip, setTooltip] = useState(props.defaultText ? props.defaultText : 'Copy');

    const handleClick = () => {
        copyToClipboard(props.text);
        setTooltip(`${props.copiedText ? props.copiedText : 'Copied to clipboard'}`)
        setTimeout(() => {
            setTooltip(props.defaultText ? props.defaultText : 'Copy')
        }, 700);
    }

    const copyToClipboard = (text) => {
        const el = document.createElement('textarea');
        el.value = (text);
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    const getColor = () => {
        if (props.color) {
            return props.color;
        } else {
            if (props.dark) return '#fff';
            else return '';
        }
    }

    return (
        <>
            {props.noTooltip ?
                <Icon
                    className={props.className ? `cursor-pointer ${props.className}` : 'cursor-pointer'}
                    size={props.size ? props.size : 16}
                    color={getColor()}
                    name={props.icon ? props.icon : 'content-copy'} 
                    onClick={handleClick}/> :
            <Tooltip tooltip={tooltip}>
                <Icon
                    className={props.className ? `cursor-pointer ${props.className}` : 'cursor-pointer'}
                    size={props.size ? props.size : 16}
                    color={getColor()}
                    name={props.icon ? props.icon : 'content-copy'} 
                    onClick={handleClick}/> 
            </Tooltip>} 
        </>         
    )
}
CopyToClipboard.propTypes = {
    icon: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
    dark: PropTypes.bool,
    text: PropTypes.string.isRequired,
    copiedText: PropTypes.string,
    defaultText: PropTypes.string,
    noTooltip: PropTypes.bool,
    className: PropTypes.string
}
export default CopyToClipboard;