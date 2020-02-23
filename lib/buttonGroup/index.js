import _slicedToArray from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { Button } from '../index';
export var ButtonGroup = function ButtonGroup(props) {
  var _useState = useState(props.default),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var componentClass = function componentClass() {
    var result = '';
    var className = {
      btn: 'btn-group',
      lifted: props.lifted ? 'lifted' : '',
      icons: props.icon ? 'icons' : '',
      size: props.size ? props.size : '',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  var isActive = function isActive(index) {
    return index === active ? 'active' : '';
  };

  var handleChange = function handleChange(item, index) {
    if (props.onChange) props.onChange(item, index);
    setActive(index);
  };

  return React.createElement("div", {
    className: componentClass()
  }, props.options.map(function (item, index) {
    return React.createElement(Button, {
      key: index,
      size: props.size ? props.size : '',
      className: isActive(index),
      name: !props.icon ? item : '',
      icon: props.icon ? item : '',
      color: props.color ? props.color : '',
      onClick: function onClick() {
        return handleChange(item, index);
      },
      outlined: props.outlined ? true : false
    });
  }));
};
//# sourceMappingURL=index.js.map