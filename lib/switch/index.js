import React from 'react';
import { Icon } from '../index';

var Switch = function Switch(props) {
  var switchContainerClass = function switchContainerClass() {
    var result = '';
    var className = {
      btn: 'rui-switch-container',
      size: props.size && props.size !== 'default' ? props.size : '',
      vertical: props.vertical ? 'vertical' : '',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  var switchClass = function switchClass() {
    var result = '';
    var className = {
      btn: 'rui-switch',
      active: props.check ? 'active' : 'disactive',
      double: props.leftLabel || props.leftIcon ? 'double' : '',
      disabled: props.disabled ? 'disabled' : '',
      color: props.color ? props.color : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  return React.createElement("div", {
    className: switchContainerClass()
  }, props.leftLabel && !props.leftIcon ? React.createElement("div", {
    className: "rui-switch-left-label"
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
    className: "rui-switch-right-label"
  }, props.rightLabel) : '');
};

export default Switch;