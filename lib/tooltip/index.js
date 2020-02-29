import React from 'react';

var Tooltip = function Tooltip(props) {
  var tooltipClass = function tooltipClass() {
    var result = '';
    var className = {
      name: 'rui-tooltip',
      position: props.position ? props.position : '',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  return React.createElement("div", {
    className: tooltipClass()
  }, React.createElement("span", {
    className: "rui-tooltip__text"
  }, props.tooltip), props.children);
};

export default Tooltip;