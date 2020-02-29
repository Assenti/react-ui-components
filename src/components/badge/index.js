import React from 'react';

const Badge = (props) => {
    const badgeClass = () => {
        let result = '';
        let className = {
            btn: 'rui-badge-container',
            rounded: props.rounded ? 'rounded' : '',
            color: props.color ? props.color : '',
            className: props.className ? props.className : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    const visibility = () => {
        if (typeof(props.visible) === 'undefined') return true
        else return props.visible
    }

    return (
        <div className={badgeClass()}>
            {props.parent}
            <div className="rui-badge">
                {visibility() ? props.value : ''}
            </div>
        </div>
    )
}

export default Badge;