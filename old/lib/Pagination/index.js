"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CaretLeft = require("../icon/CaretLeft");

var _CaretLeft2 = _interopRequireDefault(_CaretLeft);

var _CaretRight = require("../icon/CaretRight");

var _CaretRight2 = _interopRequireDefault(_CaretRight);

var _ButtonWithIcon = require("../ButtonWithIcon");

var _ButtonWithIcon2 = _interopRequireDefault(_ButtonWithIcon);

var _Dropdown = require("../Dropdown");

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var caretLeft = _react2.default.createElement(_CaretLeft2.default, null);

var caretRight = _react2.default.createElement(_CaretRight2.default, null);

var Pagination =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Pagination, _PureComponent);

  function Pagination(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "handleRowsChange", function (e, value) {
      var rowsOptions = _this.props.rowsOptions;
      var optionIndex = rowsOptions.indexOf(parseInt(value, 10));

      _this.setState({
        selectedRowsOptionIndex: optionIndex
      });

      _this.props.onRowsChange && _this.props.onRowsChange(e, value);
    });

    _defineProperty(_assertThisInitialized(_this), "handlePrevPage", function (e) {
      _this.props.onPrevClick && _this.props.onPrevClick(e);
    });

    _defineProperty(_assertThisInitialized(_this), "handleNextPage", function (e) {
      _this.props.onNextClick && _this.props.onNextClick(e);
    });

    _defineProperty(_assertThisInitialized(_this), "createRowOptions", function (rowsOptions) {
      if (rowsOptions) {
        var opts = [];
        rowsOptions.forEach(function (o) {
          return opts.push({
            label: o,
            value: o
          });
        });
        return opts;
      }

      return null;
    });

    _this.state = {
      selectedRowsOptionIndex: 0
    };
    return _this;
  }

  var _proto = Pagination.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        rowsOptions = _this$props.rowsOptions,
        totalItems = _this$props.totalItems,
        currentItemFrom = _this$props.currentItemFrom,
        currentItemTo = _this$props.currentItemTo,
        textOf = _this$props.textOf,
        textShowRows = _this$props.textShowRows,
        selectedOption = _this$props.selectedOption;
    var selectedRowsOptionIndex = this.state.selectedRowsOptionIndex;
    var dropdownOptions = this.createRowOptions(rowsOptions);
    var isPrevDisabled = currentItemFrom <= 1;
    var isNextDisabled = currentItemTo >= totalItems;
    var itemTo = currentItemTo > totalItems ? totalItems : currentItemTo;
    return _react2.default.createElement("div", {
      className: "flex flex-row items-center " + (rowsOptions ? 'justify-between' : 'justify-end')
    }, dropdownOptions && _react2.default.createElement("div", {
      className: "flex flex-row pt5 items-baseline"
    }, _react2.default.createElement("span", {
      className: "mr4 c-muted-2 t-small self-center"
    }, textShowRows), _react2.default.createElement(_Dropdown2.default, {
      size: "small",
      options: dropdownOptions,
      value: selectedOption || dropdownOptions[selectedRowsOptionIndex].label,
      onChange: this.handleRowsChange
    })), _react2.default.createElement("div", {
      className: "flex flex-row pt5 items-center"
    }, _react2.default.createElement("div", {
      className: "c-muted-2 t-small"
    }, currentItemFrom, ' - ', itemTo, " ", textOf, " ", totalItems), _react2.default.createElement("div", {
      className: "ml4"
    }, _react2.default.createElement(_ButtonWithIcon2.default, {
      icon: caretLeft,
      variation: "secondary",
      size: "small",
      disabled: isPrevDisabled,
      onClick: this.handlePrevPage
    })), _react2.default.createElement("div", {
      className: "ml2"
    }, _react2.default.createElement(_ButtonWithIcon2.default, {
      icon: caretRight,
      variation: "secondary",
      size: "small",
      disabled: isNextDisabled,
      onClick: this.handleNextPage
    }))));
  };

  return Pagination;
}(_react.PureComponent);

Pagination.defaultProps = {
  rowsOptions: null
};
Pagination.propTypes = {
  rowsOptions: _propTypes2.default.array,
  currentItemFrom: _propTypes2.default.number.isRequired,
  currentItemTo: _propTypes2.default.number.isRequired,
  textOf: _propTypes2.default.node.isRequired,
  textShowRows: _propTypes2.default.node.isRequired,
  totalItems: _propTypes2.default.number.isRequired,

  /**
   * Use this prop if you want to control the number of rows selected, instead of leaving it to the Pagination component.
   */
  selectedOption: _propTypes2.default.number,
  onRowsChange: _propTypes2.default.func,
  onNextClick: _propTypes2.default.func,
  onPrevClick: _propTypes2.default.func
};
exports.default = Pagination;