import React, { useState } from 'react';
import { Button } from '../index';

const ButtonGroup = (props) => {
    const [active, setActive] = useState(props.default);

    const componentClass = () => {
        let result = '';
        let className = {
            btn: 'rui-btn-group',
            lifted: props.lifted ? 'lifted' : '',
            icons: props.icon ? 'icons' : '',
            size: props.size ? props.size : '',
            className: props.className ? props.className : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    const isActive = (index) => {
        return index === active ? 'active' : ''
    }

    const handleChange = (item, index) => {
        if (props.onChange) props.onChange(item, index)
        setActive(index)
    }

    return (
        <div className={componentClass()}>
            {props.options.map((item, index) => 
                <Button 
                    key={index}
                    size={props.size ? props.size : ''}
                    className={isActive(index)}
                    name={!props.icon ? item : ''}
                    icon={props.icon ? item : ''} 
                    color={props.color ? props.color : ''}
                    onClick={() => handleChange(item, index)}
                    outlined={props.outlined ? true : false}/>
            )}
        </div>
    )
}

export default ButtonGroup;