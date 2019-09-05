"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateTableHeight = exports.getScrollbarWidth = undefined;

var _constants = require("./constants");

var getScrollbarWidth = exports.getScrollbarWidth = function getScrollbarWidth() {
  if (!window || !document || !document.documentElement) return _constants.DEFAULT_SCROLLBAR_WIDTH;
  var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  return isNaN(scrollbarWidth) ? _constants.DEFAULT_SCROLLBAR_WIDTH : scrollbarWidth;
};

var calculateTableHeight = exports.calculateTableHeight = function calculateTableHeight(tableRowHeight, totalItems) {
  var multiplicator = totalItems !== 0 ? totalItems : _constants.EMPTY_STATE_SIZE_IN_ROWS;
  return _constants.TABLE_HEADER_HEIGHT + tableRowHeight * multiplicator + getScrollbarWidth();
};