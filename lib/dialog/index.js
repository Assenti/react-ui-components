import _regeneratorRuntime from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/regenerator";
import _asyncToGenerator from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Button, Icon } from '../index';

var Dialog = function Dialog(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var modalClass = function modalClass() {
    var result = '';
    var className = {
      name: 'rui-dialog',
      dark: props.dark ? 'dark' : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  var handleConfirm = function handleConfirm() {
    if (props.onConfirm) {
      return new Promise(
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee(resolve, reject) {
          var result;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  setLoading(true);
                  _context.prev = 1;
                  _context.next = 4;
                  return props.onConfirm();

                case 4:
                  result = _context.sent;
                  resolve(result);
                  props.onCancel();
                  _context.next = 12;
                  break;

                case 9:
                  _context.prev = 9;
                  _context.t0 = _context["catch"](1);
                  reject(_context.t0);

                case 12:
                  _context.prev = 12;
                  setLoading(false);
                  return _context.finish(12);

                case 15:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[1, 9, 12, 15]]);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  };

  return React.createElement(CSSTransition, {
    in: props.visible,
    timeout: 300,
    classNames: "dialog",
    unmountOnExit: true
  }, React.createElement("div", {
    className: modalClass()
  }, React.createElement("div", {
    className: "rui-dialog__title"
  }, props.icon ? React.createElement(Icon, {
    className: "mr-5",
    size: 20,
    color: props.iconColor ? props.iconColor : '',
    name: props.icon ? props.icon : ''
  }) : '', React.createElement("span", {
    style: {
      color: props.titleColor ? props.titleColor : ''
    }
  }, props.title)), React.createElement("div", {
    className: "rui-dialog__description"
  }, props.description), React.createElement("div", {
    className: "rui-dialog__controls"
  }, React.createElement(Button, {
    onClick: function onClick() {
      return props.onCancel();
    },
    className: "mx-5",
    disabled: loading,
    color: props.cancelBtnColor ? props.cancelBtnColor : 'secondary',
    name: props.cancelText ? props.cancelText : 'Cancel'
  }), React.createElement(Button, {
    onClick: handleConfirm,
    className: "mx-5",
    loading: loading,
    color: props.confirmBtnColor ? props.confirmBtnColor : 'primary',
    name: props.confirmText ? props.confirmText : 'Confirm'
  }))));
};

export default Dialog;
//# sourceMappingURL=index.js.map