import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
CopyToClipboard.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
    tooltip: PropTypes.string,
    text: PropTypes.string.isRequired,
    copiedText: PropTypes.string,
    defaultText: PropTypes.string,
    className: PropTypes.string
}
CopyToClipboard.defaultProps = {
    icon: 'content-copy',
    color: 'gray',
    size: 16,
    copiedText: 'Copied to clipboard',
    defaultText: 'Copy'
}
export default CopyToClipboard;