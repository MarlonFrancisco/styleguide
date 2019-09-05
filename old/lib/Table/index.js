"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduce = require("lodash/reduce");

var _reduce2 = _interopRequireDefault(_reduce);

var _map = require("lodash/map");

var _map2 = _interopRequireDefault(_map);

var _Box = require("../Box");

var _Box2 = _interopRequireDefault(_Box);

var _Pagination = require("../Pagination");

var _Pagination2 = _interopRequireDefault(_Pagination);

var _EmptyState = require("../EmptyState");

var _EmptyState2 = _interopRequireDefault(_EmptyState);

var _FilterBar = require("../FilterBar");

var _FilterBar2 = _interopRequireDefault(_FilterBar);

var _SimpleTable = require("./SimpleTable");

var _SimpleTable2 = _interopRequireDefault(_SimpleTable);

var _Toolbar = require("./Toolbar");

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _CheckboxContainer = require("./CheckboxContainer");

var _CheckboxContainer2 = _interopRequireDefault(_CheckboxContainer);

var _Totalizer = require("../Totalizer");

var _Totalizer2 = _interopRequireDefault(_Totalizer);

var _BulkActions = require("./BulkActions");

var _BulkActions2 = _interopRequireDefault(_BulkActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TABLE_HEADER_HEIGHT = 36;
var EMPTY_STATE_SIZE_IN_ROWS = 5;
var DEFAULT_SCROLLBAR_WIDTH = 17;

var Table =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Table, _PureComponent);

  function Table(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "getInitialHiddenFieldsFromSchema", function (schema) {
      var hiddenFields = [];
      Object.keys(schema.properties).forEach(function (key) {
        if (schema.properties[key].hidden) {
          hiddenFields.push(key);
        }
      });
      return hiddenFields;
    });

    _defineProperty(_assertThisInitialized(_this), "getRowHeight", function (density) {
      switch (density) {
        case 'low':
          return 76;

        case 'medium':
          return 48;

        case 'high':
          return 32;

        default:
          return 45;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTableRowHeight", function (density) {
      var tableRowHeight = _this.state.tableRowHeight;

      var newHeight = _this.getRowHeight(density);

      if (tableRowHeight !== newHeight) {
        _this.setState({
          tableRowHeight: newHeight,
          selectedDensity: density
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleToggleColumn", function (key) {
      var hiddenFields = _this.state.hiddenFields;
      var newFieldsArray = hiddenFields.slice();
      var index = hiddenFields.indexOf(key);
      index === -1 ? newFieldsArray.push(key) : newFieldsArray.splice(index, 1);

      _this.setState({
        hiddenFields: newFieldsArray
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleShowAllColumns", function () {
      _this.setState({
        hiddenFields: []
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleHideAllColumns", function () {
      _this.setState({
        hiddenFields: Object.keys(_this.props.schema.properties)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getScrollbarWidth", function () {
      if (!window || !document || !document.documentElement) return DEFAULT_SCROLLBAR_WIDTH;
      var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      return isNaN(scrollbarWidth) ? DEFAULT_SCROLLBAR_WIDTH : scrollbarWidth;
    });

    _defineProperty(_assertThisInitialized(_this), "calculateTableHeight", function (totalItems) {
      var tableRowHeight = _this.state.tableRowHeight;
      var multiplicator = totalItems !== 0 ? totalItems : EMPTY_STATE_SIZE_IN_ROWS;
      return TABLE_HEADER_HEIGHT + tableRowHeight * multiplicator + _this.getScrollbarWidth();
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelectionChange", function () {
      if (_this.props.bulkActions && _this.props.bulkActions.onChange) {
        var selectedParameters = _this.state.allLinesSelected ? {
          allLinesSelected: true
        } : {
          selectedRows: _this.state.selectedRows
        };

        _this.props.bulkActions.onChange(selectedParameters);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelectAllLines", function () {
      var selectedRows = _this.props.items;

      _this.setState({
        selectedRows: selectedRows,
        allLinesSelected: true
      }, _this.handleSelectionChange);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelectAllVisibleLines", function () {
      var selectedRows = _this.state.selectedRows.slice(0);

      var items = _this.props.items;
      var itemsLength = items.length;

      if (selectedRows.length <= itemsLength && selectedRows.length !== 0) {
        _this.handleDeselectAllLines();
      } else {
        _this.setState({
          selectedRows: items
        }, _this.handleSelectionChange);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelectLine", function (rowData) {
      var selectedRows = _this.state.selectedRows.slice(0);

      var id = rowData.id;

      if (selectedRows.some(function (el) {
        return el.id === id;
      })) {
        var filteredRows = selectedRows.filter(function (row) {
          return row.id !== id;
        });

        _this.setState({
          selectedRows: filteredRows
        }, _this.handleSelectionChange);
      } else {
        selectedRows.push(_extends({}, rowData));

        _this.setState({
          selectedRows: selectedRows
        }, _this.handleSelectionChange);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeselectAllLines", function () {
      _this.setState({
        selectedRows: [],
        allLinesSelected: false
      }, _this.handleSelectionChange);
    });

    _this.state = {
      hiddenFields: _this.getInitialHiddenFieldsFromSchema(props.schema),
      tableRowHeight: _this.getRowHeight(props.density),
      selectedDensity: props.density,
      allChecked: false,
      selectedRows: _this.props.bulkActions.selectedRows || [],
      allLinesSelected: false
    };
    return _this;
  }

  var _proto = Table.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var bulkActions = this.props.bulkActions;
    var selectedRows = this.state.selectedRows;

    if (bulkActions && bulkActions.selectedRows && bulkActions.selectedRows !== selectedRows) {
      this.setState({
        selectedRows: bulkActions.selectedRows
      });
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        items = _this$props.items,
        schema = _this$props.schema,
        disableHeader = _this$props.disableHeader,
        emptyStateLabel = _this$props.emptyStateLabel,
        emptyStateChildren = _this$props.emptyStateChildren,
        fixFirstColumn = _this$props.fixFirstColumn,
        onRowClick = _this$props.onRowClick,
        sort = _this$props.sort,
        onSort = _this$props.onSort,
        updateTableKey = _this$props.updateTableKey,
        containerHeight = _this$props.containerHeight,
        toolbar = _this$props.toolbar,
        pagination = _this$props.pagination,
        fullWidth = _this$props.fullWidth,
        lineActions = _this$props.lineActions,
        loading = _this$props.loading,
        bulkActions = _this$props.bulkActions,
        totalizers = _this$props.totalizers,
        filters = _this$props.filters;
    var _this$state = this.state,
        hiddenFields = _this$state.hiddenFields,
        tableRowHeight = _this$state.tableRowHeight,
        selectedDensity = _this$state.selectedDensity,
        selectedRows = _this$state.selectedRows,
        allLinesSelected = _this$state.allLinesSelected;
    var hasPrimaryBulkAction = bulkActions && bulkActions.main && typeof bulkActions.main.handleCallback === 'function';
    var hasSecondaryBulkActions = bulkActions.others && bulkActions.others.length > 0;
    var hasBulkActions = hasPrimaryBulkAction || hasSecondaryBulkActions;

    if (hasBulkActions) {
      schema.properties = _extends({
        bulk: {
          width: 40,
          headerRenderer: function headerRenderer() {
            var selectedRows = _this2.state.selectedRows;
            var selectedRowsLength = selectedRows.length;
            var itemsLength = _this2.props.items.length;
            var isChecked = selectedRowsLength === itemsLength;
            var isPartial = selectedRowsLength > 0 && selectedRowsLength < itemsLength;
            return _react2.default.createElement(_CheckboxContainer2.default, {
              checked: isChecked,
              onClick: _this2.handleSelectAllVisibleLines,
              id: "all",
              partial: isPartial
            });
          },
          cellRenderer: function cellRenderer(_ref) {
            var rowData = _ref.rowData;
            return _react2.default.createElement(_CheckboxContainer2.default, {
              checked: _this2.state.selectedRows.some(function (row) {
                return row.id === rowData.id;
              }),
              onClick: function onClick() {
                return _this2.handleSelectLine(rowData);
              },
              id: rowData.id,
              disabled: _this2.state.allLinesSelected
            });
          }
        }
      }, schema.properties);
      items.map(function (item, i) {
        return item.id = i;
      });
    }

    var properties = Object.keys(schema.properties);
    var emptyState = !!(properties.length === 0 || properties.length === hiddenFields.length);
    var displayProperties = (0, _reduce2.default)(schema.properties, function (acc, value, key) {
      var _extends2;

      if (hiddenFields.includes && hiddenFields.includes(key)) {
        return acc;
      }

      return _extends({}, acc, (_extends2 = {}, _extends2[key] = value, _extends2));
    }, {});

    var displaySchema = _extends({}, schema, {
      properties: displayProperties // if pagination and bulk actions features are active at the same time
      // when paginating, bulk actions active lines should be deselected

    });

    var paginationClone = pagination ? Object.assign({}, pagination) : null;

    if (paginationClone && hasBulkActions) {
      paginationClone.onNextClick = function () {
        _this2.handleDeselectAllLines();

        pagination.onNextClick();
      };

      paginationClone.onPrevClick = function () {
        _this2.handleDeselectAllLines();

        pagination.onPrevClick();
      };
    }

    return _react2.default.createElement("div", {
      className: "vtex-table__container"
    }, toolbar && _react2.default.createElement(_Toolbar2.default, {
      loading: loading,
      toolbar: toolbar,
      hiddenFields: hiddenFields,
      onToggleColumn: this.handleToggleColumn,
      onDeselectAllLines: this.handleDeselectAllLines,
      onHideAllColumns: this.handleHideAllColumns,
      onShowAllColumns: this.handleShowAllColumns,
      onToggleDensity: this.handleTableRowHeight,
      selectedDensity: selectedDensity,
      schema: schema,
      actions: toolbar
    }), filters && _react2.default.createElement("div", {
      className: "mb5"
    }, _react2.default.createElement(_FilterBar2.default, filters)), totalizers && totalizers.length > 0 && _react2.default.createElement(_Totalizer2.default, {
      items: totalizers
    }), _react2.default.createElement(_BulkActions2.default, {
      hasPrimaryBulkAction: hasPrimaryBulkAction,
      hasSecondaryBulkActions: hasSecondaryBulkActions,
      selectedRows: selectedRows,
      bulkActions: bulkActions,
      allLinesSelected: allLinesSelected,
      onSelectAllLines: this.handleSelectAllLines,
      onDeselectAllLines: this.handleDeselectAllLines
    }), emptyState ? _react2.default.createElement(_Box2.default, null, _react2.default.createElement(_EmptyState2.default, {
      title: emptyStateLabel
    }, emptyStateChildren)) : _react2.default.createElement(_SimpleTable2.default, {
      fullWidth: fullWidth,
      items: items,
      schema: displaySchema,
      fixFirstColumn: fixFirstColumn,
      rowHeight: tableRowHeight,
      disableHeader: disableHeader,
      emptyStateLabel: emptyStateLabel,
      emptyStateChildren: emptyStateChildren,
      onRowClick: onRowClick,
      sort: sort,
      onSort: onSort,
      key: hiddenFields.toString(),
      updateTableKey: updateTableKey,
      lineActions: lineActions,
      loading: loading,
      containerHeight: containerHeight || this.calculateTableHeight(items.length),
      selectedRowsIndexes: (0, _map2.default)(selectedRows, 'id'),
      density: selectedDensity
    }), !loading && paginationClone && _react2.default.createElement(_Pagination2.default, paginationClone));
  };

  return Table;
}(_react.PureComponent);

Table.defaultProps = {
  loading: false,
  density: 'medium',
  fixFirstColumn: false,
  toolbar: null,
  emptyStateLabel: 'Nothing to show.',
  fullWidth: false,
  bulkActions: {},
  totalizers: []
};
Table.propTypes = {
  /** Array of objects with data */
  items: _propTypes2.default.array.isRequired,

  /** JSON defining the data model schema for the items (More info about it after the examples) */
  schema: _propTypes2.default.object.isRequired,

  /** Do not render the table header (only the rows) */
  disableHeader: _propTypes2.default.bool,

  /** Fix first column so only the following ones scroll horizontaly */
  fixFirstColumn: _propTypes2.default.bool,

  /** Callback invoked when a user clicks on a table row. ({ event: Event, index: number, rowData: any }): void */
  onRowClick: _propTypes2.default.func,

  /** Sort order and which property (key in schema) is table data sorted by. */
  sort: _propTypes2.default.shape({
    sortOrder: _propTypes2.default.oneOf(['ASC', 'DESC']),
    sortedBy: _propTypes2.default.string
  }),

  /** Callback to handle sort ({ sortOrder, sortedBy }) : object */
  onSort: _propTypes2.default.func,

  /** Forces table re-render when changed */
  updateTableKey: _propTypes2.default.string,

  /** In case you need precise control of table container height (number in pixels)  */
  containerHeight: _propTypes2.default.number,

  /** Row info visual density  */
  density: _propTypes2.default.oneOf(['low', 'medium', 'high']),

  /** Label for emptystate  */
  emptyStateLabel: _propTypes2.default.string,

  /** Children for emptystate  */
  emptyStateChildren: _propTypes2.default.node,

  /** Full width property  */
  fullWidth: _propTypes2.default.bool,

  /** Line actions column */
  lineActions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    /** Function that returns a string for the action label */
    label: _propTypes2.default.func,

    /** Mark whether the action performs a dangerous option or not */
    isDangerous: _propTypes2.default.bool,

    /** Handles the callback function of the action */
    onClick: _propTypes2.default.func
  })),

  /** Controls the table loading state */
  loading: _propTypes2.default.bool,

  /** Toolbar (search and actions) */
  toolbar: _propTypes2.default.shape({
    inputSearch: _propTypes2.default.shape({
      onSubmit: _propTypes2.default.func
    }),
    density: _propTypes2.default.shape({
      buttonLabel: _propTypes2.default.string,
      lowOptionLabel: _propTypes2.default.string,
      mediumOptionLabel: _propTypes2.default.string,
      highOptionLabel: _propTypes2.default.string,
      alignMenu: _propTypes2.default.oneOf(['right', 'left']),
      handleCallback: _propTypes2.default.func
    }),
    fields: _propTypes2.default.shape({
      label: _propTypes2.default.string,
      showAllLabel: _propTypes2.default.string,
      hideAllLabel: _propTypes2.default.string,
      alignMenu: _propTypes2.default.oneOf(['right', 'left'])
    }),
    download: _propTypes2.default.shape({
      label: _propTypes2.default.string,
      handleCallback: _propTypes2.default.func,
      disabled: _propTypes2.default.bool
    }),
    upload: _propTypes2.default.shape({
      label: _propTypes2.default.string,
      handleCallback: _propTypes2.default.func,
      disabled: _propTypes2.default.bool
    }),
    extraActions: _propTypes2.default.shape({
      label: _propTypes2.default.string,
      actions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        label: _propTypes2.default.string,
        handleCallback: _propTypes2.default.func
      })),
      alignMenu: _propTypes2.default.oneOf(['right', 'left'])
    }),
    newLine: _propTypes2.default.shape({
      label: _propTypes2.default.string.isRequired,
      handleCallback: _propTypes2.default.func.isRequired,
      disabled: _propTypes2.default.bool
    })
  }),
  pagination: _propTypes2.default.shape({
    onNextClick: _propTypes2.default.func,
    onPrevClick: _propTypes2.default.func,
    currentItemFrom: _propTypes2.default.number,
    currentItemTo: _propTypes2.default.number,
    textOf: _propTypes2.default.node,
    totalItems: _propTypes2.default.number
  }),
  bulkActions: _propTypes2.default.shape({
    texts: _propTypes2.default.shape({
      secondaryActionsLabel: _propTypes2.default.string.isRequired,
      rowsSelected: _propTypes2.default.func.isRequired,
      selectAll: _propTypes2.default.string.isRequired,
      allRowsSelected: _propTypes2.default.func.isRequired
    }),
    totalItems: _propTypes2.default.number,
    onChange: _propTypes2.default.func,
    selectedRows: _propTypes2.default.array,
    main: _propTypes2.default.shape({
      label: _propTypes2.default.string.isRequired,
      handleCallback: _propTypes2.default.func.isRequired
    }),
    others: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      label: _propTypes2.default.string.isRequired,
      handleCallback: _propTypes2.default.func.isRequired
    }))
  }),

  /** Totalizers property  */
  totalizers: _propTypes2.default.array,

  /** Filters property  */
  filters: _propTypes2.default.shape(_extends({}, _FilterBar2.default.propTypes))
};
exports.default = Table;