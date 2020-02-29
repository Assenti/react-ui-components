import React, { useState } from 'react';
import { Icon, Tooltip } from '../index';

const CopyToClipboard = (props) => {
    const [tooltip, setTooltip] = useState(props.defaultText ? props.defaultText : 'Copy');

    const handleClick = () => {
        navigator.clipboard.writeText(props.text)
        setTooltip(`${props.copiedText ? props.copiedText : 'Copied to clipboard'}`)
        setTimeout(() => {
            setTooltip(props.defaultText ? props.defaultText : 'Copy')
        }, 700);
    }

    return (
        <Tooltip tooltip={tooltip}>
            <Icon
                className={props.className ? `cursor-pointer ${props.className}` : 'cursor-pointer'}
                size={props.size ? props.size : 16}
                color={props.color ? props.color : 'gray'}
                name={props.icon ? props.icon : 'content-copy'} 
                onClick={handleClick}/> 
        </Tooltip>           
    )
}

export default CopyToClipboard;