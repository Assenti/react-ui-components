import React, { useState } from 'react';
export var Tooltip = function Tooltip(props) {
  // const [show, setShow] = useState(false);
  function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
  }

  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }

  var tooltipClass = function tooltipClass() {
    var result = '';
    var className = {
      name: 'tooltip',
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
    className: "tooltip__text"
  }, props.tooltip), props.children);
};
//# sourceMappingURL=index.js.map