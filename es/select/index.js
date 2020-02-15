import _slicedToArray from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Icon } from '../icon';
export var Select = function Select(_ref) {
  var items = _ref.items,
      itemName = _ref.itemName,
      subItemsField = _ref.subItemsField,
      subItemName = _ref.subItemName,
      labelName = _ref.labelName,
      placeholder = _ref.placeholder,
      selectedItem = _ref.selectedItem,
      onSelect = _ref.onSelect,
      width = _ref.width,
      minWidth = _ref.minWidth,
      subTitle = _ref.subTitle,
      addSubItem = _ref.addSubItem,
      showSubItemOnly = _ref.showSubItemOnly,
      color = _ref.color,
      size = _ref.size,
      rounded = _ref.rounded;
  var selectMenu = useRef(null);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var getItems = function getItems() {
    return items ? items : [];
  };

  var subItems = function subItems(parent) {
    if (subItemsField) return parent[subItemsField];else return [];
  };

  var openMenu = function openMenu(e) {
    if (e.target === e.currentTarget) setOpen(true);
  };

  var handleSelect = function handleSelect(e, value, subValue) {
    if (e.target === e.currentTarget) {
      var result = subValue ? showSubItemOnly ? subValue : "".concat(value, " / ").concat(subValue) : value;
      onSelect(result);
      setOpen(false);
      selectMenu.current.blur();
    }
  };

  var cutLongText = function cutLongText(text) {
    if (text.length > 130) return "".concat(text.slice(0, 130), "...");else return text;
  };

  var selectItemClass = function selectItemClass(item) {
    var isSelected = itemName ? item[itemName] === selectedItem : item === selectedItem;
    var result = '';
    var className = {
      item: 'select-menu__item',
      active: isSelected ? 'active' : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  var selectSubItemClass = function selectSubItemClass(item) {
    var selected = showSubItemOnly ? selectedItem : selectedItem ? selectedItem.split('/')[1].trim() : '';
    var isSelected = subItemName ? item[subItemName] === selected : item === selected;
    var classes = {
      active: isSelected ? 'active' : ''
    };
    return "select-menu__subitem ".concat(classes.normalTitle, " ").concat(classes.active);
  };

  var selectClass = function selectClass(item) {
    var result = '';
    var className = {
      main: 'select-menu',
      rounded: rounded ? 'rounded' : '',
      size: size ? size : '',
      color: color ? color : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  return React.createElement(React.Fragment, null, labelName ? React.createElement("label", {
    className: "select-menu__label"
  }, labelName) : '', React.createElement("div", {
    className: selectClass(),
    ref: selectMenu,
    style: {
      width: width ? width : '',
      minWidth: minWidth ? minWidth : ''
    },
    tabIndex: -1,
    onClick: openMenu,
    onBlur: function onBlur() {
      return setOpen(false);
    }
  }, !cutLongText(selectedItem ? selectedItem : '') ? React.createElement("span", {
    onClick: openMenu
  }, placeholder) : '', cutLongText(selectedItem ? selectedItem : '') ? React.createElement("div", {
    className: "select-menu__value",
    onClick: openMenu,
    title: selectedItem
  }, selectedItem ? cutLongText(selectedItem) : '') : '', React.createElement(Icon, {
    name: "chevron-down"
  }), React.createElement(CSSTransition, {
    in: open,
    timeout: 300,
    classNames: "select-menu",
    unmountOnExit: true
  }, React.createElement("div", {
    className: "select-menu__items"
  }, getItems().map(function (item, index) {
    return React.createElement("div", {
      key: index,
      className: selectItemClass(item),
      onClick: function onClick(e) {
        return subItems(item).length > 0 ? {} : handleSelect(e, itemName ? item[itemName] : item);
      }
    }, itemName ? item[itemName] : item, subItems(item).length > 0 ? React.createElement(Icon, {
      name: "chevron-next"
    }) : '', subItems(item).length > 0 ? React.createElement("div", {
      className: "select-menu__subitems"
    }, subTitle ? React.createElement("div", {
      className: "select-menu__subitem-title"
    }, itemName ? item[itemName] : item) : '', subItems(item).map(function (subItem, subIndex) {
      return React.createElement("div", {
        key: subIndex,
        className: selectSubItemClass(subItem),
        onClick: function onClick(e) {
          return handleSelect(e, itemName ? item[itemName] : item, subItemName ? subItem[subItemName] : subItem);
        }
      }, subItemName ? subItem[subItemName] : subItem, " ", addSubItem ? ' (' + subItem[addSubItem] + ')' : '');
    })) : '');
  })))));
};
//# sourceMappingURL=index.js.map