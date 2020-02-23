import _slicedToArray from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, createRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Icon } from '../icon';
export var PopOver = function PopOver(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var popup = createRef();
  var content = createRef();

  var popoverClass = function popoverClass() {
    var result = '';
    var className = {
      name: 'popover',
      dark: props.dark ? 'dark' : '',
      position: props.bottom ? 'bottom' : '',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  return React.createElement("div", {
    className: popoverClass(),
    tabIndex: -1,
    ref: popup,
    onBlur: function onBlur() {
      return props.control && !props.noBlur ? props.onClose() : setVisible(false);
    },
    onMouseLeave: function onMouseLeave() {
      return props.trigger === 'hover' ? setVisible(false) : {};
    }
  }, React.createElement(CSSTransition, {
    in: props.control ? props.visible : visible,
    timeout: 150,
    classNames: props.bottom ? 'popdown' : 'popup',
    unmountOnExit: true
  }, React.createElement("div", {
    className: "popover__content",
    id: "popover-content",
    ref: content
  }, React.createElement("div", {
    className: "popover__content-header"
  }, React.createElement("span", null, props.title), React.createElement(Icon, {
    size: 18,
    name: "close",
    color: props.dark ? '#fff' : 'gray',
    onClick: function onClick() {
      return props.control ? props.onClose() : setVisible(false);
    }
  })), React.createElement("div", {
    className: "popover__content-body"
  }, props.content))), React.createElement("div", {
    className: "popover__children",
    onMouseOver: function onMouseOver() {
      return props.trigger === 'hover' ? setVisible(true) : {};
    },
    onClick: function onClick() {
      return props.trigger !== 'hover' ? props.control ? {} : setVisible(!visible) : {};
    }
  }, props.children));
};
//# sourceMappingURL=index.js.map