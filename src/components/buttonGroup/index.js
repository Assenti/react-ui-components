import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../index';
import { strinfigyClassObject } from '../utils';

const ButtonGroup = (props) => {
    const [active, setActive] = useState(props.default);
    let className = {
        btn: 'rui-btn-group',
        lifted: props.lifted ? 'lifted' : '',
        icons: props.icon ? 'icons' : '',
        size: props.size ? props.size : '',
        className: props.className ? props.className : ''
    }

    const isActive = (index) => index === active ? 'active' : '';

    const handleChange = (item, index) => {
        if (props.onChange) props.onChange(item, index)
        setActive(index)
    }

    return (
        <div className={strinfigyClassObject(className)}>
            {props.options.map((item, index) => 
                <Button 
                    key={index}
                    style={props.btnStyle}
                    size={props.size ? props.size : ''}
                    className={isActive(index)}
                    name={!props.icon ? item : null}
                    icon={props.icon ? item : null} 
                    color={props.color ? props.color : ''}
                    onClick={() => handleChange(item, index)}
                    outlined={props.outlined ? true : false}/>
            )}
        </div>
    )
}
ButtonGroup.propTypes = {
    default: PropTypes.number,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf([PropTypes.string, PropTypes.node]).isRequired,
    lifted: PropTypes.bool,
    outlined: PropTypes.bool,
    size: PropTypes.oneOf(['default','medium','large']),
    name: PropTypes.string,
    icon: PropTypes.bool,
    color: PropTypes.oneOf(['primary','info','success','error','secondary','black']),
    btnStyle: PropTypes.object,
    className: PropTypes.string
}
export default ButtonGroup;