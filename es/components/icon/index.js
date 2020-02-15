import React from 'react';
import { Delete, Search, Home, Edit, Close, Github, ChevronDoubleRight, ChevronDoubleLeft, ChevronDown, ChevronNext, Code, Chip, Account, Sun, Moon, Star, StarOutline, Smartphone, Hammer, City, ChevronBack, Empty, Download, Menu, Person, Loading, ShieldAccount, ReactLogo } from '../../../icons/index';
export var Icon = function Icon(props) {
  var Icon = function Icon() {
    switch (props.name) {
      case 'delete':
        return React.createElement(Delete, {
          size: props.size,
          color: props.color
        });

      case 'search':
        return React.createElement(Search, {
          size: props.size,
          color: props.color
        });

      case 'home':
        return React.createElement(Home, {
          size: props.size,
          color: props.color
        });

      case 'edit':
        return React.createElement(Edit, {
          size: props.size,
          color: props.color
        });

      case 'github':
        return React.createElement(Github, {
          size: props.size,
          color: props.color
        });

      case 'close':
        return React.createElement(Close, {
          size: props.size,
          color: props.color
        });

      case 'chevron-double-right':
        return React.createElement(ChevronDoubleRight, {
          size: props.size,
          color: props.color
        });

      case 'chevron-double-left':
        return React.createElement(ChevronDoubleLeft, {
          size: props.size,
          color: props.color
        });

      case 'code':
        return React.createElement(Code, {
          size: props.size,
          color: props.color
        });

      case 'chip':
        return React.createElement(Chip, {
          size: props.size,
          color: props.color
        });

      case 'account':
        return React.createElement(Account, {
          size: props.size,
          color: props.color
        });

      case 'person':
        return React.createElement(Person, {
          size: props.size,
          color: props.color
        });

      case 'chevron-down':
        return React.createElement(ChevronDown, {
          size: props.size,
          color: props.color
        });

      case 'chevron-next':
        return React.createElement(ChevronNext, {
          size: props.size,
          color: props.color
        });

      case 'chevron-back':
        return React.createElement(ChevronBack, {
          size: props.size,
          color: props.color
        });

      case 'sun':
        return React.createElement(Sun, {
          size: props.size,
          color: props.color
        });

      case 'moon':
        return React.createElement(Moon, {
          size: props.size,
          color: props.color
        });

      case 'star':
        return React.createElement(Star, {
          size: props.size,
          color: props.color
        });

      case 'star-outline':
        return React.createElement(StarOutline, {
          size: props.size,
          color: props.color
        });

      case 'smartphone':
        return React.createElement(Smartphone, {
          size: props.size,
          color: props.color
        });

      case 'hammer':
        return React.createElement(Hammer, {
          size: props.size,
          color: props.color
        });

      case 'city':
        return React.createElement(City, {
          size: props.size,
          color: props.color
        });

      case 'empty':
        return React.createElement(Empty, {
          size: props.size,
          color: props.color
        });

      case 'download':
        return React.createElement(Download, {
          size: props.size,
          color: props.color
        });

      case 'menu':
        return React.createElement(Menu, {
          size: props.size,
          color: props.color
        });

      case 'loading':
        return React.createElement(Loading, {
          size: props.size,
          color: props.color
        });

      case 'shield-account':
        return React.createElement(ShieldAccount, {
          size: props.size,
          color: props.color
        });

      case 'react':
        return React.createElement(ReactLogo, {
          size: props.size,
          color: props.color
        });

      default:
        return '';
    }
  };

  var iconClass = function iconClass() {
    if (props.className) {
      return "icon ".concat(props.className);
    } else {
      return 'icon';
    }
  };

  return React.createElement("i", {
    title: props.title,
    style: {
      width: props.size ? props.size : 24,
      height: props.size ? props.size : 24
    },
    className: iconClass(),
    onClick: function onClick(e) {
      return props.onClick ? props.onClick(e) : {};
    }
  }, React.createElement(Icon, null));
};