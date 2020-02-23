import _slicedToArray from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState, createRef } from 'react';
import { Button } from '../button';
import { CSSTransition } from 'react-transition-group';
import { Tooltip } from '../tooltip';
export var BackTopBtn = function BackTopBtn(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = useState(props.breakpoint ? props.breakpoint : 60),
      _useState4 = _slicedToArray(_useState3, 1),
      breakpoint = _useState4[0];

  var blockRef = createRef();

  var handleScroll = function handleScroll(e) {
    if (e.srcElement.scrollTop > breakpoint) setVisible(true);else setVisible(false);
  };

  useEffect(function () {
    document.addEventListener('scroll', handleScroll, true);
    return function () {
      return document.removeEventListener('scroll', handleScroll, true);
    };
  }, ['scroll', document]);

  var goTop = function goTop() {
    if (props.setRef.current) {
      props.setRef.current.scrollIntoView({
        behavior: "smooth",
        block: 'start'
      });
    }
  };

  var btnBackTopClass = function btnBackTopClass() {
    var result = '';
    var className = {
      name: 'rui-btn-back-top',
      dark: props.dark ? 'dark' : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  return React.createElement("div", {
    className: btnBackTopClass(),
    ref: blockRef,
    style: {
      right: props.offsetX ? props.offsetX : 25,
      bottom: props.offsetY ? props.offsetY : 25
    }
  }, React.createElement(CSSTransition, {
    in: visible,
    timeout: 500,
    classNames: "btn-back-top",
    unmountOnExit: true
  }, props.tooltip ? React.createElement(Tooltip, {
    tooltip: props.tooltip
  }, React.createElement(Button, {
    icon: "arrow-up-bold",
    lifted: true,
    size: props.size ? props.size : '',
    onClick: function onClick() {
      return goTop();
    },
    light: !props.dark ? true : false,
    dark: props.dark ? true : false
  })) : React.createElement(Button, {
    icon: "arrow-up-bold",
    lifted: true,
    size: props.size ? props.size : '',
    onClick: function onClick() {
      return goTop();
    },
    light: !props.dark ? true : false,
    dark: props.dark ? true : false
  })));
};
//# sourceMappingURL=index.js.map