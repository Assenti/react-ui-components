import _slicedToArray from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
export var Tooltip = function Tooltip(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var tooltipClass = function tooltipClass() {
    var result = '';
    var className = {
      name: 'tooltip',
      position: props.position ? props.position : '',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  return React.createElement("div", {
    className: tooltipClass(),
    onMouseEnter: function onMouseEnter() {
      return setShow(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setShow(false);
    }
  }, React.createElement(CSSTransition, {
    in: show,
    timeout: 300,
    classNames: "tooltip",
    unmountOnExit: true
  }, React.createElement("div", null, props.tooltip)), props.children);
};
//# sourceMappingURL=index.js.map