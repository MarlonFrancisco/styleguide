"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Cell = require("./Cell");

var _Cell2 = _interopRequireDefault(_Cell);

var _useTableContext3 = require("../hooks/useTableContext");

var _useTableContext4 = _interopRequireDefault(_useTableContext3);

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Container of each table row
 */
var RowContainer = function RowContainer(_ref) {
  var id = _ref.id,
      children = _ref.children;

  var _useTableContext = (0, _useTableContext4.default)(),
      rowHeight = _useTableContext.rowHeight;

  return _react2.default.createElement("div", {
    id: id,
    style: {
      height: rowHeight
    },
    className: "dt-row w-100 h-100 ph4 truncate overflow-x-hidden"
  }, children);
};
/**
 * Row of the Table (suports nesting)
 * 🤓Be aware that the subRows are rendered recursivelly
 */


var Row = function Row(_ref2) {
  var data = _ref2.data,
      index = _ref2.index,
      depth = _ref2.depth;

  var _useTableContext2 = (0, _useTableContext4.default)(),
      columns = _useTableContext2.columns,
      nestedRows = _useTableContext2.nestedRows;

  var _useState = (0, _react.useState)(false),
      collapsed = _useState[0],
      setCollapsed = _useState[1];

  var children = data.children,
      rowData = _objectWithoutPropertiesLoose(data, ["children"]);

  var rowKey = "row-" + index + "-" + depth;
  /**
   * Render subRows recursivelly increasing the depth
   */

  var subRows = nestedRows && children && children.map(function (data, index) {
    return _react2.default.createElement(Row, {
      key: rowKey + "__child-" + index,
      depth: depth + 1,
      index: index,
      data: data
    });
  });
  /** Calculate the amount of indentation of the first column */

  var prefixWidth = depth * _constants.NESTED_ROW_PREFIX_WIDTH;
  /**
   * Renders the entire row
   * @param arrow if has arrow on first cell, or not
   */

  var renderCells = function renderCells(arrow) {
    return _react2.default.createElement(RowContainer, {
      id: _constants.NAMESPACES.ROW + "-" + index + "-" + depth,
      key: rowKey
    }, columns.map(function (column, cellIndex) {
      var cellRender = column.cellRender,
          width = column.width;
      var cellData = rowData[column.id];
      var content = cellRender ? cellRender({
        cellData: cellData,
        rowData: rowData
      }) : cellData;
      return _react2.default.createElement(_Cell2.default, {
        id: index + "-" + cellIndex + "-" + depth,
        key: "cel-" + index + "-" + cellIndex + "-" + depth,
        width: width
      }, nestedRows && cellIndex === 0 && _react2.default.createElement(_Cell2.default.Prefix, {
        width: prefixWidth
      }, arrow && _react2.default.createElement(_Cell2.default.Prefix.Arrow, {
        active: collapsed,
        onClick: function onClick() {
          return setCollapsed(!collapsed);
        }
      })), content);
    }));
  };

  return subRows ?
  /**
   * Recursive step
   * Render the Node itself and its subRows
   */
  _react2.default.createElement(_react2.default.Fragment, null, renderCells(true), collapsed && subRows) :
  /**
   * Base case
   * Just render a leaf (Row that does not have children)
   */
  renderCells();
};

Row.defaultProps = {
  depth: 1
};
exports.default = Row;