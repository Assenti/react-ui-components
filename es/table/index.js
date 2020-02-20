import _toConsumableArray from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { Empty } from '../icon/icons/index';
import { Checkbox } from '../checkbox';
import { Pagination } from '../pagination';
export var Table = function Table(props) {
  var _useState = useState(props.currentPage ? props.currentPage : 1),
      _useState2 = _slicedToArray(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var _useState3 = useState(props.perPage ? props.perPage : 10),
      _useState4 = _slicedToArray(_useState3, 2),
      perPage = _useState4[0],
      setPerPage = _useState4[1];

  var tableContainerClass = function tableContainerClass() {
    var result = '';
    var className = {
      name: 'table__container',
      bordered: props.bordered ? 'bordered' : '',
      paginationPosition: props.paginationPosition ? props.paginationPosition : '',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  var tableClass = function tableClass() {
    var result = '';
    var className = {
      name: 'table',
      headerColor: props.headerColor ? props.headerColor : '',
      alignment: props.alignment ? props.alignment : '',
      controls: props.controls ? 'controls' : '',
      stripped: props.stripped ? 'stripped' : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

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

  var getItems = function getItems() {
    if (props.pagination) {
      return props.items.slice(perPage * currentPage - perPage, perPage * currentPage);
    } else {
      return props.items;
    }
  };

  return React.createElement("div", {
    className: tableContainerClass()
  }, React.createElement("table", {
    className: tableClass()
  }, React.createElement("thead", null, React.createElement("tr", null, headers().map(function (item, index) {
    return React.createElement("th", {
      key: index
    }, item);
  }))), React.createElement("tbody", null, getItems().map(function (item, index) {
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
    className: props.footerColor ? "table__footer ".concat(props.footerColor) : 'table__footer'
  }, props.footer) : '', props.items.length === 0 ? React.createElement("div", {
    className: "table__empty"
  }, React.createElement(Empty, null)) : '', props.pagination && !props.hideOnSinglePage ? React.createElement(Pagination, {
    className: "table__pagination",
    onChange: function onChange(page) {
      return setCurrentPage(page);
    },
    perPageVariants: props.perPageVariants,
    itemsCount: props.itemsTotal ? props.itemsTotal : 0,
    color: props.paginationColor ? props.paginationColor : '',
    size: props.paginationSize ? props.paginationSize : '',
    current: props.currentPage ? props.currentPage : 1,
    rounded: props.paginationRounded ? props.paginationRounded : false
  }) : '');
};
//# sourceMappingURL=index.js.map