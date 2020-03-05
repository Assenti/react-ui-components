import React from 'react';
import { Button } from '../index';

const Header = (props) => {
    const headerClass = () => {
        let result = '';
        let className = {
            name: 'rui-header',
            dark: props.dark ? 'dark' : 'light',
            color: props.color && props.color !== 'default' ? props.color : '',
            sticky: props.sticky ? 'sticky' : '',
            smooth: props.smooth ? 'smooth' : '',
            className: props.className ? props.className : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div className={headerClass()} 
            style={{ 
                height: props.height ? props.height : ''
            }}>
            <div className="rui-header__left-side">
                {props.leftControl ? <div>
                    <Button
                        dark={props.dark ? props.dark : false}
                        light={props.light || (!props.color && !props.dark) ? true : false}
                        color={props.color}
                        icon={props.leftControlIcon ? props.leftControlIcon : 'menu'} 
                        onClick={() => props.onLeftControl ? props.onLeftControl() : {}}/>
                </div> : ''}
                <div className="rui-header__title">{props.title}</div>
            </div>
            <div className="rui-header__right-side">
                {props.rightSide}
            </div>
        </div>
    )
}

export default Header;
