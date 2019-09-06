"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /** Content of the box */
  children: _propTypes.default.node.isRequired,

  /** Use the full size of the box. */
  noPadding: _propTypes.default.bool
};

var Box = function Box(_ref) {
  var children = _ref.children,
      noPadding = _ref.noPadding;
  var padding = noPadding ? '' : 'pa7';
  return _react.default.createElement("div", {
    className: "styleguide__box bg-base t-body c-on-base " + padding + " br3 b--muted-4 bt bb bl br"
  }, children);
};

Box.propTypes = propTypes;
var _default = Box;
exports.default = _default;