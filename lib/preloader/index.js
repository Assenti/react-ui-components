import React from 'react';

var Preloader = function Preloader(props) {
  return React.createElement(React.Fragment, null, props.visible ? React.createElement("div", {
    className: "rui-preloader",
    style: {
      background: props.backgroundColor ? props.backgroundColor : ''
    }
  }, props.preloader ? props.preloader : React.createElement("div", {
    className: "lds-ellipsis"
  }, React.createElement("div", {
    style: {
      backgroundColor: props.color ? props.color : '#42a5f5'
    }
  }), React.createElement("div", {
    style: {
      backgroundColor: props.color ? props.color : '#42a5f5'
    }
  }), React.createElement("div", {
    style: {
      backgroundColor: props.color ? props.color : '#42a5f5'
    }
  }), React.createElement("div", {
    style: {
      backgroundColor: props.color ? props.color : '#42a5f5'
    }
  }))) : '');
};

export default Preloader;