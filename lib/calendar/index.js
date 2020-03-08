import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect } from 'react';
import { Button, Select, PopOver, isTwoDatesEqual } from '../index';
var monthesKz = ['Каңтар', 'Ақпан', 'Наурыз', 'Сәуір', 'Мамыр', 'Маусым', 'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан'];
var monthesRu = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
var monthesEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthesFr = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
var weekKz = ['Дүйсенбі', 'Сейсенбі', 'Сәрсенбі', 'Бейсенбі', 'Жұма', 'Сенбі', 'Жексенбі'];
var weekRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
var weekEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var weekFr = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

var daysInMonth = function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
};

var shortWeekName = function shortWeekName(name) {
  return name.slice(0, 3);
};

var getCurrentMonth = function getCurrentMonth(lang, monthIndex) {
  switch (lang) {
    case 'ru':
      return monthesRu[monthIndex];

    case 'kz':
      return monthesKz[monthIndex];

    case 'fr':
      return monthesFr[monthIndex];

    default:
      return monthesEn[monthIndex];
  }
};

var getMonthIndex = function getMonthIndex(month, lang) {
  var index = 0;

  switch (lang) {
    case 'ru':
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = monthesRu[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          if (item === month) return index;
          index++;
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

      break;

    case 'kz':
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = monthesKz[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _item = _step2.value;
          if (_item === month) return index;
          index++;
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

      break;

    case 'fr':
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = monthesFr[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _item2 = _step3.value;
          if (_item2 === month) return index;
          index++;
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      break;

    default:
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = monthesEn[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _item3 = _step4.value;
          if (_item3 === month) return index;
          index++;
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      break;
  }
};

var getCurrentWeek = function getCurrentWeek(lang, fromSunday) {
  if (fromSunday) {
    switch (lang) {
      case 'ru':
        var weekRuFromSunday = weekRu.map(function (item) {
          return item;
        });
        weekRuFromSunday.pop();
        weekRuFromSunday.unshift('Воскресенье');
        return weekRuFromSunday;

      case 'kz':
        var weekKzFromSunday = weekKz.map(function (item) {
          return item;
        });
        weekKzFromSunday.pop();
        weekKzFromSunday.unshift('Жексенбі');
        return weekKzFromSunday;

      case 'fr':
        var weekFrFromSunday = weekKz.map(function (item) {
          return item;
        });
        weekFrFromSunday.pop();
        weekFrFromSunday.unshift('Dimanche');
        return weekFrFromSunday;

      default:
        var weekEnFromSunday = weekEn.map(function (item) {
          return item;
        });
        weekEnFromSunday.pop();
        weekEnFromSunday.unshift('Sunday');
        return weekEnFromSunday;
    }
  } else {
    switch (lang) {
      case 'ru':
        return weekRu;

      case 'kz':
        return weekKz;

      case 'fr':
        return weekFr;

      default:
        return weekEn;
    }
  }
};

var years = function years(limit, onlyPast) {
  var current = new Date().getFullYear();
  var years = [];

  if (!onlyPast) {
    for (var i = current + limit; i > current; i--) {
      years.push(i);
    }

    for (var _i = 0; _i <= limit; _i++) {
      years.push(current - _i);
    }
  } else {
    for (var _i2 = 0; _i2 <= limit; _i2++) {
      years.push(current - _i2);
    }
  }

  return years;
};

var monthes = function monthes(lang) {
  switch (lang) {
    case 'ru':
      return monthesRu;

    case 'kz':
      return monthesKz;

    case 'fr':
      return monthesFr;

    default:
      return monthesEn;
  }
};

var Calendar = function Calendar(props) {
  var getInitialMonth = function getInitialMonth() {
    return getCurrentMonth(props.locale, new Date().getMonth());
  };

  var _useState = useState(getInitialMonth()),
      _useState2 = _slicedToArray(_useState, 2),
      month = _useState2[0],
      setMonth = _useState2[1];

  var _useState3 = useState(new Date().getFullYear()),
      _useState4 = _slicedToArray(_useState3, 2),
      year = _useState4[0],
      setYear = _useState4[1];

  var today = new Date().getDate();

  var hasDateEvent = function hasDateEvent(chosenDate) {
    if (props.events) {
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = props.events[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var item = _step5.value;
          if (isTwoDatesEqual(item.date, chosenDate)) return item;
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    }
  };

  var isDateHoliday = function isDateHoliday(chosenDate) {
    if (props.holidays) {
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = props.holidays[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var item = _step6.value;
          if (isTwoDatesEqual(item.date, chosenDate)) return true;
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }
    }
  };

  var dateClass = function dateClass(item) {
    var result = '';
    if (!item) result = 'none';
    if (!props.hideWeekend && item && (new Date(year, getMonthIndex(month, props.locale), item).getDay() === 6 || new Date(year, getMonthIndex(month, props.locale), item).getDay() === 0)) result += ' weekend';
    if (item === today && !props.hideCurrentDay && !isDateHoliday(new Date(year, getMonthIndex(month, props.locale), item))) result += ' active';else if (item === today && !props.hideCurrentDay && isDateHoliday(new Date(year, getMonthIndex(month, props.locale), item))) result += ' active holiday';else if (item !== today && isDateHoliday(new Date(year, getMonthIndex(month, props.locale), item))) result += ' holiday';
    return result ? result.trim() : null;
  };

  var prepareMonth = function prepareMonth() {
    var monthFirstDayInWeek = new Date(year, getMonthIndex(month, props.locale), 1).getDay();

    if (!props.weekStartsSunday) {
      monthFirstDayInWeek = monthFirstDayInWeek - 1;
      monthFirstDayInWeek = monthFirstDayInWeek === -1 ? 6 : monthFirstDayInWeek;
    }

    var date = 1;
    var rows = [];

    for (var i = 0; i < 6; i++) {
      var cells = [];

      for (var j = 0; j < 7; j++) {
        if (i === 0 && j < monthFirstDayInWeek) {
          cells.push('');
        } else if (date > daysInMonth(getMonthIndex(month, props.locale) + 1, year)) {
          break;
        } else {
          cells.push(date);
          date++;
        }
      }

      rows.push({
        week: i,
        days: cells
      });
    }

    return React.createElement(React.Fragment, null, rows.map(function (item, iter) {
      return React.createElement("tr", {
        key: iter
      }, item.days.map(function (item, index) {
        return React.createElement("td", {
          key: index,
          onClick: function onClick() {
            return props.onDate && item ? props.onDate(new Date(year, getMonthIndex(month, props.locale), item)) : {};
          },
          className: dateClass(item),
          name: item
        }, item, React.createElement("div", {
          className: "rui-calendar__events"
        }, hasDateEvent(new Date(year, getMonthIndex(month, props.locale), item)) && hasDateEvent(new Date(year, getMonthIndex(month, props.locale), item)).items.map(function (event, iter) {
          return React.createElement(PopOver, {
            key: iter,
            trigger: props.popOverTrigger ? props.popOverTrigger : 'hover',
            dark: props.dark,
            title: event.title,
            content: event.event
          }, React.createElement("div", {
            style: {
              backgroundColor: event.color
            },
            className: "rui-calendar__event"
          }));
        })));
      }));
    }));
  };

  var componentClass = function componentClass() {
    var result = '';
    var className = {
      btn: 'rui-calendar',
      dark: props.dark ? 'dark' : '',
      size: props.size ? props.size : '',
      color: props.color && props.color !== 'default' ? props.color : 'primary',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  var handleNext = function handleNext() {
    if (getMonthIndex(month, props.locale) < 11) {
      setMonth(getCurrentMonth(props.locale, getMonthIndex(month, props.locale) + 1));
    } else {
      setMonth(getCurrentMonth(props.locale, 0));
      setYear(year + 1);
    }
  };

  var handlePrev = function handlePrev() {
    if (getMonthIndex(month, props.locale) > 0) {
      setMonth(getCurrentMonth(props.locale, getMonthIndex(month, props.locale) - 1));
    } else {
      setMonth(getCurrentMonth(props.locale, 11));
      setYear(year - 1);
    }
  };

  useEffect(function () {
    setMonth(getInitialMonth());
  }, [props.locale]);
  return React.createElement("div", {
    className: componentClass(),
    style: {
      width: props.width
    }
  }, React.createElement("div", {
    className: "rui-calendar__header"
  }, React.createElement(Button, {
    icon: "chevron-back",
    light: !props.dark,
    dark: props.dark,
    size: props.size,
    onClick: handlePrev
  }), React.createElement("div", {
    className: "rui-calendar__title"
  }, React.createElement(Select, {
    items: years(props.limit ? props.limit : 15, props.onlyPast),
    width: 110,
    color: props.color ? props.color : 'primary',
    value: year,
    size: props.size,
    className: "mr-5",
    onChange: function onChange(v) {
      return setYear(v);
    }
  }), React.createElement(Select, {
    items: monthes(props.locale),
    width: 110,
    size: props.size,
    color: props.color ? props.color : 'primary',
    value: month,
    onChange: function onChange(v) {
      return setMonth(v);
    }
  })), React.createElement(Button, {
    icon: "chevron-next",
    light: !props.dark,
    dark: props.dark,
    size: props.size,
    onClick: handleNext
  })), React.createElement("table", {
    className: "rui-calendar__body"
  }, React.createElement("thead", null, React.createElement("tr", null, getCurrentWeek(props.locale, props.weekStartsSunday).map(function (item, index) {
    return React.createElement("th", {
      key: index
    }, props.shortWeekName ? shortWeekName(item) : item);
  }))), React.createElement("tbody", null, prepareMonth())), React.createElement("div", {
    className: "rui-calendar__footer"
  }));
};

export default Calendar;