'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSnapshot = require('react-snapshot');

require('./index.css');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _registerServiceWorker = require('./registerServiceWorker');

var _registerServiceWorker2 = _interopRequireDefault(_registerServiceWorker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactSnapshot.render)(_react2.default.createElement(_App2.default, null), document.getElementById('root'));
(0, _registerServiceWorker2.default)();