import React, { useState } from 'react';
import { strinfigyClassObject } from '../utils';
import PropTypes from 'prop-types';
import { Tooltip, Button, Icon } from '../index';

const Sidebar = (props) => {
    let className = {
        name: 'rui-sidebar',
        lifted: props.lifted ? 'lifted' : '',
        min: props.min ? 'min' : '',
        dark: props.dark ? 'dark' : ''
    }
    const [min, setMin] = useState(props.default ? true : false);
    const width = props.width ? props.width : 280;
    const minWidth = props.minWidth ? props.minWidth : 50; 

    const getWidth = () => {
        return min ? minWidth : width;
    }

    return (
        <div className={strinfigyClassObject(className)}
            style={{ 
                width: getWidth(),
                minWidth: getWidth(),
                height: props.height ? props.height : '',
                maxHeight: props.height ? props.height : ''
            }}>
            <div className="rui-sidebar-content">
                {props.children}
            </div>
            {props.collapsable && 
            <div className="rui-sidebar-footer">
                <Tooltip tooltip={min ? 
                        (props.expandText ? props.expandText : 'Expand') : 
                        (props.collapseText ? props.collapseText : 'Collapse')
                    }>
                    <Button
                        dark={props.dark}
                        light={props.dark ? false : true}
                        icon={<Icon name={min ? 
                            (props.rightSide ? 'chevron-double-left' : 'chevron-double-right') : 
                            (props.rightSide ? 'chevron-double-right' : 'chevron-double-left')
                        }/>}
                        onClick={() => {
                            if (props.onToggle) props.onToggle(!min)
                            setMin(!min)
                        }}/>
                </Tooltip>
            </div>}
        </div>
    )
}
Sidebar.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    min: PropTypes.bool,
    collapsable: PropTypes.bool,
    onToggle: PropTypes.func,
    expandText: PropTypes.string,
    rightSide: PropTypes.bool,
    collapseText: PropTypes.string,
    dark: PropTypes.bool,
    lifted: PropTypes.bool,
    children: PropTypes.node,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
export default Sidebar;