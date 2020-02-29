import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Icon } from '../index';

var Modal = function Modal(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      full = _useState2[0],
      setFull = _useState2[1];

  var modalContainerClass = function modalContainerClass() {
    var result = '';
    var className = {
      name: 'rui-modal-container',
      hidden: props.visible ? '' : 'hidden',
      headerReverse: props.headerReverse ? 'reverse' : '',
      centered: props.centered ? 'centered' : '',
      fullPage: full ? 'full-page' : '',
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
    className: modalClass(),
    style: {
      marginTop: props.marginTop && !full ? props.marginTop : !full ? 20 : '',
      padding: props.padding ? props.padding : ''
    }
  }, React.createElement("div", {
    className: "rui-modal-header"
  }, React.createElement("div", null, props.header), React.createElement("div", {
    className: "rui-modal-header-icons"
  }, props.toggleFullscreen ? React.createElement(Icon, {
    color: props.fullscreenIconColor ? props.fullscreenIconColor : '',
    name: full ? 'fullscreen-exit' : 'fullscreen',
    onClick: function onClick() {
      return setFull(!full);
    }
  }) : '', React.createElement(Icon, {
    color: props.closeIconColor ? props.closeIconColor : '',
    name: "close",
    onClick: function onClick() {
      return props.onClose ? props.onClose() : {};
    }
  }))), React.createElement("div", {
    className: "rui-modal-content"
  }, props.children), props.footer ? React.createElement("div", {
    className: "rui-modal-footer"
  }, props.footer) : '')));
};

export default Modal;