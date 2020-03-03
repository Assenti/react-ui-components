import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { Icon } from '../index';

var TabItem = function TabItem(props) {
  return React.createElement(SwitchTransition, null, React.createElement(CSSTransition, {
    key: props.active,
    addEndListener: function addEndListener(node, done) {
      return node.addEventListener("transitionend", done, false);
    },
    classNames: "tabs"
  }, props.children));
};

var Tabs = function Tabs(props) {
  var _useState = useState(props.defaultTab ? props.defaultTab : 0),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var tabsClass = function tabsClass() {
    var result = '';
    var className = {
      name: 'rui-tabs',
      pos: props.position && props.position !== 'default' ? props.position : '',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  var tabsHeaderClass = function tabsHeaderClass() {
    var result = '';
    var className = {
      name: 'rui-tabs__header',
      color: props.color ? props.color : 'primary',
      size: props.size && props.size !== 'default' ? props.size : '',
      centered: props.centered ? 'center' : '',
      stretch: props.stretch ? 'stretch' : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  var getIconColor = function getIconColor(isActive) {
    switch (props.color) {
      case 'info':
        return isActive ? '#42a5f5' : '';

      case 'success':
        return isActive ? '#1aaa55' : '';

      case 'error':
        return isActive ? '#f44336' : '';

      case 'dark':
        return isActive ? '#4d4d4d' : '';

      default:
        return isActive ? '#1678c2' : '';
    }
  };

  return React.createElement("div", {
    className: tabsClass()
  }, React.createElement("div", {
    className: tabsHeaderClass()
  }, props.tabs.map(function (item, index) {
    return React.createElement("div", {
      key: index,
      onClick: function onClick() {
        setActive(index);
        if (props.onChange) props.onChange(index);
      },
      className: index === active ? "rui-tabs__tab active ".concat(props.activeHighlightFill ? 'fill' : '') : "rui-tabs__tab ".concat(props.activeHighlightFill ? 'fill' : '')
    }, props.tabIconKey ? React.createElement(Icon, {
      size: 18,
      className: "mr-5",
      name: item[props.tabIconKey],
      color: getIconColor(index === active)
    }) : '', props.tabTitleKey ? item[props.tabTitleKey] : item);
  })), React.createElement("div", {
    className: "rui-tabs__content"
  }, React.createElement(TabItem, {
    active: active
  }, props.tabItems[active])));
};

export default Tabs;