import React from 'react';
export var Checkbox = function Checkbox(props) {
  var checkboxClass = function checkboxClass() {
    var result = '';
    var className = {
      checkbox: 'checkbox',
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
      checkbox: 'checkbox-label',
      color: props.color ? props.color : '',
      className: props.className ? props.className : '',
      disabled: props.disabled ? 'disabled' : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  return React.createElement("div", {
    className: "checkbox-wrapper"
  }, React.createElement("label", {
    className: checkboxClass()
  }, React.createElement("input", {
    type: "checkbox",
    checked: props.checked ? props.checked : false,
    disabled: props.disabled ? props.disabled : false,
    onChange: function onChange(e) {
      return props.onChange(e);
    }
  }), React.createElement("span", null)), props.label ? React.createElement("div", {
    className: checkboxLabelClass(),
    onClick: function onClick() {
      return props.onChange();
    }
  }, props.label) : '');
};