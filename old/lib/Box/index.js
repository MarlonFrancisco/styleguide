"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /** Content of the box */
  children: _propTypes2.default.node.isRequired,

  /** Use the full size of the box. */
  noPadding: _propTypes2.default.bool
};

var Box = function Box(_ref) {
  var children = _ref.children,
      noPadding = _ref.noPadding;
  var padding = noPadding ? '' : 'pa7';
  return _react2.default.createElement("div", {
    className: "styleguide__box bg-base t-body c-on-base " + padding + " br3 b--muted-4 bt bb bl br"
  }, children);
};

Box.propTypes = propTypes;
exports.default = Box;