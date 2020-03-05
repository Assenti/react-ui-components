import React from 'react';

var Checkbox = function Checkbox(props) {
  var checkboxClass = function checkboxClass() {
    var result = '';
    var className = {
      checkbox: 'rui-checkbox',
      size: props.size ? props.size : '',
      color: props.color ? props.color : '',
      disabled: props.disabled ? 'disabled' : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  var checkboxLabelClass = function checkboxLabelClass() {
    var result = '';
    var className = {
      checkbox: 'rui-checkbox-label',
      color: props.color ? props.color : '',
      disabled: props.disabled ? 'disabled' : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  return React.createElement("div", {
    className: props.className ? "rui-checkbox-wrapper ".concat(props.className) : 'rui-checkbox-wrapper'
  }, React.createElement("label", {
    className: checkboxClass()
  }, React.createElement("input", {
    type: "checkbox",
    checked: props.checked ? props.checked : false,
    disabled: props.disabled ? props.disabled : false,
    onChange: function onChange(e) {
      return props.onChange ? props.onChange(e) : {};
    }
  }), React.createElement("span", null)), props.label ? React.createElement("div", {
    className: checkboxLabelClass(),
    onClick: function onClick() {
      return props.onChange ? props.onChange() : {};
    }
  }, props.label) : '');
};

export default Checkbox;