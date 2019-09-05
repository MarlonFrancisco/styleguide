"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _context = require("./context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = function Item(_ref) {
  var isSelected = _ref.isSelected,
      handleCallback = _ref.handleCallback,
      closeMenuOnClick = _ref.closeMenuOnClick,
      children = _ref.children;

  var _useMenuContext = (0, _context.useMenuContext)(),
      setBoxVisible = _useMenuContext.setBoxVisible;

  var handleClick = function handleClick() {
    closeMenuOnClick && setBoxVisible(false);
    handleCallback();
  };

  return _react2.default.createElement("div", {
    className: "flex justify-between ph6 pv3 " + (isSelected ? 'b--emphasis' : 'b--transparent') + " pointer hover-bg-muted-5 bl bw1",
    onClick: handleClick
  }, _react2.default.createElement("span", {
    className: "w-100 flex justify-between " + (isSelected ? 'fw5' : '')
  }, children));
};

exports.default = Item;