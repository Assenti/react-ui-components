import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { Icon, Tooltip } from '../index';

var Collapse = function Collapse(props) {
  var _useState = useState(props.defaultState ? props.defaultState : false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var collapseClass = function collapseClass() {
    var result = '';
    var className = {
      name: 'rui-collapse',
      border: props.border ? 'bordered' : '',
      title: props.title ? 'titled' : '',
      position: !props.title ? props.position ? props.position : 'right' : '',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  return React.createElement("div", {
    className: collapseClass()
  }, React.createElement("div", {
    className: "rui-collapse-trigger"
  }, props.title ? React.createElement("span", null, props.title) : '', React.createElement("div", {
    className: "row align-center"
  }, props.extra, props.tooltip ? React.createElement(Tooltip, {
    tooltip: props.tooltip
  }, React.createElement(Icon, {
    name: props.icon ? props.icon : 'chevron-down',
    size: props.iconSize ? props.iconSize : '',
    color: props.iconColor ? props.iconColor : 'gray',
    className: visible ? 'reverse' : '',
    onClick: function onClick() {
      return setVisible(!visible);
    }
  })) : React.createElement(Icon, {
    name: props.icon ? props.icon : 'chevron-down',
    size: props.iconSize ? props.iconSize : '',
    color: props.iconColor ? props.iconColor : 'gray',
    className: visible ? 'reverse' : '',
    onClick: function onClick() {
      return setVisible(!visible);
    }
  }))), React.createElement("div", {
    style: {
      height: visible ? 'auto' : 0,
      padding: visible ? '' : '0 5px'
    },
    className: "rui-collapse__content"
  }, props.children));
};

export default Collapse;