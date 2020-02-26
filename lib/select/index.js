import _toConsumableArray from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { Icon } from '../icon';
import { InputField } from '../input';
import { Dropdown } from '../dropdown';
import { List, ListItem } from '../list';
import { Tag } from '../tag';
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

  var _useState7 = useState([]),
      _useState8 = _slicedToArray(_useState7, 2),
      selected = _useState8[0],
      setSelected = _useState8[1];

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

  var isSelected = function isSelected(item) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = selected[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var i = _step.value;
        if (i === item) return true;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return false;
  };

  var isMultiple = function isMultiple() {
    if (props.multiple && props.childrenKey) return true;else if (props.multiple && !props.childrenKey) return true;else return false;
  };

  var handleItemClick = function handleItemClick(item, index) {
    if (props.childrenKey && !props.multiple) {
      setSubMenu(true);
      setActiveIndex(index);
    } else if (isMultiple()) {
      if (isSelected(item)) {
        setSelected(function () {
          return selected.filter(function (i) {
            return i !== item;
          });
        });
        props.onSelect(item, selected.filter(function (i) {
          return i !== item;
        }));
      } else {
        setSelected([].concat(_toConsumableArray(selected), [item]));
        props.onSelect(item, [].concat(_toConsumableArray(selected), [item]));
      }
    } else {
      setMenu(false);
      props.onChange(item);
    }
  };

  var getActiveItem = function getActiveItem(item) {
    if (!props.childrenKey && !props.multiple) {
      if (props.itemTitle) {
        return item[props.itemTitle] === props.value;
      } else {
        return item === props.value;
      }
    } else if (isMultiple()) {
      return isSelected(props.itemTitle ? item[props.itemTitle] : item);
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

  var selectMultipleItemClass = function selectMultipleItemClass() {
    return props.size ? "rui-select__multiple-items ".concat(props.size) : 'rui-select__multiple-items';
  };

  var handleFocus = function handleFocus(e) {
    if (e.currentTarget === e.target) setMenu(true);
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
        controls: resolveItemChildren().length > 0 && !props.multiple ? React.createElement(Icon, {
          name: "chevron-next",
          size: 18
        }) : props.multiple && getActiveItem(item) ? React.createElement(Icon, {
          name: "check",
          color: "#42a5f5",
          size: 16
        }) : '',
        item: props.itemTitle ? item[props.itemTitle] : item,
        hover: true
      }, !props.multiple ? React.createElement(CSSTransition, {
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
      })))) : '');
    }))),
    trigger: !props.multiple ? React.createElement(InputField, {
      label: props.label ? props.label : '',
      color: props.color ? props.color : 'primary',
      suffix: React.createElement(Icon, {
        className: "cursor-pointer",
        name: menu ? 'chevron-up' : 'chevron-down',
        onClick: function onClick() {
          return setMenu(true);
        }
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
        return props.value || !props.childrenKey ? handleCloseOnBlur() : {};
      },
      className: "full-width",
      width: props.width ? props.width : '',
      placeholder: props.placeholder
    }) : React.createElement("div", {
      style: {
        width: props.width ? props.width : 100
      },
      className: "rui-select__multiple"
    }, props.label ? React.createElement("label", null, props.label) : '', React.createElement("div", {
      tabIndex: -1,
      onFocus: handleFocus,
      className: selectMultipleItemClass()
    }, props.prefix ? React.createElement("span", {
      className: "rui-input-prefix"
    }, props.prefix) : '', selected.length > 0 ? React.createElement("div", {
      className: "rui-select__multiple-item"
    }, selected.map(function (item, index) {
      return React.createElement(Tag, {
        key: index,
        small: props.size ? false : true,
        value: item,
        closable: true,
        color: props.tagColor,
        visible: isSelected(item),
        className: "ma-1",
        onClose: function onClose() {
          return handleItemClick(item);
        }
      });
    })) : props.placeholder ? React.createElement("div", {
      className: "rui-select__multiple-placeholder"
    }, props.placeholder) : '', React.createElement("span", {
      className: "rui-input-suffix"
    }, React.createElement(Icon, {
      name: menu ? 'chevron-up' : 'chevron-down'
    }))))
  });
};
//# sourceMappingURL=index.js.map