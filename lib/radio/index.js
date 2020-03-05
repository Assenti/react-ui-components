import React from 'react';

var Radio = function Radio(props) {
  var radioClass = function radioClass() {
    var result = '';
    var className = {
      name: 'rui-radio',
      color: props.color ? props.color : 'primary',
      disabled: props.disabled ? 'disabled' : '',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  return React.createElement("label", {
    className: radioClass()
  }, React.createElement("input", {
    type: "radio",
    name: props.name,
    value: props.value // defaultChecked={props.value}
    ,
    disabled: props.disabled,
    onChange: function onChange(e) {
      return props.onChange(e);
    }
  }), React.createElement("span", {
    className: "rui-radio-checkmark"
  }), props.label);
};

var RadioGroup = function RadioGroup(props) {
  var radioGroupClass = function radioGroupClass() {
    var result = '';
    var className = {
      btn: 'rui-radio-group',
      vertical: props.vertical ? 'vertical' : '',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  return React.createElement("div", {
    className: radioGroupClass()
  }, props.options.map(function (item, index) {
    return React.createElement(Radio, {
      key: index,
      color: props.color,
      disabled: props.disabled,
      label: props.labelName ? props.labelName : item,
      value: props.value,
      name: props.name,
      onChange: function onChange() {
        return props.onChange(item);
      }
    });
  }));
};

export default RadioGroup;