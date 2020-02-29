import _slicedToArray from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect } from 'react';
import { Icon } from '../index';
import { CSSTransition } from 'react-transition-group';

var Tag = function Tag(props) {
  var _useState = useState(props.visible ? props.visible : true),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var tagClass = function tagClass() {
    var result = '';
    var className = {
      name: 'rui-tag',
      lifted: props.lifted ? 'lifted' : '',
      uppercase: props.uppercase ? 'uppercase' : '',
      borderType: props.borderType ? props.borderType === 'default' ? '' : props.borderType : '',
      color: props.color ? props.color : 'primary',
      small: props.small ? 'small' : '',
      outlined: props.outlined ? 'outlined' : '',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  useEffect(function () {
    if (props.closable) setVisible(props.visible);
  }, [props.visible]);
  return React.createElement(CSSTransition, {
    in: visible,
    timeout: 300,
    classNames: "rui-tag",
    unmountOnExit: true
  }, React.createElement("div", {
    className: tagClass(),
    ref: props.setRef,
    style: {
      width: props.width ? props.width : ''
    }
  }, props.iconLeft ? React.createElement(Icon, {
    name: props.iconLeft
  }) : '', props.value, props.iconRight ? React.createElement(Icon, {
    name: props.iconRight
  }) : '', props.closable ? React.createElement(Icon, {
    className: "rui-tag__close",
    name: "close",
    color: "gray",
    onClick: function onClick() {
      props.onClose();
      setVisible(false);
    }
  }) : ''));
};

export default Tag;
//# sourceMappingURL=index.js.map