import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect } from 'react';
import { Icon } from '../index';

var Rating = function Rating(props) {
  var makeArray = function makeArray(count) {
    var arr = [];

    if (count % Math.floor(count) === 0 || isNaN(count % Math.floor(count))) {
      for (var i = 0; i < count; i++) {
        arr.push(1);
      }
    } else {
      for (var _i = 0; _i < count - 1; _i++) {
        arr.push(1);
      }

      arr.push(0.5);
    }

    return arr;
  };

  var _useState = useState(props.rate ? makeArray(props.rate) : []),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var ratingClass = function ratingClass() {
    var result = '';
    var className = {
      name: 'rui-rating',
      color: props.color ? props.color : 'yellow',
      disabled: props.disabled ? 'disabled' : '',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  var getName = function getName(item) {
    if (item === 1) return 'star';else if (item === 0.5) return 'star-half-full';else return 'star-outline';
  };

  var handleClick = function handleClick(item, index) {
    if (!props.disabled) props.onChange(index + 1);
  };

  var stars = function stars() {
    return makeArray(props.count ? props.count : 5);
  };

  useEffect(function () {
    setSelected(makeArray(props.rate));
  }, [props.rate]);
  return React.createElement("div", {
    className: ratingClass()
  }, React.createElement("div", {
    className: "rui-rating__stars"
  }, stars().map(function (item, index) {
    return React.createElement(Icon, {
      onClick: function onClick() {
        return handleClick(item, index);
      },
      key: index,
      size: props.size,
      name: getName(selected[index])
    });
  })), !props.hideRate ? React.createElement("div", {
    className: "rui-rating__rate"
  }, props.text ? props.text + ': ' : '', React.createElement("strong", null, props.rate ? props.rate : selected.length)) : '');
};

export default Rating;