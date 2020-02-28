import _slicedToArray from "/Users/assetsultanov/Documents/my_apps/react-ui-components/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { InputField } from '../input';
import { phoneMaskFormatter, cardMaskFormatter, cardIssueMaskFormatter, iinMaskFormatter } from '../utils';

var InputMask = function InputMask(props) {
  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      preValue = _useState2[0],
      setPreValue = _useState2[1];

  var handleKeyDown = function handleKeyDown(e) {
    switch (props.mask) {
      case 'phone':
        if (e.key.match(/^[0-9]+$/)) {
          var concatenatedValue = preValue + e.key;
          setPreValue(concatenatedValue.length <= 10 ? concatenatedValue : preValue);
          phoneMaskFormatter(concatenatedValue, props.code);
        } else if (e.key === 'Backspace' && preValue) {
          setPreValue(preValue.slice(0, preValue.length - 1));
          phoneMaskFormatter(preValue.slice(0, preValue.length - 1));
        }

        break;

      case 'card':
        if (e.key.match(/^[0-9]+$/)) {
          var _concatenatedValue = preValue + e.key;

          setPreValue(_concatenatedValue.length <= 16 ? _concatenatedValue : preValue);
          cardMaskFormatter(_concatenatedValue);
        } else if (e.key === 'Backspace' && preValue) {
          setPreValue(preValue.slice(0, preValue.length - 1));
          cardMaskFormatter(preValue.slice(0, preValue.length - 1));
        }

        break;

      case 'card-issue':
        if (e.key.match(/^[0-9]+$/)) {
          var _concatenatedValue2 = preValue + e.key;

          setPreValue(_concatenatedValue2.length <= 4 ? _concatenatedValue2 : preValue);
          cardIssueMaskFormatter(_concatenatedValue2);
        } else if (e.key === 'Backspace' && preValue) {
          setPreValue(preValue.slice(0, preValue.length - 1));
          cardIssueMaskFormatter(preValue.slice(0, preValue.length - 1));
        }

        break;

      case 'iin':
        if (e.key.match(/^[0-9]+$/)) {
          var _concatenatedValue3 = preValue + e.key;

          setPreValue(_concatenatedValue3.length <= 12 ? _concatenatedValue3 : preValue);
          iinMaskFormatter(_concatenatedValue3);
        } else if (e.key === 'Backspace' && preValue) {
          setPreValue(preValue.slice(0, preValue.length - 1));
          iinMaskFormatter(preValue.slice(0, preValue.length - 1));
        }

        break;

      default:
        break;
    }
  };

  var handleChange = function handleChange(e) {
    switch (props.mask) {
      case 'phone':
        props.onChange(phoneMaskFormatter(preValue, props.code), preValue);
        break;

      case 'card':
        props.onChange(cardMaskFormatter(preValue), preValue);
        break;

      case 'card-issue':
        props.onChange(cardIssueMaskFormatter(preValue), preValue);
        break;

      case 'iin':
        props.onChange(iinMaskFormatter(preValue), preValue);
        break;

      default:
        break;
    }
  };

  var getValue = function getValue() {
    switch (props.mask) {
      case 'phone':
        return phoneMaskFormatter(preValue, props.code);

      case 'card':
        return cardMaskFormatter(preValue);

      case 'card-issue':
        return cardIssueMaskFormatter(preValue);

      case 'iin':
        return iinMaskFormatter(preValue);

      default:
        return '';
    }
  };

  return React.createElement(InputField, Object.assign({}, props, {
    type: "text",
    onKeyDown: handleKeyDown,
    onChange: handleChange,
    value: getValue()
  }));
};

export default InputMask;
//# sourceMappingURL=index.js.map