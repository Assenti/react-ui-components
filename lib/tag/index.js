import React from 'react';
import { Icon } from '../icon';
export var Tag = function Tag(props) {
  var tagClass = function tagClass() {
    var result = '';
    var className = {
      btn: 'rui-tag',
      lifted: props.lifted ? 'lifted' : '',
      uppercase: props.uppercase ? 'uppercase' : '',
      smooth: props.smooth && !props.rounded ? 'smooth' : '',
      rounded: props.rounded && !props.smooth ? 'rounded' : '',
      color: props.color && !props.disabled && !props.light && !props.dark ? props.color : '',
      small: props.small ? 'small' : '',
      outlined: props.outlined ? 'outlined' : '',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  return React.createElement("div", {
    className: tagClass(),
    style: {
      width: props.width ? props.width : ''
    }
  }, props.iconLeft ? React.createElement(Icon, {
    name: props.iconLeft
  }) : '', props.value, props.iconRight ? React.createElement(Icon, {
    name: props.iconRight
  }) : '');
};
//# sourceMappingURL=index.js.map