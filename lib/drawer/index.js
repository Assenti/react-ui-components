import _slicedToArray from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Button, Tooltip } from '../index';

var Drawer = function Drawer(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isXs = _useState2[0],
      setIsXs = _useState2[1];

  var drawerClass = function drawerClass() {
    var result = '';
    var className = {
      name: 'rui-drawer',
      collapsable: props.collapsable ? 'collapsable' : '',
      smooth: props.smooth ? 'smooth' : '',
      min: props.min ? 'min' : '',
      absolute: props.absolute ? 'absolute' : '',
      fullHeight: props.fullHeight ? 'full-height' : '',
      dark: props.dark && !props.light ? 'dark' : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  var handleClose = function handleClose(e) {
    e.preventDefault();

    if (e.currentTarget === e.target) {
      if (props.onClose) props.onClose();
    }
  };

  useEffect(function () {
    window.addEventListener('resize', function () {
      if (window.innerWidth > 529) {
        setIsXs(false);
      } else {
        setIsXs(true);
      }
    });
  }, []);
  return React.createElement(React.Fragment, null, isXs ? React.createElement(CSSTransition, {
    in: props.drawer,
    timeout: 100,
    classNames: "drawer-background",
    unmountOnExit: true
  }, React.createElement("div", {
    className: props.drawer ? 'rui-drawer-background' : 'rui-drawer-background none',
    onClick: handleClose
  }, React.createElement(CSSTransition, {
    in: props.drawer,
    timeout: 300,
    classNames: "drawer",
    unmountOnExit: true
  }, React.createElement(CSSTransition, {
    in: props.min,
    timeout: 300,
    classNames: "expand"
  }, React.createElement("div", {
    className: drawerClass()
  }, React.createElement("div", {
    className: "rui-drawer-content"
  }, props.header ? React.createElement("div", {
    className: props.headerCentered ? 'rui-drawer-header centered' : 'rui-drawer-header'
  }, props.header) : '', props.children), props.collapsable ? React.createElement("div", {
    className: "rui-drawer-footer"
  }, React.createElement(Tooltip, {
    tooltip: props.min ? 'Expand' : 'Collapse'
  }, React.createElement(Button, {
    dark: props.dark,
    light: props.dark ? false : true,
    icon: props.min ? 'chevron-double-right' : 'chevron-double-left',
    onClick: function onClick() {
      return props.onResize();
    }
  }))) : ''))))) : React.createElement(CSSTransition, {
    in: props.drawer,
    timeout: 300,
    classNames: "drawer",
    unmountOnExit: true
  }, React.createElement(CSSTransition, {
    in: props.min,
    timeout: 300,
    classNames: "expand"
  }, React.createElement("div", {
    className: drawerClass()
  }, React.createElement("div", {
    className: "rui-drawer-content"
  }, props.header ? React.createElement("div", {
    className: props.headerCentered ? 'rui-drawer-header centered' : 'rui-drawer-header'
  }, props.header) : '', props.children), props.collapsable ? React.createElement("div", {
    className: "rui-drawer-footer"
  }, React.createElement(Tooltip, {
    tooltip: props.min ? 'Expand' : 'Collapse'
  }, React.createElement(Button, {
    dark: props.dark,
    light: props.dark ? false : true,
    icon: props.min ? 'chevron-double-right' : 'chevron-double-left',
    onClick: function onClick() {
      return props.onResize();
    }
  }))) : ''))));
};

export default Drawer;
//# sourceMappingURL=index.js.map