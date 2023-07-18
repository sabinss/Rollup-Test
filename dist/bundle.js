(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react'), require('react-dom/client')) :
  typeof define === 'function' && define.amd ? define(['react', 'react-dom/client'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.React, global.ReactDOM));
})(this, (function (React$1, ReactDOM) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

  function App() {
    return /*#__PURE__*/React.createElement("h1", null, "Hello World welcome to game app");
  }

  ReactDOM__default["default"].render( /*#__PURE__*/React__default["default"].createElement(App, null), document.getElementById('root'));

}));
