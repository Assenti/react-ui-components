import _slicedToArray from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { Icon } from '../icon';
import { InputField } from '../input';
import { Dropdown } from '../dropdown';
import { List, ListItem } from '../list';
import { CSSTransition } from 'react-transition-group';
export var Select = function Select(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      menu = _useState2[0],
      setMenu = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      subMenu = _useState4[0],
      setSubMenu = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      activeIndex = _useState6[0],
      setActiveIndex = _useState6[1];

  var selectMenuClass = function selectMenuClass() {
    var result = '';
    var className = {
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  var subMenuClass = function subMenuClass() {
    var result = '';
    var className = {
      name: 'rui-select__submenu',
      light: props.dark ? 'dark' : 'light'
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  var resolveItemChildren = function resolveItemChildren() {
    if (props.childrenKey) return props.items[activeIndex][props.childrenKey];else return [];
  };

  var handleItemClick = function handleItemClick(item, index) {
    if (props.childrenKey) {
      setSubMenu(true);
      setActiveIndex(index);
    } else {
      setMenu(false);
      props.onChange(item);
    }
  };

  var getActiveItem = function getActiveItem(item) {
    if (!props.childrenKey) {
      if (props.itemTitle) {
        return item[props.itemTitle] === props.value;
      } else {
        return item === props.value;
      }
    } else {
      return item[props.childrenKey].includes(props.value);
    }
  };

  var handleCloseOnBlur = function handleCloseOnBlur() {
    if (!props.childrenKey) {
      setMenu(false);
      setSubMenu(false);
    }
  };

  var filteredItems = function filteredItems() {
    if (props.search) {
      return props.items.filter(function (item) {
        return props.itemTitle ? item[props.itemTitle].toLowerCase().includes(props.search.toLowerCase()) : item.toLowerCase().includes(props.search.toLowerCase());
      });
    } else {
      return props.items;
    }
  };

  return React.createElement(Dropdown, {
    className: selectMenuClass(),
    closeManaged: true,
    visible: menu,
    content: React.createElement("div", {
      tabIndex: -1,
      className: "rui-select__menu",
      onBlur: function onBlur() {
        setMenu(false);
        setSubMenu(false);
      }
    }, props.searchable && !props.childrenKey ? React.createElement(InputField, {
      color: props.color ? props.color : 'primary',
      prefix: React.createElement(Icon, {
        name: "search"
      }),
      value: props.search,
      onChange: function onChange(e) {
        return props.onSearch(e.target.value);
      },
      className: "full-width pa-5"
    }) : '', React.createElement(List, {
      className: "relative",
      size: props.size ? props.size : ''
    }, filteredItems().map(function (item, index) {
      return React.createElement(ListItem, {
        key: index,
        isActiveItem: getActiveItem(item),
        onClick: function onClick() {
          return handleItemClick(props.itemTitle ? item[props.itemTitle] : item, index);
        },
        controls: resolveItemChildren().length > 0 ? React.createElement(Icon, {
          name: "chevron-next",
          size: 18
        }) : '',
        item: props.itemTitle ? item[props.itemTitle] : item,
        hover: true
      }, React.createElement(CSSTransition, {
        in: subMenu,
        timeout: 300,
        classNames: "rui-select__submenu",
        unmountOnExit: true
      }, React.createElement("div", {
        className: subMenuClass()
      }, React.createElement(List, {
        size: props.size ? props.size : ''
      }, resolveItemChildren().map(function (subItem, iterator) {
        return React.createElement(ListItem, {
          onClick: function onClick() {
            props.onChange(subItem);
            setMenu(false);
            setSubMenu(false);
            setActiveIndex(0);
          },
          isActiveItem: subItem === props.value,
          key: iterator,
          item: subItem,
          hover: true
        });
      })))));
    }))),
    trigger: React.createElement(InputField, {
      label: props.label ? props.label : '',
      color: props.color ? props.color : 'primary',
      suffix: React.createElement(Icon, {
        name: menu ? 'chevron-up' : 'chevron-down'
      }),
      value: props.value,
      size: props.size ? props.size : '',
      rounded: props.rounded ? props.rounded : false,
      prefix: props.prefix ? props.prefix : '',
      clearable: props.clearable ? props.clearable : false,
      onClear: props.onClear ? props.onClear() : {},
      onFocus: function onFocus() {
        return setMenu(true);
      },
      onBlur: function onBlur() {
        return props.value ? handleCloseOnBlur() : {};
      },
      className: "full-width",
      width: props.width ? props.width : '',
      placeholder: props.placeholder
    })
  });
};
//# sourceMappingURL=index.js.map