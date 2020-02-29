import React, { useState, useEffect } from 'react';
import { Icon } from '../index';
import { CSSTransition } from 'react-transition-group';

const Tag = (props) => {
    const [visible, setVisible] = useState(props.visible ? props.visible : true);

    const tagClass = () => {
        let result = '';
        let className = {
            btn: 'rui-tag',
            lifted: props.lifted ? 'lifted' : '',
            uppercase: props.uppercase ? 'uppercase' : '',
            smooth: props.smooth && !props.rounded ? 'smooth' : '',
            rounded: props.rounded && !props.smooth ? 'rounded' : '',
            color: props.color && !props.disabled && !props.light && !props.dark ? props.color : '',
            small: props.small ? 'small' : '',
            outlined: props.outlined ? 'outlined' : '',
            className: props.className ? props.className : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    useEffect(() => {
        if (props.closable) setVisible(props.visible)
    }, [props.visible])

    return (
        <CSSTransition
            in={visible}
            timeout={300}
            classNames="rui-tag"
            unmountOnExit>
            <div className={tagClass()} style={{ width: props.width ? props.width : ''}}>
                {props.iconLeft ? <Icon name={props.iconLeft}/> : ''}
                {props.value}
                {props.iconRight ? <Icon name={props.iconRight}/> : ''}
                {props.closable ? 
                    <Icon 
                        className="rui-tag__close" 
                        name="close"
                        color="gray" 
                        onClick={() => {
                            props.onClose()
                            setVisible(false)
                        }}/> : ''}
            </div>
        </CSSTransition>
    )
}

export default Tag;
