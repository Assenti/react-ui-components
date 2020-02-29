import _toConsumableArray from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useRef } from 'react';
import { Icon } from '../index';

var Uploader = function Uploader(props) {
  var inputFile = useRef();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      focus = _useState2[0],
      setFocus = _useState2[1];

  var inputFieldClass = function inputFieldClass() {
    var result = '';
    var className = {
      input: 'rui-input-uploader',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  var inputContainer = function inputContainer() {
    var result = '';
    var className = {
      name: 'rui-input-uploader__container',
      size: props.size ? props.size : '',
      color: props.color && !props.disabled && !props.light && !props.dark ? props.color : '',
      lifted: props.lifted ? 'lifted' : '',
      borderType: props.borderType ? props.borderType : '',
      disabled: props.disabled ? 'disabled' : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  var handleFocus = function handleFocus(e) {
    if (props.onFocus) props.onFocus(e);
    setFocus(true);
  };

  var handleBlur = function handleBlur(e) {
    if (props.onBlur) props.onBlur(e);
    setFocus(false);
  };

  return React.createElement("div", {
    className: inputFieldClass(),
    style: {
      width: props.width ? props.width : ''
    }
  }, React.createElement("div", {
    className: inputContainer()
  }, React.createElement(Icon, {
    name: "download",
    size: 20
  }), props.label ? React.createElement("label", {
    onClick: function onClick() {
      return inputFile.current.focus();
    }
  }, props.label) : '', React.createElement("input", {
    onFocus: handleFocus,
    onBlur: handleBlur,
    ref: inputFile,
    multiple: props.multiple ? true : false,
    accept: props.accept ? props.accept : undefined,
    title: props.title,
    disabled: props.disabled,
    required: props.required,
    onChange: function onChange(e) {
      return props.onChange(_toConsumableArray(e.target.files));
    },
    type: "file"
  }), props.value && props.value.length > 0 ? React.createElement("span", null, props.value.length) : ""), props.value && props.value.length > 0 ? React.createElement("div", {
    className: props.rounded ? 'rui-input-uploader__items rounded' : 'rui-input-uploader__items'
  }, props.value.map(function (item, index) {
    return React.createElement("div", {
      key: index,
      className: "rui-input-uploader__item"
    }, React.createElement("span", null, item.name), React.createElement(Icon, {
      name: "close",
      size: 20,
      onClick: function onClick() {
        return props.onDelete(item.name);
      }
    }));
  })) : '');
};

export default Uploader;
//# sourceMappingURL=index.js.map