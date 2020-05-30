import React from 'react';
import PropTypes from 'prop-types';
import { Tag, Card, Icon } from '../index';
import { strinfigyClassObject } from '../utils';

const Timeline = (props) => {
    let className = {
        name: 'rui-timeline',
        centered: props.centered ? 'centered' : '',
        color: props.color ? props.color : 'primary',
        className: props.className ? props.className : ''
    }

    const getItemClass = (index) => {
        if (props.shuffled) {
            if (index % 2 === 0) {
                return 'rui-timeline__item shuffled';
            } else {
                return 'rui-timeline__item';
            }
        } else {
            return 'rui-timeline__item';
        }
    }

    return (
        <div className={strinfigyClassObject(className)}>
            {props.items.map((item, index) =>
                <div key={index} className={getItemClass(index)}>
                    <div className="rui-timeline__item__event">
                        {props.date ? 
                            <Tag 
                                small
                                outlined={props.tagOutlined} 
                                borderType={props.tagBorderType}
                                color={props.tagColor ? props.tagColor : props.color} 
                                value={item[props.date]}/> : null}
                    </div>
                    <div className="rui-timeline__item__center">
                        <div className="rui-timeline__item-line"></div>
                        <div className={props.icon ? 'rui-timeline__item-point icon' : 'rui-timeline__item-point'}>
                            {props.icon ? 
                                <Icon 
                                    name={props.icon} 
                                    color={props.color === 'yellow' ? '' : '#fff'} 
                                    size={16}/> : null}
                        </div>
                    </div>
                    {!props.data ? 
                    <Card flat={props.flatCard}>
                        {!!props.title && <div className="rui-timeline__title">{item[props.title]}</div>}
                        {!!props.subtitle && <div className="rui-timeline__subtitle">{item[props.subtitle]}</div>}
                    </Card> : props.data}
                </div>
            )}
        </div>
    )
}
Timeline.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    centered: PropTypes.bool,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    flatCard: PropTypes.bool,
    icon: PropTypes.string,
    color: PropTypes.oneOf([undefined,'','primary', 'info', 'success', 'error', 'yellow', 'dark']),
    data: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.number]),
    tagColor: PropTypes.oneOf([undefined,'','primary', 'info', 'success', 'error','yellow','dark']),
    tagOutlined: PropTypes.bool,
    tagBorderType: PropTypes.oneOf([undefined,'default','tile','smooth','rounded']),
    date: PropTypes.string,
    className: PropTypes.string
}
export default Timeline;