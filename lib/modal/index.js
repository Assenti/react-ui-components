import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Icon } from '../icon';
export var Modal = function Modal(props) {
  var modalContainerClass = function modalContainerClass() {
    var result = '';
    var className = {
      name: 'rui-modal-container',
      hidden: props.visible ? '' : 'hidden',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  var modalClass = function modalClass() {
    var result = '';
    var className = {
      name: 'rui-modal',
      dark: props.dark ? 'dark' : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  var close = function close(e) {
    if (e.target === e.currentTarget) props.onClose();
  };

  return React.createElement("div", {
    className: modalContainerClass(),
    onClick: function onClick(e) {
      return props.closable ? close(e) : {};
    }
  }, React.createElement(CSSTransition, {
    in: props.visible,
    timeout: 300,
    classNames: "modal",
    unmountOnExit: true
  }, React.createElement("div", {
    className: modalClass()
  }, React.createElement("div", {
    className: "rui-modal-header"
  }, React.createElement("div", null, props.header), React.createElement(Icon, {
    name: "close",
    onClick: function onClick() {
      return props.onClose ? props.onClose() : {};
    }
  })), React.createElement("div", {
    className: "rui-modal-content"
  }, props.children), props.footer ? React.createElement("div", {
    className: "rui-modal-footer"
  }, props.footer) : '')));
};
//# sourceMappingURL=index.js.map