import _slicedToArray from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect } from 'react';
import { Select } from '../select';
import { ChevronBack, ChevronNext } from '../icon/icons/index';

var generateMockArr = function generateMockArr(length) {
  var arr = [];

  for (var i = 0; i < length; i++) {
    arr.push(i);
  }

  return arr;
};

export var Pagination = function Pagination(props) {
  var paginationClass = function paginationClass() {
    var result = '';
    var className = {
      btn: 'rui-pagination',
      size: props.size ? props.size : '',
      rounded: props.rounded ? 'rounded' : '',
      color: props.color ? props.color : 'primary',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  var getLimit = function getLimit() {
    return Math.ceil(props.itemsCount / props.perPage) >= 5 ? 5 : Math.ceil(props.itemsCount / props.perPage);
  };

  var _useState = useState(props.current ? props.current : 1),
      _useState2 = _slicedToArray(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var _useState3 = useState(generateMockArr(Math.ceil(props.itemsCount / props.perPage))),
      _useState4 = _slicedToArray(_useState3, 2),
      allPages = _useState4[0],
      setAllPages = _useState4[1];

  var _useState5 = useState(allPages.slice(0, getLimit())),
      _useState6 = _slicedToArray(_useState5, 2),
      activePages = _useState6[0],
      setActivePages = _useState6[1];

  var isPrevAvailable = function isPrevAvailable() {
    return currentPage === 1 ? false : true;
  };

  var isNextAvailable = function isNextAvailable() {
    if (currentPage === props.itemsCount || props.itemsCount === 0 || currentPage === Math.ceil(props.itemsCount / props.perPage)) return false;else return true;
  };

  var handleOnNext = function handleOnNext() {
    if (isNextAvailable()) {
      if (currentPage % getLimit() === 0 && currentPage < allPages.length) {
        setActivePages(allPages.slice(currentPage, currentPage + getLimit()));
        setCurrentPage(currentPage + 1);
        if (props.onChange) props.onChange(currentPage + 1);
      } else if (currentPage < allPages.length) {
        setCurrentPage(currentPage + 1);
        if (props.onChange) props.onChange(currentPage + 1);
      }
    }
  };

  var handleOnPrev = function handleOnPrev() {
    if (isPrevAvailable()) {
      if (currentPage > 1 && (currentPage - 1) % getLimit() === 0) {
        setActivePages(allPages.slice(currentPage - 1 - getLimit(), currentPage - 1));
        setCurrentPage(currentPage - 1);
        if (props.onChange) props.onChange(currentPage - 1);
      } else if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        if (props.onChange) props.onChange(currentPage - 1);
      }
    }
  };

  var handlePerPageSelect = function handlePerPageSelect(value) {
    if (props.onPerPageSelect) props.onPerPageSelect(value);
    setAllPages(generateMockArr(Math.ceil(props.itemsCount / value)));
  };

  var getSize = function getSize() {
    if (props.size === 'medium') return 100;else if (props.size === 'large') return 100;else return 100;
  };

  useEffect(function () {
    setActivePages(allPages.slice(0, getLimit()));
  }, [props.perPage, props.itemsCount]);
  return React.createElement("div", {
    className: paginationClass()
  }, React.createElement("div", {
    className: isPrevAvailable() ? 'rui-pagination-item' : 'rui-pagination-item disabled',
    onClick: handleOnPrev
  }, React.createElement(ChevronBack, null)), activePages.map(function (item, index) {
    return React.createElement("div", {
      key: index,
      className: item + 1 === currentPage ? 'rui-pagination-item active' : 'rui-pagination-item',
      onClick: function onClick() {
        setCurrentPage(item + 1);
        if (props.onChange) props.onChange(item + 1);
      }
    }, item + 1);
  }), React.createElement("div", {
    className: isNextAvailable() ? 'rui-pagination-item' : 'rui-pagination-item disabled',
    onClick: handleOnNext
  }, React.createElement(ChevronNext, null)), React.createElement("div", {
    className: "rui-pagination-per-page"
  }, React.createElement(Select, {
    minWidth: getSize(),
    size: props.size,
    width: props.size === 'large' ? 110 : 100,
    rounded: props.rounded,
    color: props.color,
    value: "".concat(props.perPage, " / ").concat(props.perPageText ? props.perPageText : 'page'),
    items: props.perPageVariants ? props.perPageVariants : [10, 20, 50, 100],
    normalTitle: true,
    selectedItem: "".concat(props.perPage, " / ").concat(props.perPageText ? props.perPageText : 'page'),
    onChange: handlePerPageSelect
  })));
};
//# sourceMappingURL=index.js.map