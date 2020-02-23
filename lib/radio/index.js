import React from 'react';

var Radio = function Radio(props) {
  var radioClass = function radioClass() {
    var result = '';
    var className = {
      btn: 'radio',
      disabled: props.disabled ? 'disabled' : '',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  return React.createElement("div", {
    className: radioClass()
  }, React.createElement("input", {
    type: "radio",
    name: props.name,
    value: props.value,
    disabled: props.disabled,
    onChange: function onChange(e) {
      return props.onChange(e);
    }
  }), props.label ? React.createElement("span", null, props.label) : '');
};

export var RadioGroup = function RadioGroup(props) {
  var radioGroupClass = function radioGroupClass() {
    var result = '';
    var className = {
      btn: 'radio-group',
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
      disabled: props.disabled,
      label: props.labelName ? props.labelName : item,
      value: item,
      name: props.name,
      onChange: function onChange() {
        return props.onChange(item);
      }
    });
  }));
};
//# sourceMappingURL=index.js.map