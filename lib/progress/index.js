import React from 'react';
import { Icon } from '../index';

var Progress = function Progress(props) {
  var componentClass = function componentClass() {
    var result = '';
    var className = {
      name: 'rui-progress__container',
      circle: props.circle ? 'circle' : '',
      active: props.active ? 'active' : '',
      color: props.color ? props.color : 'primary',
      size: props.size && props.size !== 'default' ? props.size : '',
      disabled: props.disabled ? 'disabled' : '',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  var sizeParams = function sizeParams() {
    if (props.size && props.size !== 'default') {
      if (props.size === 'medium') return {
        radius: 50,
        stroke: 7,
        iconSize: 28
      };else if (props.size === 'large') return {
        radius: 60,
        stroke: 9,
        iconSize: 34
      };
    } else {
      return {
        radius: 40,
        stroke: 5.5,
        iconSize: 22
      };
    }
  };

  var colorParams = function colorParams() {
    if (props.iconColor) {
      return props.iconColor;
    } else {
      switch (props.color) {
        case 'info':
          return '#42a5f5';

        case 'success':
          return '#1aaa55';

        case 'error':
          return '#f44336';

        default:
          return '#1678c2';
      }
    }
  };

  var getCompletion = function getCompletion() {
    return props.complete ? props.complete : 0;
  };

  var convertToDeg = function convertToDeg(percent) {
    return 360 * percent / 100;
  };

  var Circle = function Circle() {
    var complete = props.complete;
    var radius = props.radius ? props.radius : sizeParams().radius;
    var stroke = props.stroke ? props.stroke : sizeParams().stroke;
    var normalizedRadius = radius - stroke * 2;
    var circumference = normalizedRadius * 2 * Math.PI;
    var strokeComplete = circumference - complete / 100 * circumference;
    var strokeRemain = circumference - (100 - complete) / 100 * circumference;
    var remainPercent = strokeRemain * 100 / circumference;
    return React.createElement("svg", {
      height: radius * 2,
      width: radius * 2
    }, React.createElement("circle", {
      className: "circle",
      strokeWidth: stroke,
      strokeDasharray: circumference + ' ' + circumference,
      style: {
        strokeDashoffset: strokeComplete,
        transform: "rotate(-90deg)"
      },
      r: normalizedRadius,
      cx: radius,
      cy: radius
    }), React.createElement("circle", {
      className: "circle-remain",
      strokeWidth: stroke,
      strokeDasharray: circumference + ' ' + circumference,
      style: {
        strokeDashoffset: strokeRemain,
        transform: "rotate(".concat(-90 + convertToDeg(remainPercent), "deg)")
      },
      r: normalizedRadius,
      cx: radius,
      cy: radius
    }));
  };

  return React.createElement("div", {
    className: componentClass()
  }, !props.circle ? React.createElement(React.Fragment, null, React.createElement("div", {
    className: "rui-progress",
    style: {
      width: props.width ? props.width : 250
    }
  }, React.createElement("div", {
    className: "rui-progress__complete",
    style: {
      width: "".concat(getCompletion(), "%")
    }
  })), !props.hideState && !props.icon ? React.createElement("div", {
    className: "rui-progress__state"
  }, props.complete ? props.complete : 0, React.createElement("small", null, "%")) : '', props.icon ? React.createElement(Icon, {
    className: "ml-5",
    name: props.icon,
    color: colorParams(),
    size: sizeParams().iconSize
  }) : '') : React.createElement(React.Fragment, null, React.createElement(Circle, null), !props.hideState && !props.icon ? React.createElement("div", {
    className: "rui-progress__state circle"
  }, props.complete ? props.complete : 0, React.createElement("small", null, "%")) : '', props.icon ? React.createElement(Icon, {
    className: "circle",
    name: props.icon,
    color: colorParams()
  }) : ''));
};

export default Progress;