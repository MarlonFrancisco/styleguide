"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactVirtualized = require("react-virtualized");

var _ArrowDown = require("../icon/ArrowDown");

var _ArrowDown2 = _interopRequireDefault(_ArrowDown);

var _ArrowUp = require("../icon/ArrowUp");

var _ArrowUp2 = _interopRequireDefault(_ArrowUp);

var _OptionsDots = require("../icon/OptionsDots");

var _OptionsDots2 = _interopRequireDefault(_OptionsDots);

var _EmptyState = require("../EmptyState");

var _EmptyState2 = _interopRequireDefault(_EmptyState);

var _Spinner = require("../Spinner");

var _Spinner2 = _interopRequireDefault(_Spinner);

var _ActionMenu = require("../ActionMenu");

var _ActionMenu2 = _interopRequireDefault(_ActionMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ARROW_SIZE = 11;
var HEADER_HEIGHT = 36;
var DEFAULT_COLUMN_WIDTH = 200;
var LINE_ACTIONS_COLUMN_WIDTH = 70;
var NO_TITLE_COLUMN = ' ';
var SELECTED_ROW_BACKGROUND = '#dbe9fd';

var SimpleTable =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(SimpleTable, _Component);

  function SimpleTable(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "toggleSortType", function (key) {
      var _this$props$sort = _this.props.sort,
          sortOrder = _this$props$sort.sortOrder,
          sortedBy = _this$props$sort.sortedBy;

      if (sortedBy !== key || sortedBy === key && sortOrder !== 'ASC') {
        return {
          sortOrder: 'ASC',
          sortedBy: key
        };
      }

      return {
        sortOrder: 'DESC',
        sortedBy: key
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleRowHover", function (rowIndex) {
      var onRowClick = _this.props.onRowClick;
      var isLineActionsHovered = _this.state.isLineActionsHovered;

      if (onRowClick && !isLineActionsHovered) {
        _this.setState({
          hoverRowIndex: rowIndex
        });
      } else {
        _this.setState({
          hoverRowIndex: -1
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "calculateColWidth", function (schema, properties, index, fullWidth, fullWidthColWidth) {
      var col = schema.properties[properties[index]];
      return col.width ? col.width : fullWidth ? Math.max(col.minWidth || 100, fullWidthColWidth) : DEFAULT_COLUMN_WIDTH;
    });

    _defineProperty(_assertThisInitialized(_this), "addLineActionsToSchema", function (schema, lineActions) {
      return _extends({}, schema.properties, {
        // eslint-disable-next-line camelcase
        _VTEX_Table_Internal_lineActions: {
          title: NO_TITLE_COLUMN,
          width: LINE_ACTIONS_COLUMN_WIDTH,
          cellRenderer: function cellRenderer(_ref) {
            var rowData = _ref.rowData;
            return _react2.default.createElement(_ActionMenu2.default, {
              buttonProps: {
                variation: 'tertiary',
                icon: _react2.default.createElement(_OptionsDots2.default, null),
                onMouseEnter: function onMouseEnter() {
                  return _this.setState({
                    isLineActionsHovered: true
                  });
                },
                onMouseLeave: function onMouseLeave() {
                  return _this.setState({
                    isLineActionsHovered: false
                  });
                }
              },
              options: lineActions.map(function (action) {
                return _extends({}, action, {
                  label: action.label({
                    rowData: rowData
                  }),
                  onClick: function onClick() {
                    return action.onClick({
                      rowData: rowData
                    });
                  }
                });
              })
            });
          }
        }
      });
    });

    _this.state = {
      hoverRowIndex: -1
    };
    return _this;
  }

  var _proto = SimpleTable.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        schema = _this$props.schema,
        items = _this$props.items,
        fixFirstColumn = _this$props.fixFirstColumn,
        disableHeader = _this$props.disableHeader,
        density = _this$props.density,
        emptyStateLabel = _this$props.emptyStateLabel,
        emptyStateChildren = _this$props.emptyStateChildren,
        onRowClick = _this$props.onRowClick,
        containerHeight = _this$props.containerHeight,
        _this$props$sort2 = _this$props.sort,
        sortOrder = _this$props$sort2.sortOrder,
        sortedBy = _this$props$sort2.sortedBy,
        onSort = _this$props.onSort,
        updateTableKey = _this$props.updateTableKey,
        _rowHeight = _this$props.rowHeight,
        fullWidth = _this$props.fullWidth,
        lineActions = _this$props.lineActions,
        loading = _this$props.loading,
        selectedRowsIndexes = _this$props.selectedRowsIndexes;
    var hoverRowIndex = this.state.hoverRowIndex;
    if (lineActions) schema.properties = this.addLineActionsToSchema(schema, lineActions);
    var properties = Object.keys(schema.properties);
    var tableKey = "vtex-table--" + updateTableKey + "--" + density;
    return _react2.default.createElement("div", {
      className: "vh-100 w-100 dt",
      style: {
        height: containerHeight
      }
    }, loading ? _react2.default.createElement("div", {
      className: "dtc v-mid tc",
      style: {
        height: containerHeight - HEADER_HEIGHT
      }
    }, _react2.default.createElement(_Spinner2.default, null)) : _react2.default.createElement("div", null, _react2.default.createElement(_reactVirtualized.AutoSizer, {
      key: tableKey
    }, function (_ref2) {
      var width = _ref2.width;
      var colsWidth = Object.keys(schema.properties).reduce(function (acc, curr) {
        var col = schema.properties[curr];
        return acc + (col.width ? col.width : 0);
      }, 0);
      var colsWithoutWidth = Object.keys(schema.properties).filter(function (curr) {
        var col = schema.properties[curr];
        return !col.width;
      });
      var fullWidthColWidth = (width - colsWidth) / colsWithoutWidth.length;
      return _react2.default.createElement(_reactVirtualized.MultiGrid, {
        height: items.length === 0 ? HEADER_HEIGHT : containerHeight,
        width: width,
        tabIndex: null,
        fixedRowCount: disableHeader ? 0 : 1,
        rowCount: disableHeader ? items.length : items.length + 1,
        rowHeight: function rowHeight(_ref3) {
          var index = _ref3.index;
          return index === 0 && !disableHeader ? HEADER_HEIGHT : _rowHeight;
        },
        enableFixedRowScroll: !disableHeader,
        hideTopRightGridScrollbar: !disableHeader,
        overscanRowCount: 0,
        styleTopRightGrid: fixFirstColumn ? {
          overflow: 'hidden'
        } : {},
        styleTopLeftGrid: fixFirstColumn ? {
          overflow: 'hidden'
        } : {},
        fixedColumnCount: fixFirstColumn ? 1 : 0,
        columnCount: properties.length,
        columnWidth: function columnWidth(_ref4) {
          var index = _ref4.index;
          return _this2.calculateColWidth(schema, properties, index, fullWidth, fullWidthColWidth);
        },
        enableFixedColumnScroll: true,
        overscanColumnCount: 0,
        cellRenderer: function cellRenderer(_ref5) {
          var columnIndex = _ref5.columnIndex,
              key = _ref5.key,
              rowIndex = _ref5.rowIndex,
              style = _ref5.style;
          var property = properties[columnIndex];

          if (!disableHeader && rowIndex === 0) {
            // Header row
            var title = schema.properties[property].title || property;
            var headerRight = schema.properties[property].headerRight || false;
            var headerRenderer = schema.properties[property].headerRenderer;
            var arrowIsDown = sortOrder === 'ASC' && sortedBy === property;
            var arrowIsUp = sortOrder === 'DESC' && sortedBy === property;
            return _react2.default.createElement("div", {
              key: key,
              style: _extends({}, style, {
                height: HEADER_HEIGHT
              }),
              className: "flex items-center w-100 h-100 c-muted-2 f6 truncate ph4 " + (columnIndex === 0 && fixFirstColumn ? 'br' : '') + " bt bb b--muted-4 overflow-x-hidden " + (headerRight ? 'tr' : 'tl')
            }, schema.properties[property].sortable ? _react2.default.createElement("div", {
              className: "w-100 pointer c-muted-1 b t-small",
              onClick: function onClick() {
                onSort(_this2.toggleSortType(property));
              }
            }, !headerRight && title, _react2.default.createElement("div", {
              className: "inline-flex " + (headerRight ? 'pr2' : 'pl3')
            }, arrowIsDown ? _react2.default.createElement(_ArrowDown2.default, {
              size: ARROW_SIZE
            }) : arrowIsUp ? _react2.default.createElement(_ArrowUp2.default, {
              size: ARROW_SIZE
            }) : null), headerRight && title) : columnIndex === 0 && fixFirstColumn ? _react2.default.createElement("div", {
              className: "w-100"
            }, title) : headerRenderer ? headerRenderer({
              columnIndex: columnIndex,
              key: key,
              rowIndex: rowIndex,
              style: style,
              title: title
            }) : _react2.default.createElement("span", {
              className: "w-100"
            }, title));
          }

          var cellRenderer = schema.properties[property].cellRenderer;
          var rowData = items[disableHeader ? rowIndex : rowIndex - 1];
          var cellData = rowData[property];
          return _react2.default.createElement("div", {
            key: key,
            style: _extends({}, style, {
              height: _rowHeight,
              width: _this2.calculateColWidth(schema, properties, columnIndex, fullWidth, fullWidthColWidth),
              backgroundColor: selectedRowsIndexes.includes(rowIndex - 1) ? SELECTED_ROW_BACKGROUND : ''
            }),
            className: "flex items-center w-100 h-100 ph4 bb\n                            b--muted-4 truncate " + (disableHeader && rowIndex === 0 ? 'bt' : '') + " " + (onRowClick && rowIndex === hoverRowIndex ? 'pointer bg-near-white c-link' : '') + " " + (columnIndex === 0 && fixFirstColumn ? 'br' : ''),
            onClick: onRowClick && property !== '_VTEX_Table_Internal_lineActions' ? function (event) {
              return onRowClick({
                event: event,
                index: rowIndex,
                rowData: rowData
              });
            } : null,
            onMouseEnter: onRowClick ? function () {
              return _this2.handleRowHover(rowIndex);
            } : null,
            onMouseLeave: onRowClick ? function () {
              return _this2.handleRowHover(-1);
            } : null
          }, cellRenderer ? cellRenderer({
            cellData: cellData,
            rowData: rowData
          }) : cellData);
        }
      });
    }), items.length === 0 && _react2.default.createElement("div", {
      style: {
        marginTop: HEADER_HEIGHT
      }
    }, _react2.default.createElement(_EmptyState2.default, {
      title: emptyStateLabel
    }, emptyStateChildren))));
  };

  return SimpleTable;
}(_react.Component);

SimpleTable.defaultProps = {
  indexColumnLabel: null,
  fixFirstColumn: false,
  items: [],
  disableHeader: false,
  sort: {
    sortOrder: null,
    sortedBy: null
  },
  fullWidth: false,
  selectedRowsIndexes: []
};
SimpleTable.propTypes = {
  items: _propTypes2.default.array.isRequired,
  schema: _propTypes2.default.object.isRequired,
  indexColumnLabel: _propTypes2.default.string,
  fixFirstColumn: _propTypes2.default.bool,
  density: _propTypes2.default.string,
  disableHeader: _propTypes2.default.bool,
  onRowClick: _propTypes2.default.func,
  emptyStateLabel: _propTypes2.default.string,
  emptyStateChildren: _propTypes2.default.node,
  sort: _propTypes2.default.shape({
    sortOrder: _propTypes2.default.oneOf(['ASC', 'DESC']),
    sortedBy: _propTypes2.default.string
  }),
  onSort: _propTypes2.default.func,
  updateTableKey: _propTypes2.default.string,
  containerHeight: _propTypes2.default.number,
  rowHeight: _propTypes2.default.number.isRequired,
  fullWidth: _propTypes2.default.bool,
  lineActions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.func,
    isDangerous: _propTypes2.default.bool,
    onClick: _propTypes2.default.func
  })),
  loading: _propTypes2.default.bool,
  selectedRowsIndexes: _propTypes2.default.array
};
exports.default = SimpleTable;