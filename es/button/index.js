import _objectSpread from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import React from 'react';
import { Icon } from '../icon';
export var Button = function Button(props) {
  var btnClass = function btnClass() {
    var result = '';
    var className = {
      btn: 'btn',
      lifted: props.lifted ? 'lifted' : '',
      loading: props.loading ? 'loading' : '',
      uppercase: props.uppercase ? 'uppercase' : '',
      smooth: props.smooth && !props.rounded ? 'smooth' : '',
      rounded: props.rounded && !props.smooth ? 'rounded' : '',
      color: props.color && !props.disabled && !props.loading && !props.light && !props.dark ? props.color : '',
      light: props.light && !props.dark ? 'light' : '',
      dark: props.dark && !props.light ? 'dark' : '',
      icon: props.icon && !props.name ? 'icon' : '',
      small: props.small ? 'small' : '',
      disabled: props.disabled || props.loading ? 'disabled' : '',
      size: props.size ? props.size : '',
      block: props.block ? 'block' : '',
      outlined: props.outlined ? 'outlined' : '',
      allotted: props.iconAllotted ? 'allotted' : '',
      iconLeft: props.iconLeft ? 'icon-left' : '',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  var setMargin = function setMargin() {
    if (props.icon && !props.iconLeft) return 'btn__text mr-5';else if (props.icon && props.iconLeft) return 'btn__text ml-5';else return 'btn__text';
  };

  return React.createElement("button", {
    ref: props.ref ? props.ref : null,
    style: _objectSpread({}, props.style),
    disabled: props.disabled || props.loading,
    className: btnClass(),
    onClick: function onClick(e) {
      return props.onClick ? props.onClick(e) : {};
    }
  }, props.loading ? React.createElement(Icon, {
    name: "loading",
    color: "gray",
    size: props.iconSize ? props.iconSize : ''
  }) : React.createElement(React.Fragment, null, props.icon && props.iconLeft ? props.iconAllotted ? React.createElement("div", {
    className: "btn__allotted-icon"
  }, React.createElement(Icon, {
    size: 20,
    name: props.icon
  })) : React.createElement(Icon, {
    size: 20,
    name: props.icon
  }) : '', props.name ? React.createElement("div", {
    className: setMargin()
  }, props.name) : '', props.icon && !props.iconLeft ? props.iconAllotted ? React.createElement("div", {
    className: "btn__allotted-icon"
  }, React.createElement(Icon, {
    size: 20,
    name: props.icon
  })) : React.createElement(Icon, {
    size: 20,
    name: props.icon
  }) : ''));
};
//# sourceMappingURL=index.js.map