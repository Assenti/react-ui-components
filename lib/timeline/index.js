import React from 'react';
import { Tag, Card, Icon } from '../index';

var Timeline = function Timeline(props) {
  var timelineClass = function timelineClass() {
    var result = '';
    var className = {
      name: 'rui-timeline',
      centered: props.centered ? 'centered' : '',
      color: props.color ? props.color : 'primary',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  var getItemClass = function getItemClass(index) {
    if (props.shuffled) {
      if (index % 2 === 0) {
        return 'rui-timeline__item shuffled';
      } else {
        return 'rui-timeline__item';
      }
    } else {
      return 'rui-timeline__item';
    }
  };

  return React.createElement("div", {
    className: timelineClass()
  }, props.items.map(function (item, index) {
    return React.createElement("div", {
      key: index,
      className: getItemClass(index)
    }, React.createElement("div", {
      className: "rui-timeline__item__event"
    }, props.date ? React.createElement(Tag, {
      small: true,
      outlined: props.tagOutlined,
      color: props.tagColor ? props.tagColor : props.color,
      value: item[props.date]
    }) : ''), React.createElement("div", {
      className: "rui-timeline__item__center"
    }, React.createElement("div", {
      className: "rui-timeline__item-line"
    }), React.createElement("div", {
      className: props.icon ? 'rui-timeline__item-point icon' : 'rui-timeline__item-point'
    }, props.icon ? React.createElement(Icon, {
      name: props.icon,
      color: props.color === 'yellow' ? '' : '#fff',
      size: 16
    }) : '')), !props.data ? React.createElement(Card, {
      flat: props.flatCard
    }, props.title ? React.createElement("div", {
      className: "rui-timeline__title"
    }, item[props.title]) : '', props.subtitle ? React.createElement("div", {
      className: "rui-timeline__subtitle"
    }, item[props.subtitle]) : '') : props.data);
  }));
};

export default Timeline;