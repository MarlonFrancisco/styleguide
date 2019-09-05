"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ButtonWithIcon = require("../ButtonWithIcon");

var _ButtonWithIcon2 = _interopRequireDefault(_ButtonWithIcon);

var _Close = require("../icon/Close");

var _Close2 = _interopRequireDefault(_Close);

var _FilterTag = require("./FilterTag");

var _FilterTag2 = _interopRequireDefault(_FilterTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var HEAVY_ICON_OPTICAL_COMPENSATION = {
  marginTop: '1px'
};

var isStatementComplete = function isStatementComplete(st) {
  return st.subject && st.verb && st.object;
};

var filterExtraOptions = function filterExtraOptions(options, alwaysVisibleFilters, statements) {
  return Object.keys(options).filter(function (key) {
    return !alwaysVisibleFilters.includes(key) && !statements.some(function (st) {
      return st.subject === key && st.object;
    });
  }).reduce(function (filteredOptions, key) {
    var _extends2;

    return _extends({}, filteredOptions, (_extends2 = {}, _extends2[key] = options[key], _extends2));
  }, {});
};

var FILTER_VALUE_LABEL_MAX_LENGTH = 17;

var truncateFilterValue = function truncateFilterValue(filterValue) {
  return "" + filterValue.substring(0, FILTER_VALUE_LABEL_MAX_LENGTH) + (filterValue.length <= FILTER_VALUE_LABEL_MAX_LENGTH ? '' : '…');
};

var FilterBar =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(FilterBar, _PureComponent);

  function FilterBar(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "toggleExtraFilterOption", function (key) {
      var visibleExtraOptions = _this.state.visibleExtraOptions;
      var newVisibleExtraOptions = [].concat(visibleExtraOptions.indexOf(key) === -1 ? [key] : [], visibleExtraOptions.filter(function (op) {
        return op !== key;
      }));

      _this.setState({
        visibleExtraOptions: newVisibleExtraOptions
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmitFilter", function (st) {
      var statements = _this.props.statements;
      var hasStatement = statements.some(function (_st) {
        return _st.subject === st.subject;
      });

      if (hasStatement) {
        var newStatements = statements.map(function (_st) {
          if (_st.subject === st.subject) {
            return _extends({}, _st, {}, st);
          }

          return _st;
        });

        _this.changeStatementsCallback(newStatements);
      } else {
        var _newStatements = statements.slice(0);

        _newStatements.push(st);

        _this.changeStatementsCallback(_newStatements);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMoreOptionsSelected", function (st) {
      if (isStatementComplete(st)) {
        _this.handleSubmitFilter(st);

        _this.toggleExtraFilterOption(st.subject);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFilterClear", function (subject) {
      var _this$props = _this.props,
          alwaysVisibleFilters = _this$props.alwaysVisibleFilters,
          statements = _this$props.statements;
      var newStatements = statements.filter(function (_st) {
        return _st.subject !== subject;
      });

      _this.changeStatementsCallback(newStatements);

      !alwaysVisibleFilters.includes(subject) && _this.toggleExtraFilterOption(subject);
    });

    _defineProperty(_assertThisInitialized(_this), "changeStatementsCallback", function (statements) {
      _this.props.onChangeStatements(statements);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClearAllfilters", function () {
      _this.setState({
        visibleExtraOptions: []
      });

      _this.changeStatementsCallback([]);
    });

    _this.state = {
      visibleExtraOptions: []
    };
    return _this;
  }

  var _proto = FilterBar.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        options = _this$props2.options,
        moreOptionsLabel = _this$props2.moreOptionsLabel,
        alwaysVisibleFilters = _this$props2.alwaysVisibleFilters,
        clearAllFiltersButtonLabel = _this$props2.clearAllFiltersButtonLabel,
        statements = _this$props2.statements,
        collapseLeft = _this$props2.collapseLeft,
        subjectPlaceholder = _this$props2.subjectPlaceholder,
        submitFilterLable = _this$props2.submitFilterLable,
        newFilterLable = _this$props2.newFilterLable;
    var visibleExtraOptions = this.state.visibleExtraOptions;
    var optionsKeys = Object.keys(options);
    return optionsKeys.length > 0 && _react2.default.createElement("div", {
      className: "flex flex-wrap " + (collapseLeft ? 'nl5' : '')
    }, optionsKeys.filter(function (key) {
      return alwaysVisibleFilters.includes(key) || visibleExtraOptions.includes(key);
    }).map(function (subject) {
      var statement = statements.find(function (st) {
        return st.subject === subject;
      });
      return _react2.default.createElement("div", {
        key: "VTEX__filter_option--" + subject,
        className: "ma2"
      }, _react2.default.createElement(_FilterTag2.default, {
        alwaysVisible: alwaysVisibleFilters.includes(subject),
        getFilterLabel: function getFilterLabel() {
          var label = options[subject] && options[subject].renderFilterLabel(statement);
          return label && typeof label === 'string' && truncateFilterValue(label) || '…';
        },
        submitFilterLable: submitFilterLable,
        subject: subject,
        options: options,
        statements: statements,
        onClickClear: function onClickClear() {
          return _this2.handleFilterClear(subject);
        },
        onSubmitFilterStatement: _this2.handleSubmitFilter
      }));
    }), alwaysVisibleFilters.length + visibleExtraOptions.length !== optionsKeys.length && _react2.default.createElement("div", {
      className: "ma2"
    }, _react2.default.createElement(_FilterTag2.default, {
      isMoreOptions: true,
      subjectPlaceholder: subjectPlaceholder,
      getFilterLabel: function getFilterLabel() {
        return moreOptionsLabel;
      },
      submitFilterLable: submitFilterLable,
      newFilterLable: newFilterLable,
      options: _extends({}, filterExtraOptions(options, alwaysVisibleFilters, statements)),
      statements: [],
      onSubmitFilterStatement: this.handleMoreOptionsSelected
    })), clearAllFiltersButtonLabel && statements.some(function (st) {
      return !!st && !!st.object;
    }) && _react2.default.createElement("div", {
      className: "ml-auto mt1"
    }, _react2.default.createElement(_ButtonWithIcon2.default, {
      icon: _react2.default.createElement("span", {
        className: "flex items-center c-muted-2",
        style: HEAVY_ICON_OPTICAL_COMPENSATION
      }, _react2.default.createElement(_Close2.default, {
        size: 13
      })),
      size: "small",
      variation: "tertiary",
      onClick: this.handleClearAllfilters
    }, _react2.default.createElement("span", {
      className: "c-muted-2"
    }, clearAllFiltersButtonLabel))));
  };

  return FilterBar;
}(_react.PureComponent);

FilterBar.defaultProps = {
  options: [],
  moreOptionsLabel: 'More',
  alwaysVisibleFilters: [],
  collapseLeft: false,
  subjectPlaceholder: 'Select a filter…',
  submitFilterLable: 'Ok',
  newFilterLable: 'New Filter'
};
FilterBar.propTypes = {
  /** filter options (mirroring statements from Conditions component) */
  options: _propTypes2.default.object.isRequired,

  /** filter statements (mirroring statements from Conditions component) */
  statements: _propTypes2.default.array,

  /** Filters change callback: returns array of statement definitions */
  onChangeStatements: _propTypes2.default.func.isRequired,

  /** lable for MORE options */
  moreOptionsLabel: _propTypes2.default.string,

  /** filter options that are always visible outside MORE options */
  alwaysVisibleFilters: _propTypes2.default.arrayOf(_propTypes2.default.string),

  /** if this label is passed, when some filter is not empty a clear all button will appear */
  clearAllFiltersButtonLabel: _propTypes2.default.string,

  /** Cancels out left padding */
  collapseLeft: _propTypes2.default.bool,

  /** Subject select placeholder inside 'More options' */
  subjectPlaceholder: _propTypes2.default.string,

  /** Submit button lable for statement inside FilterTag */
  submitFilterLable: _propTypes2.default.string,

  /** New Filter title lable for inside the 'More options' menu */
  newFilterLable: _propTypes2.default.string
};
exports.default = FilterBar;