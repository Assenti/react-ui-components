import _toConsumableArray from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useRef, useState, useEffect } from 'react';
import { Icon } from '../icon';
export var InputField = function InputField(props) {
  var input = useRef(null);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      focus = _useState2[0],
      setFocus = _useState2[1];

  var inputFieldClass = function inputFieldClass() {
    var result = '';
    var className = {
      input: 'rui-input-field',
      size: props.size ? props.size : '',
      lifted: props.lifted ? 'lifted' : '',
      uppercase: props.uppercase ? 'uppercase' : '',
      smooth: props.smooth && !props.rounded ? 'smooth' : '',
      rounded: props.rounded ? 'rounded' : '',
      color: props.color && !props.disabled && !props.light && !props.dark ? props.color : '',
      light: props.light && !props.dark ? 'light' : '',
      dark: props.dark && !props.light ? 'dark' : '',
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
  }, props.label) : '', React.createElement("div", {
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
    readOnly: props.readOnly || !props.onChange ? true : false,
    disabled: props.disabled,
    required: props.required,
    autoComplete: props.autoComplete,
    value: props.value,
    onKeyUp: props.onKeyUp,
    placeholder: props.placeholder,
    onChange: props.onChange,
    type: props.type ? props.type : 'text'
  }), props.value && props.clearable ? React.createElement(Icon, {
    name: "close",
    onClick: function onClick() {
      return props.onClear ? handleClear() : {};
    },
    className: "rui-input-clear"
  }) : '', props.suffix ? React.createElement("span", {
    className: "rui-input-suffix"
  }, props.suffix) : ''), props.hint ? React.createElement("div", {
    className: "rui-input-field__hint"
  }, props.hint) : '');
};
export var TextareaField = function TextareaField(props) {
  var inputFieldClass = function inputFieldClass() {
    var result = "rui-input-field ".concat(props.medium ? 'medium' : '', " ").concat(props.large ? 'large' : '');
    return result.trim();
  };

  var inputContainerClass = function inputContainerClass() {
    var result = "rui-input-container ".concat(props.color ? props.color : '');
    return result.trim();
  };

  return React.createElement("div", {
    className: inputFieldClass(),
    style: {
      width: props.width ? props.width : ''
    }
  }, props.label ? React.createElement("label", null, props.label) : '', React.createElement("div", {
    className: inputContainerClass()
  }, React.createElement("textarea", {
    rows: props.rows,
    required: props.required,
    autoComplete: props.autoComplete,
    value: props.value,
    onKeyUp: props.onKeyUp,
    placeholder: props.placeholder,
    onChange: props.onChange,
    type: props.type
  }), React.createElement("i", {
    onClick: function onClick() {
      props.onClear();
    }
  }, React.createElement(Icon, {
    name: "close"
  }))));
};
export var Uploader = function Uploader(props) {
  var inputFile = useRef();

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      focus = _useState4[0],
      setFocus = _useState4[1];

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
      light: props.light && !props.dark ? 'light' : '',
      dark: props.dark && !props.light ? 'dark' : '',
      lifted: props.lifted ? 'lifted' : '',
      smooth: props.smooth && !props.rounded ? 'smooth' : '',
      rounded: props.rounded ? 'rounded' : '',
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
//# sourceMappingURL=index.js.map