"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _context = require("../context");

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useTableContext = function useTableContext() {
  var context = (0, _react.useContext)(_context2.default);

  if (!context) {
    throw new Error('Ooops! Table composites cannot be used outside of it');
  }

  return context;
};

exports.default = useTableContext;