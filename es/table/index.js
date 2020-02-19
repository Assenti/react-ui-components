import _toConsumableArray from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/toConsumableArray";
import React from 'react';
import { Empty } from '../icon/icons/index';
import { Checkbox } from '../checkbox';
export var Table = function Table(props) {
  var headers = function headers() {
    if (props.controls && !props.checkbox) {
      return [].concat(_toConsumableArray(props.headers), ['']);
    } else if (props.checkbox && !props.controls) {
      return [React.createElement(Checkbox, null)].concat(_toConsumableArray(props.headers));
    } else if (props.checkbox && props.controls) {
      return [React.createElement(Checkbox, null)].concat(_toConsumableArray(props.headers), ['']);
    } else if (props.index && !props.checkbox && !props.controls) {
      return ['#'].concat(_toConsumableArray(props.headers));
    } else {
      return props.headers;
    }
  };

  return React.createElement("div", {
    className: props.bordered ? 'table-container bordered' : 'table-container'
  }, React.createElement("table", {
    className: "table"
  }, React.createElement("thead", null, React.createElement("tr", null, headers().map(function (item, index) {
    return React.createElement("th", {
      key: index
    }, item);
  }))), React.createElement("tbody", null, props.items.map(function (item, index) {
    return React.createElement("tr", {
      key: index,
      className: props.noHover ? 'no-hover' : ''
    }, props.checkbox ? React.createElement("td", null, React.createElement(Checkbox, {
      onChange: function onChange() {}
    })) : React.createElement(React.Fragment, null), props.index ? React.createElement("td", null, index + 1) : React.createElement(React.Fragment, null), props.itemTitles.map(function (title, iter) {
      return React.createElement("td", {
        key: iter
      }, item[title]);
    }), props.controls ? React.createElement("td", null, props.controls) : React.createElement(React.Fragment, null));
  }))), props.footer ? React.createElement("div", {
    className: "table-footer"
  }, props.footer) : '', props.items.length === 0 ? React.createElement("div", {
    className: "table-empty"
  }, React.createElement(Empty, null)) : '');
};
//# sourceMappingURL=index.js.map