import _slicedToArray from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
export var Dropdown = function Dropdown(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var menuClass = function menuClass() {
    var result = '';
    var className = {
      name: 'dropdown-container',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  return React.createElement("div", {
    className: menuClass(),
    tabIndex: -1,
    onBlur: function onBlur() {
      return setVisible(false);
    }
  }, React.createElement("div", {
    onClick: function onClick() {
      return setVisible(true);
    }
  }, props.trigger), React.createElement(CSSTransition, {
    in: visible,
    timeout: 300,
    classNames: "dropdown",
    unmountOnExit: true
  }, React.createElement("div", {
    className: "dropdown",
    style: {
      width: props.width ? props.width : '',
      minWidth: props.minWidth ? props.minWidth : ''
    }
  }, React.createElement("div", {
    onClick: function onClick() {
      return setVisible(false);
    }
  }, props.content))));
};
//# sourceMappingURL=index.js.map