import React from 'react';
import { CSSTransition } from 'react-transition-group';
export var Modal = function Modal(props) {
  var close = function close(e) {
    if (e.target === e.currentTarget) props.onClose();
  };

  return React.createElement("div", {
    className: props.visible ? 'modal-container' : 'modal-container hidden',
    onClick: function onClick(e) {
      return props.closable ? close(e) : {};
    }
  }, React.createElement(CSSTransition, {
    in: props.visible,
    timeout: 300,
    classNames: "modal",
    unmountOnExit: true,
    onEnter: function onEnter() {
      return props.onEnter ? props.onEnter() : {};
    },
    onExited: function onExited() {
      return props.onExited ? props.onExited() : {};
    }
  }, React.createElement("div", {
    className: "modal"
  }, React.createElement("div", {
    className: "modal-header"
  }, props.header), React.createElement("div", {
    className: "modal-content"
  }, props.children), props.footer ? React.createElement("div", {
    className: "modal-footer"
  }, props.footer) : '')));
};