import _slicedToArray from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { Icon, Tooltip } from '../index';

var CopyToClipboard = function CopyToClipboard(props) {
  var _useState = useState(props.defaultText ? props.defaultText : 'Copy'),
      _useState2 = _slicedToArray(_useState, 2),
      tooltip = _useState2[0],
      setTooltip = _useState2[1];

  var handleClick = function handleClick() {
    navigator.clipboard.writeText(props.text);
    setTooltip("".concat(props.copiedText ? props.copiedText : 'Copied to clipboard'));
    setTimeout(function () {
      setTooltip(props.defaultText ? props.defaultText : 'Copy');
    }, 700);
  };

  return React.createElement(Tooltip, {
    tooltip: tooltip
  }, React.createElement(Icon, {
    className: props.className ? "cursor-pointer ".concat(props.className) : 'cursor-pointer',
    size: props.size ? props.size : 16,
    color: props.color ? props.color : 'gray',
    name: props.icon ? props.icon : 'content-copy',
    onClick: handleClick
  }));
};

export default CopyToClipboard;
//# sourceMappingURL=index.js.map