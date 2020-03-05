import React from 'react';
import { Icon, Checkbox, Avatar, Tooltip } from '../index';

var ListItem = function ListItem(props) {
  var itemClass = function itemClass() {
    var result = '';
    var className = {
      item: 'rui-list-item',
      roundedActive: props.roundedActive ? 'rounded' : '',
      right: props.leftBorder ? 'left' : 'right',
      active: props.isActiveItem ? 'active' : '',
      color: props.color ? props.color : 'primary',
      hover: props.hover ? 'hover' : '',
      noDivider: props.noDivider ? '' : 'divider',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  var handleClick = function handleClick(e) {
    if (e.currentTarget === e.target) {
      if (props.onClick) {
        props.onClick(e);
      }
    }
  };

  return React.createElement("div", {
    onClick: handleClick,
    tabIndex: props.tabIndex,
    className: itemClass()
  }, !props.render ? React.createElement(React.Fragment, null, React.createElement("div", {
    className: "rui-list-item__left-side"
  }, React.createElement("div", {
    className: "row align-center"
  }, props.avatar && !props.icon ? React.createElement(Avatar, {
    className: "mr-10",
    img: props.avatar,
    size: props.avatarSize,
    borderType: props.avatarBorderType
  }) : '', props.icon && !props.avatar ? props.tooltip ? React.createElement(Tooltip, {
    tooltip: props.tooltip,
    position: props.tooltipPosition
  }, React.createElement(Icon, {
    name: props.icon
  })) : React.createElement(Icon, {
    name: props.icon
  }) : '', React.createElement("div", null, React.createElement("div", {
    className: "rui-list-item__title-row"
  }, props.checkbox ? React.createElement(Checkbox, {
    color: props.color ? props.color : 'primary',
    className: "mr-10",
    checked: props.isActiveItem,
    onChange: handleClick
  }) : '', React.createElement("span", {
    onClick: handleClick
  }, props.item)), props.subTitle ? React.createElement("div", {
    className: "rui-list-subtitle"
  }, props.subTitle) : ''))), React.createElement("div", {
    className: "rui-list-item__right-side"
  }, props.controls), props.children) : props.render);
};

export default ListItem;