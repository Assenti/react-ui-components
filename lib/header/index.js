import React from 'react';
import { Button } from '../index';

var Header = function Header(props) {
  var headerClass = function headerClass() {
    var result = '';
    var className = {
      name: 'rui-header',
      dark: props.dark ? 'dark' : 'light',
      color: props.color ? props.color : '',
      sticky: props.sticky ? 'sticky' : '',
      smooth: props.smooth ? 'smooth' : '',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  return React.createElement("div", {
    className: headerClass(),
    style: {
      height: props.height ? props.height : ''
    }
  }, React.createElement("div", {
    className: "rui-header__left-side"
  }, props.leftControl ? React.createElement("div", null, React.createElement(Button, {
    dark: props.dark ? props.dark : false,
    light: props.light || !props.color && !props.dark ? true : false,
    color: props.color,
    icon: props.leftControlIcon ? props.leftControlIcon : 'menu',
    onClick: function onClick() {
      return props.onLeftControl ? props.onLeftControl() : {};
    }
  })) : '', React.createElement("div", {
    className: "rui-header__title"
  }, props.title)), React.createElement("div", {
    className: "rui-header__right-side"
  }, props.rightSide));
};

export default Header;
//# sourceMappingURL=index.js.map