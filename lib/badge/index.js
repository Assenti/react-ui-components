import React from 'react';
import { Icon } from '../index';

var Badge = function Badge(props) {
  var badgeClass = function badgeClass() {
    var result = '';
    var className = {
      btn: 'rui-badge-container',
      rounded: props.rounded ? 'rounded' : '',
      color: props.color ? props.color : 'secondary',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  return React.createElement("div", {
    className: badgeClass()
  }, props.parent, React.createElement("div", {
    className: !props.visible ? 'rui-badge' : 'rui-badge hide'
  }, !props.visible && !props.icon ? props.value : '', !props.visible && !props.value && props.icon ? React.createElement(Icon, {
    name: props.icon,
    size: 14,
    color: props.color === 'secondary' ? '' : '#fff'
  }) : ''));
};

export default Badge;