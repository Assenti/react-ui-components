import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { Icon } from '../index';

const TabItem = (props) => {
    return (
        <SwitchTransition>
            <CSSTransition
                key={props.active}
                addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                classNames="tabs">
                {props.children}
            </CSSTransition>
        </SwitchTransition>
    )
}

const Tabs = (props) => {
    const [active, setActive] = useState(props.defaultTab ? props.defaultTab : 0);

    const tabsClass = () => {
        let result = '';
        let className = {
            name: 'rui-tabs',
            pos: props.position && props.position !== 'default' ? props.position : '',
            className: props.className ? props.className : ''
        }
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    const tabsHeaderClass = () => {
        let result = '';
        let className = {
            name: 'rui-tabs__header',
            color: props.color ? props.color : 'primary',
            size: props.size && props.size !== 'default' ? props.size : '',
            centered: props.centered ? 'center' : '',
            stretch: props.stretch ? 'stretch' : ''
        }
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    const getIconColor = (isActive) => {
        switch (props.color) {
            case 'info':
                return isActive ? '#42a5f5' : '';
            case 'success':
                return isActive ? '#1aaa55' : '';
            case 'error':
                return isActive ? '#f44336' : '';
            case 'dark':
                return isActive ? '#4d4d4d' : '';
            default:
                return isActive ? '#1678c2' : '';
        }
    }

    return (
        <div className={tabsClass()}>
            <div className={tabsHeaderClass()}>
                {props.tabs.map((item, index) => 
                    <div 
                        key={index}
                        onClick={() => {
                            setActive(index)
                            if (props.onChange) props.onChange(index)
                        }}
                        className={index === active ? 
                            `rui-tabs__tab active ${props.activeHighlightFill ? 'fill' : ''}` : 
                            `rui-tabs__tab ${props.activeHighlightFill ? 'fill' : ''}`}>
                                {props.tabIconKey ? 
                                    <Icon
                                        size={18}
                                        className="mr-5" 
                                        name={item[props.tabIconKey]} 
                                        color={getIconColor(index === active)}/> : ''}
                                {props.tabTitleKey ? item[props.tabTitleKey] : item}
                            </div>
                )}
            </div>
            <div className="rui-tabs__content">
                <TabItem 
                    active={active}>
                    {props.tabItems[active]}
                </TabItem>
            </div>
        </div>
    )
}
Tabs.propTypes = {
    defaultTab: PropTypes.number,
    tabs: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.arrayOf(PropTypes.object)]).isRequired,
    tabItems: PropTypes.arrayOf(PropTypes.node).isRequired,
    tabTitleKey: PropTypes.string,
    tabIconKey: PropTypes.string,
    centered: PropTypes.bool,
    position: PropTypes.oneOf([undefined,'','left','bottom','right']),
    size: PropTypes.oneOf([undefined,'','medium','large']),
    activeHighlightFill: PropTypes.bool,
    onChange: PropTypes.func,
    color: PropTypes.oneOf([undefined,'','primary','info','error','success','']),
    className: PropTypes.string
}
export default Tabs;