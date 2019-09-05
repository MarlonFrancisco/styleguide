"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require("../Button");

var _Button2 = _interopRequireDefault(_Button);

var _ButtonWithIcon = require("../ButtonWithIcon");

var _ButtonWithIcon2 = _interopRequireDefault(_ButtonWithIcon);

var _ActionMenu = require("../ActionMenu");

var _ActionMenu2 = _interopRequireDefault(_ActionMenu);

var _Close = require("../icon/Close");

var _Close2 = _interopRequireDefault(_Close);

var _BulkActionsSelectedRows = require("./BulkActionsSelectedRows");

var _BulkActionsSelectedRows2 = _interopRequireDefault(_BulkActionsSelectedRows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var close = _react2.default.createElement(_Close2.default, null);

var BulkActions =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(BulkActions, _PureComponent);

  function BulkActions() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = BulkActions.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        hasPrimaryBulkAction = _this$props.hasPrimaryBulkAction,
        hasSecondaryBulkActions = _this$props.hasSecondaryBulkActions,
        selectedRows = _this$props.selectedRows,
        bulkActions = _this$props.bulkActions,
        allLinesSelected = _this$props.allLinesSelected,
        onSelectAllLines = _this$props.onSelectAllLines,
        onDeselectAllLines = _this$props.onDeselectAllLines;
    var hasBulkActions = hasPrimaryBulkAction || hasSecondaryBulkActions;
    var selectedRowsLength = selectedRows.length;
    var hasRowsSelected = selectedRowsLength > 0;
    var bulkActionsReturnedParameters = allLinesSelected ? {
      allLinesSelected: true
    } : {
      selectedRows: selectedRows
    };
    return _react2.default.createElement("div", {
      className: (0, _classnames2.default)('flex flex-row justify-between bg-action-primary c-on-action-primary br3 br--top ph4', {
        pv4: hasRowsSelected
      }),
      style: {
        height: hasRowsSelected ? '56px' : 0,
        overflow: hasRowsSelected ? 'auto' : 'hidden',
        transition: 'height 0.2s ease-in-out, padding 0.2s ease-in-out'
      }
    }, hasBulkActions && _react2.default.createElement("div", {
      className: "flex flex-row"
    }, hasPrimaryBulkAction && _react2.default.createElement("div", {
      className: "mr4"
    }, _react2.default.createElement(_Button2.default, {
      variation: "secondary",
      size: "small",
      onClick: function onClick() {
        return bulkActions.main.handleCallback(bulkActionsReturnedParameters);
      }
    }, bulkActions.main.label)), hasSecondaryBulkActions && _react2.default.createElement(_ActionMenu2.default, {
      label: bulkActions.texts.secondaryActionsLabel,
      buttonProps: {
        variation: 'secondary',
        size: 'small'
      },
      options: bulkActions.others.map(function (el) {
        return {
          label: el.label,
          isDangerous: el.isDangerous,
          onClick: function onClick() {
            return el.handleCallback(bulkActionsReturnedParameters);
          }
        };
      })
    })), _react2.default.createElement("div", {
      className: "tr flex flex-row items-center"
    }, !allLinesSelected && bulkActions && bulkActions.texts && _react2.default.createElement("span", {
      className: "mr4 c-muted-4"
    }, bulkActions.texts.rowsSelected(_react2.default.createElement(_BulkActionsSelectedRows2.default, {
      selectedRowsLength: selectedRowsLength
    }))), _react2.default.createElement("span", {
      className: "mr2"
    }, allLinesSelected ? bulkActions && bulkActions.texts && bulkActions.texts.allRowsSelected(_react2.default.createElement("span", {
      className: "b"
    }, bulkActions.totalItems)) : _react2.default.createElement(_Button2.default, {
      onClick: function onClick() {
        return onSelectAllLines();
      }
    }, _react2.default.createElement("span", {
      className: "ttu"
    }, bulkActions && (bulkActions.texts && bulkActions.texts.selectAll) + " " + bulkActions.totalItems))), _react2.default.createElement(_ButtonWithIcon2.default, {
      icon: close,
      onClick: function onClick() {
        return onDeselectAllLines();
      }
    })));
  };

  return BulkActions;
}(_react.PureComponent);

BulkActions.defaultProps = {
  hasPrimaryBulkAction: false,
  hasSecondaryBulkActions: false,
  allLinesSelected: false,
  selectedRows: [],
  bulkActions: {},
  onSelectAllLines: function onSelectAllLines() {}
};
BulkActions.propTypes = {
  hasPrimaryBulkAction: _propTypes2.default.bool,
  hasSecondaryBulkActions: _propTypes2.default.bool,
  allLinesSelected: _propTypes2.default.bool,
  selectedRows: _propTypes2.default.array,
  bulkActions: _propTypes2.default.object,
  onSelectAllLines: _propTypes2.default.func,
  onDeselectAllLines: _propTypes2.default.func.isRequired
};
exports.default = BulkActions;