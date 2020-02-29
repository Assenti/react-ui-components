import React from 'react';
import { Icon } from '../index';

var Button = function Button(props) {
  var btnClass = function btnClass() {
    var result = '';
    var className = {
      btn: 'rui-btn',
      lifted: props.lifted ? 'lifted' : '',
      loading: props.loading ? 'loading' : '',
      uppercase: props.uppercase ? 'uppercase' : '',
      borderType: props.borderType ? props.borderType : '',
      color: props.color && !props.disabled && !props.loading && !props.light && !props.dark ? props.color : 'secondary',
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
    if (props.icon && !props.iconLeft) return 'rui-btn__text mr-5';else if (props.icon && props.iconLeft) return 'rui-btn__text ml-5';else return 'rui-btn__text';
  };

  return React.createElement("button", {
    type: props.type ? props.type : 'button',
    ref: props.ref ? props.ref : null,
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
    className: "rui-btn__allotted-icon"
  }, React.createElement(Icon, {
    size: 20,
    name: props.icon
  })) : React.createElement(Icon, {
    size: 20,
    name: props.icon
  }) : '', props.name ? React.createElement("div", {
    className: setMargin()
  }, props.name) : '', props.icon && !props.iconLeft ? props.iconAllotted ? React.createElement("div", {
    className: "rui-btn__allotted-icon"
  }, React.createElement(Icon, {
    size: 20,
    name: props.icon
  })) : React.createElement(Icon, {
    size: 20,
    name: props.icon
  }) : ''));
};

export default Button;