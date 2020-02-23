import _objectSpread from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { Icon } from '../icon';
import { Tooltip } from '../tooltip';
import { CSSTransition } from 'react-transition-group';
export var Collapse = function Collapse(props) {
  var _useState = useState(props.defaultState ? props.defaultState : false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var collapseClass = function collapseClass() {
    var result = '';
    var className = {
      name: 'collapse',
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
    className: "collapse-trigger"
  }, props.title ? React.createElement("span", null, props.title) : '', props.tooltip ? React.createElement(Tooltip, {
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
  })), React.createElement(CSSTransition, {
    in: visible,
    timeout: 300,
    unmountOnExit: true,
    classNames: "collapse"
  }, React.createElement("div", {
    className: "collapse-content",
    style: _objectSpread({}, props.contentStyles)
  }, props.children)));
};
//# sourceMappingURL=index.js.map