import _slicedToArray from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { Select } from '../select';
import { ChevronBack, ChevronNext } from '../../../icons/index';

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
      btn: 'pagination',
      size: props.size ? props.size : '',
      rounded: props.rounded ? 'rounded' : '',
      color: props.color ? props.color : '',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  var perPage = props.perPage ? props.perPage : 10;

  var getLimit = function getLimit() {
    return Math.ceil(props.itemsCount / perPage) >= 5 ? 5 : Math.ceil(props.itemsCount / perPage);
  };

  var _useState = useState(props.current ? props.current : 1),
      _useState2 = _slicedToArray(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var _useState3 = useState(perPage),
      _useState4 = _slicedToArray(_useState3, 2),
      perPageLocal = _useState4[0],
      setPerPageLocal = _useState4[1];

  var _useState5 = useState(generateMockArr(Math.ceil(props.itemsCount / perPage))),
      _useState6 = _slicedToArray(_useState5, 2),
      allPages = _useState6[0],
      setAllPages = _useState6[1];

  var _useState7 = useState(allPages.slice(0, getLimit())),
      _useState8 = _slicedToArray(_useState7, 2),
      activePages = _useState8[0],
      setActivePages = _useState8[1];

  var isPrevAvailable = function isPrevAvailable() {
    return currentPage === 1 ? false : true;
  };

  var isNextAvailable = function isNextAvailable() {
    if (currentPage === props.itemsCount || props.itemsCount === 0 || currentPage === Math.ceil(props.itemsCount / perPage)) return false;else return true;
  };

  var handleOnNext = function handleOnNext() {
    if (isNextAvailable()) {
      if (currentPage % getLimit() === 0 && currentPage < allPages.length) {
        setActivePages(allPages.slice(currentPage, currentPage + getLimit()));
        setCurrentPage(currentPage + 1);
      } else if (currentPage < allPages.length) {
        setCurrentPage(currentPage + 1);
      }
    }
  };

  var handleOnPrev = function handleOnPrev() {
    if (isPrevAvailable()) {
      if ((currentPage - 1) % getLimit() === 0 && currentPage > 1) {
        setActivePages(allPages.slice(currentPage - getLimit(), currentPage));
        setCurrentPage(currentPage - 1);
      } else if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  var handlePerPageSelect = function handlePerPageSelect(value) {
    setPerPageLocal(value);
  };

  var getSize = function getSize() {
    if (props.size === 'medium') return 100;else if (props.size === 'large') return 100;else return 100;
  };

  return React.createElement("div", {
    className: paginationClass()
  }, React.createElement("div", {
    className: isPrevAvailable() ? 'pagination-item' : 'pagination-item disabled',
    onClick: handleOnPrev
  }, React.createElement(ChevronBack, null)), activePages.map(function (item, index) {
    return React.createElement("div", {
      key: index,
      className: item + 1 === currentPage ? 'pagination-item active' : 'pagination-item',
      onClick: function onClick() {
        return setCurrentPage(item + 1);
      }
    }, item + 1);
  }), React.createElement("div", {
    className: isNextAvailable() ? 'pagination-item' : 'pagination-item disabled',
    onClick: handleOnNext
  }, React.createElement(ChevronNext, null)), React.createElement("div", {
    className: "pagination-per-page"
  }, React.createElement(Select, {
    minWidth: getSize(),
    size: props.size,
    rounded: props.rounded,
    color: props.color,
    items: props.perPageVariants ? props.perPageVariants : [10, 20, 50, 100],
    normalTitle: true,
    selectedItem: "".concat(perPageLocal, " / ").concat(props.pageText ? props.pageText : 'page'),
    onSelect: handlePerPageSelect
  })));
};