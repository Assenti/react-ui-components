export var convertToNum = function convertToNum(value) {
  if (/^\d+$/.test(value)) {
    return parseFloat(value);
  } else return value;
};
export var compare = function compare(a, b, key, sortType) {
  if (sortType === 'desc') {
    if (convertToNum(a[key]) < convertToNum(b[key])) return 1;
    if (convertToNum(b[key]) < convertToNum(a[key])) return -1;
    return 0;
  } else if (sortType === 'asc') {
    if (convertToNum(a[key]) > convertToNum(b[key])) return 1;
    if (convertToNum(b[key]) > convertToNum(a[key])) return -1;
    return 0;
  }
};
export var phoneMask = function phoneMask(phone) {
  var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '+7';

  if (phone) {
    return "".concat(code, " (").concat(phone.slice(0, 3), ") ").concat(phone.slice(3, 6), "-").concat(phone.slice(6, 8), "-").concat(phone.slice(8, 10));
  } else {
    return '';
  }
};
export var iinMask = function iinMask(value) {
  if (value) {
    return "".concat(value.slice(0, 3), " ").concat(value.slice(3, 6), " ").concat(value.slice(6, 9), " ").concat(value.slice(9, 12));
  } else {
    return '';
  }
};
export var creditMask = function creditMask(value) {
  if (value) {
    return "".concat(value.slice(0, 4), "-").concat(value.slice(4, 8), "-").concat(value.slice(8, 12));
  } else {
    return '';
  }
};
export var creditIssueMask = function creditIssueMask(value) {
  if (value) {
    return "".concat(value.slice(0, 2), " / ").concat(value.slice(2, 4));
  } else {
    return '';
  }
};
export var phoneMaskFormatter = function phoneMaskFormatter(value, code) {
  if (value) {
    if (value.length <= 3) {
      return "".concat(code, " (").concat(value, ")");
    } else if (value.length > 3 && value.length <= 6) {
      return "".concat(code, " (").concat(value.slice(0, 3), ") ").concat(value.slice(3, value.length));
    } else if (value.length > 6 && value.length <= 8) {
      return "".concat(code, " (").concat(value.slice(0, 3), ") ").concat(value.slice(3, 6), "-").concat(value.slice(6, value.length));
    } else {
      return "".concat(code, " (").concat(value.slice(0, 3), ") ").concat(value.slice(3, 6), "-").concat(value.slice(6, 8), "-").concat(value.slice(8, 10));
    }
  } else return '';
};
export var iinMaskFormatter = function iinMaskFormatter(value) {
  if (value) {
    if (value.length <= 3) {
      return "".concat(value);
    } else if (value.length > 3 && value.length <= 6) {
      return "".concat(value.slice(0, 3), "-").concat(value.slice(3, value.length));
    } else if (value.length > 6 && value.length <= 9) {
      return "".concat(value.slice(0, 3), "-").concat(value.slice(3, 6), "-").concat(value.slice(6, value.length));
    } else {
      return "".concat(value.slice(0, 3), "-").concat(value.slice(3, 6), "-").concat(value.slice(6, 9), "-").concat(value.slice(9, 12));
    }
  } else return '';
};
export var cardMaskFormatter = function cardMaskFormatter(value) {
  if (value) {
    if (value.length <= 4) {
      return "".concat(value);
    } else if (value.length > 4 && value.length <= 8) {
      return "".concat(value.slice(0, 4), "-").concat(value.slice(4, value.length));
    } else if (value.length > 8 && value.length <= 12) {
      return "".concat(value.slice(0, 4), "-").concat(value.slice(4, 8), "-").concat(value.slice(8, value.length));
    } else {
      return "".concat(value.slice(0, 4), "-").concat(value.slice(4, 8), "-").concat(value.slice(8, 12), "-").concat(value.slice(12, 16));
    }
  } else return '';
};
export var cardIssueMaskFormatter = function cardIssueMaskFormatter(value) {
  if (value) {
    if (value.length <= 2) {
      return "".concat(value);
    } else {
      return "".concat(value.slice(0, 2), " / ").concat(value.slice(2, 4));
    }
  } else return '';
};
export var dateMaskFormatter = function dateMaskFormatter(value) {
  var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.';

  if (value) {
    if (value.length <= 2) {
      return "".concat(value);
    } else if (value.length > 2 && value.length <= 4) {
      return "".concat(value.slice(0, 2)).concat(delimiter).concat(value.slice(2, value.length));
    } else {
      return "".concat(value.slice(0, 2)).concat(delimiter).concat(value.slice(2, 4)).concat(delimiter).concat(value.slice(4, 8));
    }
  } else return '';
};
//# sourceMappingURL=index.js.map