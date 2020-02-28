import React from 'react';
export var Card = function Card(props) {
  var cardClass = function cardClass() {
    var result = '';
    var className = {
      card: 'rui-card',
      flat: props.flat ? 'flat' : '',
      dark: props.dark ? 'dark' : '',
      hover: props.hover ? 'hover' : '',
      outlined: props.outlined && !props.dark ? 'outlined' : '',
      color: props.color && !props.dark ? props.color : 'gray',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  return React.createElement("div", {
    className: cardClass(),
    style: {
      width: props.width ? props.width : '',
      minWidth: props.minWidth ? props.minWidth : ''
    }
  }, props.title && props.outlined && !props.dark ? React.createElement("div", {
    className: "rui-card-title"
  }, props.title) : '', props.header ? React.createElement("div", {
    className: "rui-card-header"
  }, props.header) : '', props.img ? props.img : '', props.children, props.footer ? React.createElement("div", {
    className: "rui-card-footer"
  }, props.footer) : '');
};
//# sourceMappingURL=index.js.map