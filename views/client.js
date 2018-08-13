'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _redux2 = _interopRequireDefault(_redux);

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = window.__STATE__;
delete window.__STATE__;
var store = (0, _redux2.default)();
(0, _reactDom.hydrate)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_app2.default, null)
), document.querySelector('#app'));