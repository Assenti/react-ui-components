import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '../index';

var TextareaField = function TextareaField(props) {
  var input = useRef(null);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      focus = _useState2[0],
      setFocus = _useState2[1];

  var _useState3 = useState(props.rows ? props.rows : 1),
      _useState4 = _slicedToArray(_useState3, 2),
      rows = _useState4[0],
      setRows = _useState4[1];

  var _useState5 = useState(props.rows ? props.rows : 1),
      _useState6 = _slicedToArray(_useState5, 1),
      minRows = _useState6[0];

  var _useState7 = useState(props.maxRows ? props.maxRows : 10),
      _useState8 = _slicedToArray(_useState7, 1),
      maxRows = _useState8[0];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isChanged = _useState10[0],
      setIsChanged = _useState10[1];

  var getInputColor = function getInputColor() {
    if (props.required) {
      if (isChanged && !props.value) {
        return 'error';
      } else {
        return props.color ? props.color : 'primary';
      }
    } else {
      return props.color ? props.color : 'primary';
    }
  };

  var inputFieldClass = function inputFieldClass() {
    var result = '';
    var className = {
      input: 'rui-input-field',
      whiteBackground: props.whiteBackground ? 'white-background' : '',
      size: props.size ? props.size : '',
      borderType: props.borderType && props.borderType !== 'rounded' ? props.borderType : '',
      lifted: props.lifted ? 'lifted' : '',
      uppercase: props.uppercase ? 'uppercase' : '',
      color: getInputColor(),
      disabled: props.disabled ? 'disabled' : '',
      className: props.className ? props.className : ''
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

  var handleClear = function handleClear() {
    setFocus(false);
    props.onClear();
  };

  var handleChange = function handleChange(e) {
    var textareaLineHeight = 24;
    var previousRows = e.target.rows;
    e.target.rows = minRows;
    var currentRows = ~~(e.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      e.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      e.target.rows = maxRows;
      e.target.scrollTop = e.target.scrollHeight;
    }

    if (props.onChange) {
      props.onChange(e);
      setIsChanged(true);
    }

    setRows(currentRows < maxRows ? currentRows : maxRows);
  };

  useEffect(function () {
    if (props.autoFocus) input.current.focus();
    if (!props.value) setRows(props.rows ? props.rows : 1);
  }, [props.value]);
  return React.createElement("div", {
    className: inputFieldClass(),
    style: {
      width: props.width ? props.width : ''
    }
  }, props.label ? React.createElement("label", {
    className: focus ? 'active' : '',
    onClick: function onClick() {
      return input.current.focus();
    }
  }, props.required ? React.createElement("span", {
    className: "text-error"
  }, "*") : '', " ", props.label) : '', React.createElement("div", {
    className: focus ? 'rui-input-container focus' : 'rui-input-container'
  }, props.prefix ? React.createElement("span", {
    className: "rui-input-prefix"
  }, props.prefix) : '', React.createElement("textarea", {
    style: {
      paddingLeft: props.prefix ? 0 : '',
      paddingRight: props.suffix ? 0 : ''
    },
    onFocus: handleFocus,
    onBlur: handleBlur,
    ref: input,
    rows: rows,
    tabIndex: props.tabIndex,
    readOnly: props.readOnly || !props.onChange ? true : false,
    disabled: props.disabled,
    required: props.required,
    value: props.value,
    onKeyUp: props.onKeyUp,
    placeholder: props.placeholder,
    onChange: handleChange
  }), props.value && props.clearable ? React.createElement(Icon, {
    name: "close",
    onClick: function onClick() {
      return props.onClear ? handleClear() : {};
    },
    className: "rui-input-clear"
  }) : '', props.suffix ? React.createElement("span", {
    className: "rui-input-suffix"
  }, props.suffix) : ''));
};

export default TextareaField;