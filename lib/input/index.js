import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useRef, useState, useEffect } from 'react';
import { Icon } from '../index';

var InputField = function InputField(props) {
  var input = useRef(null);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      focus = _useState2[0],
      setFocus = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isChanged = _useState4[0],
      setIsChanged = _useState4[1];

  var _useState5 = useState(props.type === 'password' ? true : false),
      _useState6 = _slicedToArray(_useState5, 2),
      isPassword = _useState6[0],
      setIsPassword = _useState6[1];

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
      lifted: props.lifted ? 'lifted' : '',
      borderType: props.borderType ? props.borderType : '',
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
    if (e.currentTarget === e.target) {
      if (props.onBlur) props.onBlur(e);
      setFocus(false);
    }
  };

  var handleClear = function handleClear() {
    setFocus(false);
    props.onClear();
    setIsChanged(false);
  };

  var handleChange = function handleChange(e) {
    if (props.onChange) {
      setIsChanged(true);

      if (props.uppercase) {
        e.target.value = e.target.value.toUpperCase();
      }

      props.onChange(e);
    }
  };

  var handleKeyUp = function handleKeyUp(e) {
    if (props.onEnter) {
      if (e.key === 'Enter') {
        props.onEnter();
      }
    } else if (props.onKeyUp) {
      props.onKeyUp(e);
    }
  };

  var getHintColor = function getHintColor() {
    if (props.hintColor) {
      return "rui-input-field__hint ".concat(props.hintColor);
    } else {
      if (props.required) {
        if (isChanged && !props.value) {
          return 'rui-input-field__hint error';
        } else {
          return 'rui-input-field__hint';
        }
      } else {
        return 'rui-input-field__hint';
      }
    }
  };

  var getInputType = function getInputType() {
    if (props.type === 'password') {
      return isPassword ? 'password' : 'text';
    } else if (props.type === 'number') {
      return 'number';
    } else if (props.type === 'email') {
      return 'email';
    } else {
      return 'text';
    }
  };

  var handlePassTypeChange = function handlePassTypeChange(e) {
    setIsPassword(!isPassword);
  };

  useEffect(function () {
    if (props.autoFocus) input.current.focus();
  }, []);
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
  }, props.prefix) : '', React.createElement("input", {
    style: {
      paddingLeft: props.prefix ? 0 : '',
      paddingRight: props.suffix ? 0 : ''
    },
    onFocus: handleFocus,
    onBlur: handleBlur,
    ref: input,
    tabIndex: props.tabIndex,
    readOnly: props.readOnly || !props.onChange ? true : false,
    disabled: props.disabled,
    required: props.required,
    autoComplete: props.autoComplete ? '' : 'off',
    name: props.name,
    maxLength: props.maxLength,
    minLength: props.minLength,
    min: props.min,
    max: props.max,
    step: props.step,
    value: props.value,
    onKeyUp: handleKeyUp,
    onKeyDown: props.onKeyDown,
    placeholder: props.placeholder,
    onChange: handleChange,
    type: getInputType()
  }), props.value && props.clearable ? React.createElement(Icon, {
    name: "close",
    onClick: function onClick() {
      return props.onClear ? handleClear() : {};
    },
    className: "rui-input-clear"
  }) : '', props.suffix ? React.createElement("span", {
    className: "rui-input-suffix"
  }, props.suffix) : props.type === 'password' ? React.createElement(Icon, {
    className: "rui-input-clear",
    name: isPassword ? 'eye' : 'eye-off',
    onClick: handlePassTypeChange
  }) : ''), props.hint ? React.createElement("div", {
    className: getHintColor()
  }, props.hint) : '');
};

export default InputField;