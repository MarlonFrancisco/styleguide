"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRowHeight = undefined;

var _react = require("react");

var _constants = require("../constants");

var getRowHeight = exports.getRowHeight = function getRowHeight(density) {
  switch (density) {
    case _constants.TABLE_DENSITIES.LOW:
      return 76;

    case _constants.TABLE_DENSITIES.MEDIUM:
      return 48;

    case _constants.TABLE_DENSITIES.HIGH:
      return 32;

    default:
      return 45;
  }
};

var useDensity = function useDensity(density) {
  var _useState = (0, _react.useState)(density),
      selectedDensity = _useState[0],
      setSelectedDensity = _useState[1];

  var rowHeight = getRowHeight(selectedDensity);
  return {
    selectedDensity: selectedDensity,
    setSelectedDensity: setSelectedDensity,
    rowHeight: rowHeight
  };
};

exports.default = useDensity;