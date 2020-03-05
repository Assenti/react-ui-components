import React from 'react';
var defaultColor = 'gray';
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
export var Gitlab = function Gitlab(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M21.94 13.11L20.89 9.89C20.89 9.86 20.88 9.83 20.87 9.8L18.76 3.32C18.65 3 18.33 2.75 17.96 2.75C17.6 2.75 17.28 3 17.17 3.33L15.17 9.5H8.84L6.83 3.33C6.72 3 6.4 2.75 6.04 2.75H6.04C5.67 2.75 5.35 3 5.24 3.33L3.13 9.82C3.13 9.82 3.13 9.83 3.13 9.83L2.06 13.11C1.9 13.61 2.07 14.15 2.5 14.45L11.72 21.16C11.89 21.28 12.11 21.28 12.28 21.15L21.5 14.45C21.93 14.15 22.1 13.61 21.94 13.11M8.15 10.45L10.72 18.36L4.55 10.45M13.28 18.37L15.75 10.78L15.85 10.45H19.46L13.87 17.61M17.97 3.94L19.78 9.5H16.16M14.86 10.45L13.07 15.96L12 19.24L9.14 10.45M6.03 3.94L7.84 9.5H4.23M3.05 13.69C2.96 13.62 2.92 13.5 2.96 13.4L3.75 10.97L9.57 18.42M20.95 13.69L14.44 18.42L14.46 18.39L20.25 10.97L21.04 13.4C21.08 13.5 21.04 13.62 20.95 13.69"
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
export var StarHalfFull = function StarHalfFull(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"
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
export var ArrowDownBold = function ArrowDownBold(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M9,4H15V12H19.84L12,19.84L4.16,12H9V4Z"
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
export var Check = function Check(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
  }));
};
export var Eye = function Eye(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
  }));
};
export var EyeOff = function EyeOff(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"
  }));
};
export var Tenge = function Tenge(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M5,3H19V5H5V3M5,6H19V8H13V21H11V8H5V6Z"
  }));
};
export var CurrencyUsd = function CurrencyUsd(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z"
  }));
};
export var CreditCard = function CreditCard(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 11H4V8H20Z"
  }));
};
export var QrCode = function QrCode(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M3,11H5V13H3V11M11,5H13V9H11V5M9,11H13V15H11V13H9V11M15,11H17V13H19V11H21V13H19V15H21V19H19V21H17V19H13V21H11V17H15V15H17V13H15V11M19,19V15H17V19H19M15,3H21V9H15V3M17,5V7H19V5H17M3,3H9V9H3V3M5,5V7H7V5H5M3,15H9V21H3V15M5,17V19H7V17H5Z"
  }));
};
export var CalendarMonth = function CalendarMonth(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z"
  }));
};
export var CardAccountDetails = function CardAccountDetails(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M2,3H22C23.05,3 24,3.95 24,5V19C24,20.05 23.05,21 22,21H2C0.95,21 0,20.05 0,19V5C0,3.95 0.95,3 2,3M14,6V7H22V6H14M14,8V9H21.5L22,9V8H14M14,10V11H21V10H14M8,13.91C6,13.91 2,15 2,17V18H14V17C14,15 10,13.91 8,13.91M8,6A3,3 0 0,0 5,9A3,3 0 0,0 8,12A3,3 0 0,0 11,9A3,3 0 0,0 8,6Z"
  }));
};
export var Translate = function Translate(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z"
  }));
};
export var Fullscreen = function Fullscreen(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z"
  }));
};
export var FullscreenExit = function FullscreenExit(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z"
  }));
};
export var Alert = function Alert(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"
  }));
};
export var CalendarStar = function CalendarStar(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M19,20H5V9H19M16,2V4H8V2H6V4H5A2,2 0 0,0 3,6V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V6A2,2 0 0,0 19,4H18V2M10.88,13H7.27L10.19,15.11L9.08,18.56L12,16.43L14.92,18.56L13.8,15.12L16.72,13H13.12L12,9.56L10.88,13Z"
  }));
};
export var Shape = function Shape(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M11,13.5V21.5H3V13.5H11M12,2L17.5,11H6.5L12,2M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13Z"
  }));
};
export var FormatSize = function FormatSize(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M2 4V7H7V19H10V7H15V4H2M21 9H12V12H15V19H18V12H21V9Z"
  }));
};
export var BookOpen = function BookOpen(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M13,12H20V13.5H13M13,9.5H20V11H13M13,14.5H20V16H13M21,4H3A2,2 0 0,0 1,6V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V6A2,2 0 0,0 21,4M21,19H12V6H21"
  }));
};
export var CogOutline = function CogOutline(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z"
  }));
};
export var Target = function Target(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M11,2V4.07C7.38,4.53 4.53,7.38 4.07,11H2V13H4.07C4.53,16.62 7.38,19.47 11,19.93V22H13V19.93C16.62,19.47 19.47,16.62 19.93,13H22V11H19.93C19.47,7.38 16.62,4.53 13,4.07V2M11,6.08V8H13V6.09C15.5,6.5 17.5,8.5 17.92,11H16V13H17.91C17.5,15.5 15.5,17.5 13,17.92V16H11V17.91C8.5,17.5 6.5,15.5 6.08,13H8V11H6.09C6.5,8.5 8.5,6.5 11,6.08M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11Z"
  }));
};
export var MapMarker = function MapMarker(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
  }));
};
export var Map = function Map(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M15,19L9,16.89V5L15,7.11M20.5,3C20.44,3 20.39,3 20.34,3L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21C3.55,21 3.61,21 3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3Z"
  }));
};
export var LanguageJS = function LanguageJS(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M3,3H21V21H3V3M7.73,18.04C8.13,18.89 8.92,19.59 10.27,19.59C11.77,19.59 12.8,18.79 12.8,17.04V11.26H11.1V17C11.1,17.86 10.75,18.08 10.2,18.08C9.62,18.08 9.38,17.68 9.11,17.21L7.73,18.04M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86Z"
  }));
};
export var LanguageTS = function LanguageTS(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M3,3H21V21H3V3M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86M13,11.25H8V12.75H9.5V20H11.25V12.75H13V11.25Z"
  }));
};
export var LanguageGo = function LanguageGo(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M2.64,10.33L2.62,10.27L2.84,10L2.96,9.92H6.8L6.83,10L6.65,10.26L6.54,10.32L2.64,10.33M1.03,11.31L1,11.26L1.22,10.97L1.34,10.91H6.24L6.29,11L6.21,11.24L6.11,11.31H1.03M3.63,12.3L3.59,12.24L3.75,11.96L3.85,11.9H6L6.07,11.97L6.05,12.22L5.97,12.3H3.63M14.78,10.14L13,10.61C12.81,10.65 12.8,10.66 12.66,10.5C12.5,10.32 12.39,10.21 12.16,10.1C11.5,9.76 10.83,9.86 10.22,10.25C9.5,10.73 9.11,11.42 9.12,12.3C9.13,13.16 9.72,13.87 10.57,14C11.3,14.09 11.91,13.83 12.4,13.28L12.69,12.89H10.62C10.4,12.89 10.35,12.75 10.42,12.57L10.97,11.39C11,11.33 11.08,11.22 11.24,11.22H14.68C14.83,10.72 15.09,10.26 15.43,9.81C16.21,8.78 17.16,8.24 18.43,8C19.5,7.82 20.56,7.93 21.5,8.57C22.34,9.15 22.87,9.93 23,10.96C23.19,12.41 22.76,13.59 21.76,14.61C21.05,15.33 20.18,15.78 19.19,16L18.33,16.08C17.35,16.06 16.46,15.78 15.71,15.13C15.19,14.68 14.83,14.14 14.65,13.5C14.5,13.74 14.38,13.97 14.21,14.2C13.44,15.22 12.43,15.85 11.15,16C10.1,16.16 9.12,15.95 8.26,15.31C7.47,14.71 7,13.91 6.9,12.92C6.76,11.75 7.1,10.7 7.81,9.78C8.57,8.78 9.58,8.15 10.82,7.92C11.82,7.74 12.79,7.86 13.66,8.44C14.23,8.82 14.63,9.34 14.9,9.96C14.94,10.05 14.9,10.11 14.78,10.14M20.89,11.74L20.86,11.38C20.67,10.32 19.69,9.72 18.67,9.95C17.66,10.17 17,10.8 16.79,11.81C16.6,12.65 17,13.5 17.77,13.84C18.36,14.1 18.96,14.06 19.53,13.78C20.37,13.35 20.84,12.66 20.89,11.74Z"
  }));
};
export var LinkedIn = function LinkedIn(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"
  }));
};
export var Facebook = function Facebook(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
  }));
};
export var FacebookWorkplace = function FacebookWorkplace(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M19.69,16.12C19.42,16.43 18.95,16.92 18.19,16.92C17.13,16.92 16.78,16.15 16.46,15.34L14.86,11.41L13.26,15.34C13,16 12.7,16.92 11.53,16.92C10.36,16.92 10.07,16 9.79,15.34L7.11,8.72H9.37L11.53,14.17L13.14,10.2C13.39,9.57 13.69,8.62 14.86,8.62C16,8.62 16.32,9.57 16.58,10.2L18.33,14.5C19.22,13.14 19.6,11.5 19.38,9.89C19.16,8.28 18.37,6.8 17.14,5.73C15.92,4.66 14.34,4.06 12.72,4.06C11.03,4.05 9.39,4.58 8,5.56C6.66,6.55 5.64,7.94 5.12,9.54C4.6,11.14 4.6,12.87 5.12,14.47C5.64,16.07 6.66,17.46 8.03,18.44C9.4,19.43 11.04,19.95 12.72,19.94C13.45,19.94 14.17,19.84 14.87,19.64V21.75C14.16,21.91 13.44,22 12.72,22C10.61,22 8.54,21.34 6.82,20.1C5.1,18.86 3.82,17.11 3.17,15.1C2.5,13.09 2.5,10.92 3.16,8.9C3.82,6.89 5.1,5.14 6.82,3.9C8.53,2.66 10.6,2 12.72,2C17.56,2 21.5,5.94 21.5,10.79C21.5,12.71 20.86,14.59 19.69,16.12V16.12Z"
  }));
};
export var Instagram = function Instagram(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
  }));
};
export var WhatsApp = function WhatsApp(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z"
  }));
};
export var Telegram = function Telegram(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z"
  }));
};
export var Flag = function Flag(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z"
  }));
};
export var Plus = function Plus(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
  }));
};
export var AccountPlus = function AccountPlus(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z"
  }));
};
export var Share = function Share(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"
  }));
};
export var Bell = function Bell(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21"
  }));
};
export var Phone = function Phone(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
  }));
};
export var Wrench = function Wrench(props) {
  return React.createElement("svg", {
    width: props.size ? props.size : defaultSize,
    height: props.size ? props.size : defaultSize,
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: props.color ? props.color : defaultColor,
    d: "M22.7,19L13.6,9.9C14.5,7.6 14,4.9 12.1,3C10.1,1 7.1,0.6 4.7,1.7L9,6L6,9L1.6,4.7C0.4,7.1 0.9,10.1 2.9,12.1C4.8,14 7.5,14.5 9.8,13.6L18.9,22.7C19.3,23.1 19.9,23.1 20.3,22.7L22.6,20.4C23.1,20 23.1,19.3 22.7,19Z"
  }));
};