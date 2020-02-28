import _toConsumableArray from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useRef } from 'react';
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

  var _useState9 = useState(-1),
      _useState10 = _slicedToArray(_useState9, 2),
      index = _useState10[0],
      setIndex = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      focus = _useState12[0],
      setFocus = _useState12[1];

  var _useState13 = useState(''),
      _useState14 = _slicedToArray(_useState13, 2),
      search = _useState14[0],
      setSearch = _useState14[1];

  var _useState15 = useState(props.searchable ? true : false),
      _useState16 = _slicedToArray(_useState15, 2),
      searchFocus = _useState16[0],
      setSearchFocus = _useState16[1];

  var inputRef = useRef(null);

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

  var handleItemClick = function handleItemClick(e, item, index) {
    if (e.currentTarget === e.target) {
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

        setFocus(false);
      } else {
        setMenu(false);
        props.onChange(item);
      }
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

  var handleCloseOnBlur = function handleCloseOnBlur(e) {
    if (e.currentTarget === e.target && !searchFocus) {
      setMenu(false);
      setSubMenu(false);

      if (props.searchable) {
        setSearchFocus(false);
        setSearch('');
      }
    }
  };

  var filteredItems = function filteredItems() {
    if (search) {
      return props.items.filter(function (item) {
        return props.itemTitle ? item[props.itemTitle].toLowerCase().includes(search.toLowerCase()) : item.toLowerCase().includes(search.toLowerCase());
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

  var handleBlur = function handleBlur(e) {
    if (e.currentTarget === e.target) setMenu(false);
  };

  var handleKeyUp = function handleKeyUp(e) {
    if (e.key === 'ArrowDown') setIndex(index + 1);else if (e.key === 'ArrowUp') setIndex(index - 1);else if (e.key === 'Escape') {
      setMenu(false);
      setSubMenu(false);
    }
  };

  var handleLabelClick = function handleLabelClick() {
    if (inputRef) {
      inputRef.current.focus();
      setFocus(true);
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
      value: search,
      autoFocus: true,
      placeholder: props.searchPlaceholder ? props.searchPlaceholder : 'Search',
      onChange: function onChange(e) {
        return setSearch(e.target.value);
      },
      className: "full-width pa-5"
    }) : '', React.createElement(List, {
      className: "relative",
      size: props.size ? props.size : ''
    }, filteredItems().map(function (item, index) {
      return React.createElement(ListItem, {
        key: index,
        tabIndex: index,
        isActiveItem: getActiveItem(item),
        onClick: function onClick(e) {
          return handleItemClick(e, props.itemTitle ? item[props.itemTitle] : item, index);
        },
        checkbox: props.multiple,
        controls: !props.multiple && props.childrenKey ? React.createElement(Icon, {
          name: "chevron-next"
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
      onKeyUp: handleKeyUp,
      whiteBackground: props.whiteBackground ? props.whiteBackground : false,
      size: props.size ? props.size : '',
      borderType: props.borderType ? props.borderType : '',
      prefix: props.prefix ? props.prefix : '',
      clearable: props.clearable ? props.clearable : false,
      onClear: props.onClear ? props.onClear() : {},
      onFocus: function onFocus() {
        return setMenu(true);
      },
      onBlur: function onBlur(e) {
        return props.value && !props.childrenKey ? handleCloseOnBlur(e) : {};
      },
      className: "full-width",
      width: props.width ? props.width : '',
      placeholder: props.placeholder
    }) : React.createElement("div", {
      style: {
        width: props.width ? props.width : 100
      },
      className: "rui-select__multiple"
    }, props.label ? React.createElement("label", {
      className: focus ? 'text-info' : '',
      onClick: handleLabelClick
    }, props.label) : '', React.createElement("div", {
      tabIndex: -1,
      ref: inputRef,
      onFocus: handleFocus,
      onBlur: handleBlur,
      style: {
        backgroundColor: props.whiteBackground ? '#fff' : ''
      },
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
        color: props.tagColor,
        visible: isSelected(item),
        className: "ma-1"
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