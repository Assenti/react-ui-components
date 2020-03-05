import React from 'react';
import { Button, Tooltip } from '../index';

var FloatingBtn = function FloatingBtn(props) {
  var getStyles = function getStyles() {
    switch (props.position) {
      case 'top-left':
        return {
          left: props.offsetX ? props.offsetX : 5,
          top: props.offsetY ? props.offsetY : 5
        };

      case 'top-right':
        return {
          right: props.offsetX ? props.offsetX : 5,
          top: props.offsetY ? props.offsetY : 5
        };

      case 'bottom-left':
        return {
          left: props.offsetX ? props.offsetX : 5,
          bottom: props.offsetY ? props.offsetY : 5
        };

      default:
        return {
          right: props.offsetX ? props.offsetX : 5,
          bottom: props.offsetY ? props.offsetY : 5
        };
    }
  };

  return React.createElement("div", {
    className: "rui-floating-btn",
    style: getStyles()
  }, props.tooltip ? React.createElement(Tooltip, {
    tooltip: props.tooltip,
    position: props.tooltipPosition
  }, React.createElement(Button, {
    icon: props.icon,
    lifted: props.lifted,
    color: props.color ? props.color : 'primary',
    size: props.size ? props.size : 'medium',
    onClick: function onClick() {
      return props.onClick ? props.onClick() : {};
    },
    light: props.light,
    dark: props.dark
  })) : React.createElement(Button, {
    icon: props.icon,
    lifted: props.lifted,
    color: props.color ? props.color : 'primary',
    size: props.size ? props.size : 'medium',
    onClick: function onClick() {
      return props.onClick ? props.onClick() : {};
    },
    light: props.light,
    dark: props.dark
  }));
};

export default FloatingBtn;