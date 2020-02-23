import React from 'react';
import { Icon } from '../icon';
export var Switch = function Switch(props) {
  var switchClass = function switchClass() {
    var result = '';
    var className = {
      btn: 'switch',
      active: props.check ? 'active' : 'disactive',
      disabled: props.disabled ? 'disabled' : '',
      color: props.color ? props.color : '',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  return React.createElement("div", {
    className: props.position === 'vertical' ? 'switch-container vertical' : 'switch-container'
  }, props.leftLabel && !props.leftIcon ? React.createElement("div", {
    className: "switch-left-label"
  }, props.leftLabel) : '', props.leftIcon && !props.leftLabel ? React.createElement(Icon, {
    name: props.leftIcon,
    color: props.leftIconColor
  }) : '', React.createElement("div", {
    className: switchClass(),
    onClick: function onClick() {
      return !props.disabled ? props.onChange() : {};
    }
  }, React.createElement("span", null)), props.rightIcon && !props.rightLabel ? React.createElement(Icon, {
    name: props.rightIcon,
    color: props.rightIconColor
  }) : '', props.rightLabel && !props.rightIcon ? React.createElement("div", {
    className: "switch-right-label"
  }, props.rightLabel) : '');
};
//# sourceMappingURL=index.js.map