import React from 'react';

var List = function List(props) {
  var listClass = function listClass() {
    var result = '';
    var className = {
      list: 'rui-list',
      size: props.size ? props.size : '',
      dark: props.dark ? 'dark' : '',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  return React.createElement("div", {
    className: listClass()
  }, props.header ? React.createElement("div", {
    className: "rui-list-header"
  }, props.header) : '', props.children);
};

export default List;