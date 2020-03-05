import React from 'react';
import { Icon } from '../index';

var Avatar = function Avatar(props) {
  var componentClass = function componentClass() {
    var result = '';
    var className = {
      name: 'rui-avatar',
      color: props.color ? props.color : 'secondary',
      borderType: props.borderType ? props.borderType : '',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  return React.createElement("div", {
    className: componentClass(),
    style: {
      width: props.size ? props.size : 40,
      height: props.size ? props.size : 40
    }
  }, props.img && !props.icon ? React.createElement("img", {
    src: props.img,
    alt: ""
  }) : '', props.icon && !props.img ? React.createElement(Icon, {
    name: props.icon
  }) : '');
};

export default Avatar;