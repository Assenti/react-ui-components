import React from 'react';
export var Badge = function Badge(props) {
  var badgeClass = function badgeClass() {
    var result = '';
    var className = {
      btn: 'badge-container',
      rounded: props.rounded ? 'rounded' : '',
      color: props.color ? props.color : '',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  var visibility = function visibility() {
    if (typeof props.visible === 'undefined') return true;else return props.visible;
  };

  return React.createElement("div", {
    className: badgeClass()
  }, props.parent, React.createElement("div", {
    className: "badge"
  }, visibility() ? props.value : ''));
};
//# sourceMappingURL=index.js.map