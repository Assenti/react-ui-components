import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { Empty, Loading } from '../icon/icons/index';
import { Checkbox, Pagination, Icon, InputField } from '../index';
import { compare } from '../utils';

var makeSortableHeaders = function makeSortableHeaders(headers) {
  var sortableHeaders = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = headers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      sortableHeaders.push({
        name: item,
        sort: 'asc'
      });
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

  return sortableHeaders;
};

var Table = function Table(props) {
  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var _useState3 = useState(props.currentPage ? props.currentPage : 1),
      _useState4 = _slicedToArray(_useState3, 2),
      currentPage = _useState4[0],
      setCurrentPage = _useState4[1];

  var _useState5 = useState(props.perPage ? props.perPage : 10),
      _useState6 = _slicedToArray(_useState5, 2),
      perPage = _useState6[0],
      setPerPage = _useState6[1];

  var _useState7 = useState(props.sortable ? 'asc' : ''),
      _useState8 = _slicedToArray(_useState7, 2),
      sortType = _useState8[0],
      setSortType = _useState8[1];

  var _useState9 = useState(0),
      _useState10 = _slicedToArray(_useState9, 2),
      colIndex = _useState10[0],
      setColIndex = _useState10[1];

  var _useState11 = useState(''),
      _useState12 = _slicedToArray(_useState11, 2),
      search = _useState12[0],
      setSearch = _useState12[1];

  var tableContainerClass = function tableContainerClass() {
    var result = '';
    var className = {
      name: 'rui-table__container',
      bordered: props.bordered ? 'bordered' : '',
      grid: props.grid ? 'grid' : '',
      color: props.color && props.color !== 'default' ? props.color : '',
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
      name: 'rui-table',
      alignment: props.alignment && props.alignment !== 'left' ? props.alignment : '',
      headerColor: props.color ? props.color : '',
      empty: props.items.length === 0 ? 'empty' : '',
      noHover: props.noHover ? 'no-hover' : '',
      stripped: props.stripped ? 'stripped' : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  var handleColumnSort = function handleColumnSort(colIndex, sortType) {
    setColIndex(colIndex);
    setSortType(sortType);
  };

  var isSelected = function isSelected(_item) {
    var result = false;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = selected[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var item = _step2.value;
        if (item[props.selectKey] === _item[props.selectKey]) return true;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return result;
  };

  var onSelect = function onSelect(item) {
    for (var i = 0; i < selected.length; i++) {
      if (selected[i][props.selectKey] === item[props.selectKey]) {
        if (i === 0) {
          setSelected(selected.slice(1));
          props.onSelect(selected.slice(1));
        } else if (i === selected.length - 1) {
          setSelected(selected.slice(0, -1));
          props.onSelect(selected.slice(0, -1));
        } else if (i > 0) {
          setSelected([].concat(_toConsumableArray(selected.slice(0, i)), _toConsumableArray(selected.slice(i + 1))));
          props.onSelect([].concat(_toConsumableArray(selected.slice(0, i)), _toConsumableArray(selected.slice(i + 1))));
        }

        return;
      }
    }

    setSelected([].concat(_toConsumableArray(selected), [item]));
    props.onSelect([].concat(_toConsumableArray(selected), [item]));
  };

  var isAllChecked = function isAllChecked() {
    if (selected.length === getItems().length) return true;
    return false;
  };

  var onSelectAll = function onSelectAll() {
    if (selected.length > 0) {
      setSelected([]);
      props.onSelect([]);
    } else {
      setSelected(getItems());
      props.onSelect(getItems());
    }
  };

  var isIndexedTable = function isIndexedTable() {
    if (props.index) return React.createElement("th", {
      className: "indexed"
    }, props.indexSign ? props.indexSign : '#');
  };

  var isCheckbox = function isCheckbox() {
    if (props.checkbox) {
      return React.createElement("th", {
        style: {
          maxWidth: 40,
          width: 40
        }
      }, React.createElement(Checkbox, {
        color: props.color ? props.color : '',
        onChange: function onChange() {
          return props.checkbox ? onSelectAll() : {};
        },
        checked: isAllChecked()
      }));
    }
  };

  var isControls = function isControls() {
    if (props.controls) return React.createElement("th", null);
  };

  var isSortable = function isSortable(item, index) {
    if (props.sortable) {
      return React.createElement(Icon, {
        className: "ml-8 cursor-pointer",
        name: item.sort === 'desc' ? 'sort-descending' : 'sort-ascending',
        onClick: function onClick() {
          item.sort = item.sort === 'asc' ? 'desc' : 'asc';
          handleColumnSort(index, item.sort);
        },
        color: props.color && props.color !== 'default' ? '#fff' : '',
        size: 16
      });
    }
  };

  var prepareHeaders = function prepareHeaders() {
    return React.createElement("tr", null, isIndexedTable(), isCheckbox(), makeSortableHeaders(props.headers).map(function (item, index) {
      return React.createElement("th", {
        key: index
      }, React.createElement("div", {
        className: "row align-center"
      }, item.name, isSortable(item, index)));
    }), isControls());
  };

  var getItemKey = function getItemKey() {
    return props.itemTitles[colIndex];
  };

  var getItems = function getItems() {
    if (search) {
      if (props.pagination && props.sortable) {
        return props.items.slice(perPage * currentPage - perPage, perPage * currentPage).sort(function (a, b) {
          return compare(a, b, getItemKey(), sortType);
        }).filter(function (item) {
          return item[props.searchKey].toLowerCase().includes(search.toLowerCase());
        });
      } else if (!props.pagination && props.sortable) {
        return props.items.sort(function (a, b) {
          return compare(a, b, getItemKey(), sortType);
        }).filter(function (item) {
          return item[props.searchKey].toLowerCase().includes(search.toLowerCase());
        });
      } else if (props.pagination && !props.sortable) {
        return props.items.slice(perPage * currentPage - perPage, perPage * currentPage).sort(function (a, b) {
          return compare(a, b, getItemKey(), sortType);
        }).filter(function (item) {
          return item[props.searchKey].toLowerCase().includes(search.toLowerCase());
        });
      } else {
        return props.items.filter(function (item) {
          return item[props.searchKey].toLowerCase().includes(search.toLowerCase());
        });
      }
    } else {
      if (props.pagination && props.sortable) {
        return props.items.slice(perPage * currentPage - perPage, perPage * currentPage).sort(function (a, b) {
          return compare(a, b, getItemKey(), sortType);
        });
      } else if (!props.pagination && props.sortable) {
        return props.items.sort(function (a, b) {
          return compare(a, b, getItemKey(), sortType);
        });
      } else if (props.pagination && !props.sortable) {
        return props.items.slice(perPage * currentPage - perPage, perPage * currentPage).sort(function (a, b) {
          return compare(a, b, getItemKey(), sortType);
        });
      } else {
        return props.items;
      }
    }
  };

  var handleKeyUp = function handleKeyUp(e) {
    if (e.key === 'Escape') setSearch('');
  };

  return React.createElement("div", {
    className: tableContainerClass()
  }, React.createElement("div", {
    className: "rui-table__header"
  }, props.tableTitle ? React.createElement("div", {
    className: "rui-table__title"
  }, props.tableTitle) : '', props.searchable ? React.createElement(InputField, {
    color: props.color ? props.color : 'primary',
    prefix: React.createElement(Icon, {
      name: "search"
    }),
    value: search,
    onKeyUp: handleKeyUp,
    placeholder: props.searchPlaceholder ? props.searchPlaceholder : 'Search',
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    }
  }) : ''), React.createElement("table", {
    className: tableClass()
  }, React.createElement("thead", null, prepareHeaders()), React.createElement("tbody", null, getItems().map(function (item, index) {
    return React.createElement("tr", {
      key: index
    }, props.index ? React.createElement("td", {
      className: "indexed"
    }, index + 1) : React.createElement(React.Fragment, null), props.checkbox ? React.createElement("td", null, React.createElement(Checkbox, {
      checked: isSelected(item),
      color: props.color ? props.color : '',
      onChange: function onChange() {
        return onSelect(item);
      }
    })) : React.createElement(React.Fragment, null), props.itemTitles.map(function (title, iter) {
      return React.createElement("td", {
        key: iter
      }, item[title]);
    }), props.controls ? React.createElement("td", null, props.controls(item)) : React.createElement(React.Fragment, null));
  }))), props.footer || props.checkbox ? props.checkbox ? React.createElement("div", {
    className: "rui-table__footer row space-between"
  }, React.createElement("span", null, props.selectedText ? props.selectedText : 'Selected: ', " ", React.createElement("strong", null, selected.length)), props.footer) : React.createElement("div", {
    className: "rui-table__footer"
  }, props.footer) : '', props.items.length === 0 && !props.loading ? React.createElement("div", {
    className: "rui-table__placeholder"
  }, React.createElement(Empty, null)) : '', props.loading ? React.createElement("div", {
    className: props.loading ? 'rui-table__placeholder loading' : 'rui-table__placeholder'
  }, React.createElement(Loading, {
    color: "#1678c2"
  })) : '', props.pagination ? React.createElement(Pagination, {
    onChange: function onChange(page) {
      return setCurrentPage(page);
    },
    perPageVariants: props.perPageVariants,
    perPage: perPage,
    perPageText: props.perPageText,
    onPerPageSelect: function onPerPageSelect(value) {
      return setPerPage(value);
    },
    itemsCount: props.itemsTotal ? props.itemsTotal : 0,
    color: props.color && props.color !== 'default' ? props.color : '',
    size: props.paginationSize ? props.paginationSize : '',
    current: props.currentPage ? props.currentPage : 1,
    rounded: props.paginationRounded ? props.paginationRounded : false
  }) : '');
};

export default Table;