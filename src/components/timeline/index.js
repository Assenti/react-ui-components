import React from 'react';
import { Tag, Card, Icon } from '../index';

const Timeline = (props) => {
    const timelineClass = () => {
        let result = '';
        let className = {
            name: 'rui-timeline',
            centered: props.centered ? 'centered' : '',
            color: props.color ? props.color : 'primary',
            className: props.className ? props.className : ''
        }
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
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
        <div className={timelineClass()}>
            {props.items.map((item, index) =>
                <div key={index} className={getItemClass(index)}>
                    <div className="rui-timeline__item__event">
                        {props.date ? 
                            <Tag 
                                small
                                outlined={props.tagOutlined} 
                                color={props.tagColor ? props.tagColor : props.color} 
                                value={item[props.date]}/> : ''}
                    </div>
                    <div className="rui-timeline__item__center">
                        <div className="rui-timeline__item-line"></div>
                        <div className={props.icon ? 'rui-timeline__item-point icon' : 'rui-timeline__item-point'}>
                            {props.icon ? 
                                <Icon 
                                    name={props.icon} 
                                    color={props.color === 'yellow' ? '' : '#fff'} 
                                    size={16}/> : ''}
                        </div>
                    </div>
                    {!props.data ? 
                    <Card flat={props.flatCard}>
                        {props.title ? <div className="rui-timeline__title">{item[props.title]}</div> : ''}
                        {props.subtitle ? <div className="rui-timeline__subtitle">{item[props.subtitle]}</div> : ''}
                    </Card> : props.data}
                </div>
            )}
        </div>
    )
}

export default Timeline;
