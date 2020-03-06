import React from 'react';
import Icon from '../icon';

var Breadcrumbs = function Breadcrumbs(props) {
  var componentClass = function componentClass() {
    var result = '';
    var className = {
      name: 'rui-breadcrumbs',
      size: props.size ? props.size : '',
      color: props.color ? props.color : 'info',
      position: props.position && props.position !== 'default' ? props.position : '',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  return React.createElement("div", {
    className: componentClass()
  }, props.crumbs.map(function (item, index) {
    return React.createElement("div", {
      key: index,
      className: props.isActive ? props.isActive(item, index) ? 'rui-breadcrumbs__item active' : 'rui-breadcrumbs__item' : 'rui-breadcrumbs__item',
      onClick: function onClick() {
        return props.onChange ? props.onChange(item, index) : {};
      }
    }, React.createElement("a", {
      href: props.urlKey ? item[props.urlKey] : ''
    }, props.icon ? React.createElement(Icon, {
      name: item[props.icon]
    }) : '', props.itemKey ? item[props.itemKey] : item), React.createElement("span", null, props.delimiter ? props.delimiter : '/'));
  }));
};

export default Breadcrumbs;