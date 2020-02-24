import React from 'react';
var defaultColor = '#4d4d4d';
var defaultSize = 24;
export var ChevronDoubleLeft = function ChevronDoubleLeft(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M18.41,7.41L17,6L11,12L17,18L18.41,16.59L13.83,12L18.41,7.41M12.41,7.41L11,6L5,12L11,18L12.41,16.59L7.83,12L12.41,7.41Z"
  }));
};
export var ChevronDoubleRight = function ChevronDoubleRight(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z"
  }));
};
export var ChevronBack = function ChevronBack(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
  }));
};
export var ChevronNext = function ChevronNext(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
  }));
};
export var ChevronDown = function ChevronDown(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
  }));
};
export var ChevronUp = function ChevronUp(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
  }));
};
export var Delete = function Delete(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
  }));
};
export var Edit = function Edit(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
  }));
};
export var Close = function Close(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
  }));
};
export var Code = function Code(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z"
  }));
};
export var Github = function Github(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
  }));
};
export var Person = function Person(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
  }));
};
export var Account = function Account(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"
  }));
};
export var ShieldAccount = function ShieldAccount(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M17.13,17C15.92,18.85 14.11,20.24 12,20.92C9.89,20.24 8.08,18.85 6.87,17C6.53,16.5 6.24,16 6,15.47C6,13.82 8.71,12.47 12,12.47C15.29,12.47 18,13.79 18,15.47C17.76,16 17.47,16.5 17.13,17Z"
  }));
};
export var Search = function Search(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
  }));
};
export var Home = function Home(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
  }));
};
export var Chip = function Chip(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M6,4H18V5H21V7H18V9H21V11H18V13H21V15H18V17H21V19H18V20H6V19H3V17H6V15H3V13H6V11H3V9H6V7H3V5H6V4M11,15V18H12V15H11M13,15V18H14V15H13M15,15V18H16V15H15Z"
  }));
};
export var Empty = function Empty(props) {
  return React.createElement("svg", {
    viewBox: "0 0 512 512",
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize
  }, React.createElement("g", null, React.createElement("g", null, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M510.417,201.092l-48.2-96.4c-2.541-5.082-7.735-8.292-13.417-8.292H63.2c-5.682,0-10.875,3.21-13.417,8.292l-48.2,96.4 C0.542,203.175,0,205.472,0,207.8v192.8c0,8.284,6.716,15,15,15h482c8.284,0,15-6.716,15-15V207.8 C512,205.472,511.458,203.175,510.417,201.092z M72.471,126.4H439.53l33.2,66.4H352.4c-8.284,0-15,6.716-15,15 c0,44.884-36.516,81.399-81.4,81.399c-44.884,0-81.4-36.516-81.4-81.399c0-8.284-6.716-15-15-15H39.271L72.471,126.4z M482,385.601H30V385.6V222.8h115.605c7.351,54.356,54.056,96.4,110.395,96.4s103.044-42.044,110.395-96.399H482V385.601z"
  }))));
};
export var Sun = function Sun(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z"
  }));
};
export var Moon = function Moon(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z"
  }));
};
export var Star = function Star(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
  }));
};
export var StarOutline = function StarOutline(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"
  }));
};
export var Smartphone = function Smartphone(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z"
  }));
};
export var Hammer = function Hammer(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M2 19.63L13.43 8.2L12.72 7.5L14.14 6.07L12 3.89C13.2 2.7 15.09 2.7 16.27 3.89L19.87 7.5L18.45 8.91H21.29L22 9.62L18.45 13.21L17.74 12.5V9.62L16.27 11.04L15.56 10.33L4.13 21.76L2 19.63Z"
  }));
};
export var City = function City(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M19,15H17V13H19M19,19H17V17H19M13,7H11V5H13M13,11H11V9H13M13,15H11V13H13M13,19H11V17H13M7,11H5V9H7M7,15H5V13H7M7,19H5V17H7M15,11V5L12,2L9,5V7H3V21H21V11H15Z"
  }));
};
export var Download = function Download(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"
  }));
};
export var Menu = function Menu(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
  }));
};
export var Loading = function Loading(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"
  }));
};
export var ReactLogo = function ReactLogo(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M12,10.11C13.03,10.11 13.87,10.95 13.87,12C13.87,13 13.03,13.85 12,13.85C10.97,13.85 10.13,13 10.13,12C10.13,10.95 10.97,10.11 12,10.11M7.37,20C8,20.38 9.38,19.8 10.97,18.3C10.45,17.71 9.94,17.07 9.46,16.4C8.64,16.32 7.83,16.2 7.06,16.04C6.55,18.18 6.74,19.65 7.37,20M8.08,14.26L7.79,13.75C7.68,14.04 7.57,14.33 7.5,14.61C7.77,14.67 8.07,14.72 8.38,14.77C8.28,14.6 8.18,14.43 8.08,14.26M14.62,13.5L15.43,12L14.62,10.5C14.32,9.97 14,9.5 13.71,9.03C13.17,9 12.6,9 12,9C11.4,9 10.83,9 10.29,9.03C10,9.5 9.68,9.97 9.38,10.5L8.57,12L9.38,13.5C9.68,14.03 10,14.5 10.29,14.97C10.83,15 11.4,15 12,15C12.6,15 13.17,15 13.71,14.97C14,14.5 14.32,14.03 14.62,13.5M12,6.78C11.81,7 11.61,7.23 11.41,7.5C11.61,7.5 11.8,7.5 12,7.5C12.2,7.5 12.39,7.5 12.59,7.5C12.39,7.23 12.19,7 12,6.78M12,17.22C12.19,17 12.39,16.77 12.59,16.5C12.39,16.5 12.2,16.5 12,16.5C11.8,16.5 11.61,16.5 11.41,16.5C11.61,16.77 11.81,17 12,17.22M16.62,4C16,3.62 14.62,4.2 13.03,5.7C13.55,6.29 14.06,6.93 14.54,7.6C15.36,7.68 16.17,7.8 16.94,7.96C17.45,5.82 17.26,4.35 16.62,4M15.92,9.74L16.21,10.25C16.32,9.96 16.43,9.67 16.5,9.39C16.23,9.33 15.93,9.28 15.62,9.23C15.72,9.4 15.82,9.57 15.92,9.74M17.37,2.69C18.84,3.53 19,5.74 18.38,8.32C20.92,9.07 22.75,10.31 22.75,12C22.75,13.69 20.92,14.93 18.38,15.68C19,18.26 18.84,20.47 17.37,21.31C15.91,22.15 13.92,21.19 12,19.36C10.08,21.19 8.09,22.15 6.62,21.31C5.16,20.47 5,18.26 5.62,15.68C3.08,14.93 1.25,13.69 1.25,12C1.25,10.31 3.08,9.07 5.62,8.32C5,5.74 5.16,3.53 6.62,2.69C8.09,1.85 10.08,2.81 12,4.64C13.92,2.81 15.91,1.85 17.37,2.69M17.08,12C17.42,12.75 17.72,13.5 17.97,14.26C20.07,13.63 21.25,12.73 21.25,12C21.25,11.27 20.07,10.37 17.97,9.74C17.72,10.5 17.42,11.25 17.08,12M6.92,12C6.58,11.25 6.28,10.5 6.03,9.74C3.93,10.37 2.75,11.27 2.75,12C2.75,12.73 3.93,13.63 6.03,14.26C6.28,13.5 6.58,12.75 6.92,12M15.92,14.26C15.82,14.43 15.72,14.6 15.62,14.77C15.93,14.72 16.23,14.67 16.5,14.61C16.43,14.33 16.32,14.04 16.21,13.75L15.92,14.26M13.03,18.3C14.62,19.8 16,20.38 16.62,20C17.26,19.65 17.45,18.18 16.94,16.04C16.17,16.2 15.36,16.32 14.54,16.4C14.06,17.07 13.55,17.71 13.03,18.3M8.08,9.74C8.18,9.57 8.28,9.4 8.38,9.23C8.07,9.28 7.77,9.33 7.5,9.39C7.57,9.67 7.68,9.96 7.79,10.25L8.08,9.74M10.97,5.7C9.38,4.2 8,3.62 7.37,4C6.74,4.35 6.55,5.82 7.06,7.96C7.83,7.8 8.64,7.68 9.46,7.6C9.94,6.93 10.45,6.29 10.97,5.7Z"
  }));
};
export var FileOutline = function FileOutline(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"
  }));
};
export var Email = function Email(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
  }));
};
export var Rocket = function Rocket(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M2.81,14.12L5.64,11.29L8.17,10.79C11.39,6.41 17.55,4.22 19.78,4.22C19.78,6.45 17.59,12.61 13.21,15.83L12.71,18.36L9.88,21.19L9.17,17.66C7.76,17.66 7.76,17.66 7.05,16.95C6.34,16.24 6.34,16.24 6.34,14.83L2.81,14.12M5.64,16.95L7.05,18.36L4.39,21.03H2.97V19.61L5.64,16.95M4.22,15.54L5.46,15.71L3,18.16V16.74L4.22,15.54M8.29,18.54L8.46,19.78L7.26,21H5.84L8.29,18.54M13,9.5A1.5,1.5 0 0,0 11.5,11A1.5,1.5 0 0,0 13,12.5A1.5,1.5 0 0,0 14.5,11A1.5,1.5 0 0,0 13,9.5Z"
  }));
};
export var Key = function Key(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M22,18V22H18V19H15V16H12L9.74,13.74C9.19,13.91 8.61,14 8,14A6,6 0 0,1 2,8A6,6 0 0,1 8,2A6,6 0 0,1 14,8C14,8.61 13.91,9.19 13.74,9.74L22,18M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5Z"
  }));
};
export var ExitToApp = function ExitToApp(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M19,3H5C3.89,3 3,3.89 3,5V9H5V5H19V19H5V15H3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10.08,15.58L11.5,17L16.5,12L11.5,7L10.08,8.41L12.67,11H3V13H12.67L10.08,15.58Z"
  }));
};
export var ArrowUpBold = function ArrowUpBold(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M15,20H9V12H4.16L12,4.16L19.84,12H15V20Z"
  }));
};
export var FormatAlignLeft = function FormatAlignLeft(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z"
  }));
};
export var FormatAlignCenter = function FormatAlignCenter(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M3,3H21V5H3V3M7,7H17V9H7V7M3,11H21V13H3V11M7,15H17V17H7V15M3,19H21V21H3V19Z"
  }));
};
export var FormatAlignRight = function FormatAlignRight(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M3,3H21V5H3V3M9,7H21V9H9V7M3,11H21V13H3V11M9,15H21V17H9V15M3,19H21V21H3V19Z"
  }));
};
export var Brush = function Brush(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z"
  }));
};
export var Lock = function Lock(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"
  }));
};
export var Filter = function Filter(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M14,12V19.88C14.04,20.18 13.94,20.5 13.71,20.71C13.32,21.1 12.69,21.1 12.3,20.71L10.29,18.7C10.06,18.47 9.96,18.16 10,17.87V12H9.97L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L14.03,12H14Z"
  }));
};
export var SortAscending = function SortAscending(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M19 17H22L18 21L14 17H17V3H19M2 17H6V19H2M12 5V7H2V5M2 11H9V13H2Z"
  }));
};
export var SortDescending = function SortDescending(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M19 7H22L18 3L14 7H17V21H19M2 17H6V19H2M12 5V7H2V5M2 11H9V13H2Z"
  }));
};
export var ContentCopy = function ContentCopy(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
  }));
};
export var ToyBrick = function ToyBrick(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M19 6V5A2 2 0 0 0 17 3H15A2 2 0 0 0 13 5V6H11V5A2 2 0 0 0 9 3H7A2 2 0 0 0 5 5V6H3V20H21V6Z"
  }));
};
export var HelpCircleOutline = function HelpCircleOutline(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z"
  }));
};
export var DotsVertical = function DotsVertical(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
  }));
};
export var DotsHorizontal = function DotsHorizontal(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"
  }));
};
export var LanguageCss3 = function LanguageCss3(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M5,3L4.35,6.34H17.94L17.5,8.5H3.92L3.26,11.83H16.85L16.09,15.64L10.61,17.45L5.86,15.64L6.19,14H2.85L2.06,18L9.91,21L18.96,18L20.16,11.97L20.4,10.76L21.94,3H5Z"
  }));
};
export var Earth = function Earth(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
  }));
};
//# sourceMappingURL=index.js.map