"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _util = require("../util");

var _useDensity2 = require("./useDensity");

var _useDensity3 = _interopRequireDefault(_useDensity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useTableState = function useTableState(_ref) {
  var columns = _ref.columns,
      items = _ref.items,
      density = _ref.density;

  var _useDensity = (0, _useDensity3.default)(density),
      selectedDensity = _useDensity.selectedDensity,
      setSelectedDensity = _useDensity.setSelectedDensity,
      rowHeight = _useDensity.rowHeight;

  var isEmpty = (0, _react.useMemo)(function () {
    return items.length === 0 || Object.keys(columns).length === 0;
  }, [columns, items]);
  var tableHeight = (0, _react.useMemo)(function () {
    return (0, _util.calculateTableHeight)(rowHeight, items.length);
  }, [items, rowHeight]);
  return {
    columns: columns,
    items: items,
    isEmpty: isEmpty,
    tableHeight: tableHeight,
    rowHeight: rowHeight,
    selectedDensity: selectedDensity,
    setSelectedDensity: setSelectedDensity
  };
};

exports.default = useTableState;