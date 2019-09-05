"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require("./SimpleTable/index");

var _index2 = _interopRequireDefault(_index);

var _context = require("./context");

var _index3 = require("./Toolbar/index");

var _index4 = _interopRequireDefault(_index3);

var _constants = require("./constants");

var _Pagination = require("./Pagination");

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  nestedRows: _propTypes2.default.bool,
  state: _propTypes2.default.shape({
    schema: _propTypes2.default.shape({
      columns: _propTypes2.default.objectOf(_propTypes2.default.shape({
        title: _propTypes2.default.string.isRequired,
        cellRender: _propTypes2.default.func
      })).isRequired,
      rowRender: _propTypes2.default.func
    }),
    items: _propTypes2.default.arrayOf(_propTypes2.default.object),
    isEmpty: _propTypes2.default.bool,
    tableHeight: _propTypes2.default.number,
    rowHeight: _propTypes2.default.number,
    selectedDensity: _propTypes2.default.oneOf(_constants.DENSITY_OPTIONS),
    setSelectedDensity: _propTypes2.default.func
  })
};

var Table = function Table(_ref) {
  var children = _ref.children,
      state = _ref.state,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "state"]);

  return _react2.default.createElement(_context.TableProvider, {
    value: _extends({}, state, {}, props)
  }, _react2.default.createElement("div", {
    id: _constants.NAMESPACES.CONTAINER,
    className: "flex flex-column"
  }, children, _react2.default.createElement(_index2.default, null)));
};

Table.Toolbar = _index4.default;
Table.Pagination = _Pagination2.default;
Table.propTypes = propTypes;
exports.default = Table;