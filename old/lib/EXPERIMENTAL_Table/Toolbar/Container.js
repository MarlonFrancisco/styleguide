"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(_ref) {
  var justify = _ref.justify,
      children = _ref.children;
  return _react2.default.createElement("div", {
    id: _constants.NAMESPACES.TOOLBAR.CONTAINER,
    className: "order-0 mb5 flex flex-row w-100 justify-" + justify
  }, children);
};

Container.defaultProps = {
  justify: _constants.JUSTIFY_OPTIONS.END
};
exports.default = Container;