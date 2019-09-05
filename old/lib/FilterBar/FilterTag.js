"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _merge2 = require("lodash/merge");

var _merge3 = _interopRequireDefault(_merge2);

var _Button = require("../Button");

var _Button2 = _interopRequireDefault(_Button);

var _Clear = require("../icon/Clear");

var _Clear2 = _interopRequireDefault(_Clear);

var _Close = require("../icon/Close");

var _Close2 = _interopRequireDefault(_Close);

var _CaretDown = require("../icon/CaretDown");

var _CaretDown2 = _interopRequireDefault(_CaretDown);

var _UncoupledStatement = require("../UncoupledStatement");

var _UncoupledStatement2 = _interopRequireDefault(_UncoupledStatement);

var _Menu = require("./Menu");

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var OPEN_MENU_STYLE = {
  backgroundColor: '#dbe9fd'
};
var emptyVirtualStatement = {
  subject: null,
  verb: null,
  object: null,
  error: null
};

var filterStatementBySubject = function filterStatementBySubject(statements, subject, options) {
  if (statements === void 0) {
    statements = [];
  }

  if (options === void 0) {
    options = {};
  }

  var hasStatement = statements.some(function (st) {
    return st.subject === subject;
  });
  return hasStatement ? statements.filter(function (st) {
    return st.subject === subject;
  }) : [_extends({}, emptyVirtualStatement, {
    subject: subject,
    verb: options[subject] && options[subject].verbs.length > 0 ? options[subject].verbs[0].value : null
  })];
};

var FilterTag =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(FilterTag, _PureComponent);

  function FilterTag(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "openMenu", function () {
      if (_this.state.isMenuOpen) return;
      document.addEventListener('mousedown', _this.handleClickOutside);

      _this.setState({
        isMenuOpen: true,
        virtualStatement: filterStatementBySubject(_this.props.statements, _this.props.subject, _this.props.options)[0]
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeMenu", function () {
      if (!_this.state.isMenuOpen) return;
      document.removeEventListener('mousedown', _this.handleClickOutside);

      _this.setState({
        isMenuOpen: false,
        virtualStatement: filterStatementBySubject([], _this.props.subject, _this.props.options)[0]
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (e) {
      if (_this.filterMenuContainer && _this.filterMenuContainer.current && !_this.filterMenuContainer.current.contains(e.target) && _this.state.isMenuOpen) {
        _this.closeMenu();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeStatement", function (newValue, structure) {
      _this.setState(function (state) {
        var _merge;

        return {
          virtualStatement: (0, _merge3.default)({}, state.virtualStatement, (_merge = {}, _merge[structure] = newValue, _merge))
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "resetVirtualStatement", function () {
      var _this$props = _this.props,
          subject = _this$props.subject,
          options = _this$props.options;
      var statement = filterStatementBySubject([], subject, options);

      _this.setState({
        virtualStatement: statement
      });
    });

    _this.filterMenuContainer = _react2.default.createRef();
    _this.state = {
      isMenuOpen: false,
      virtualStatement: filterStatementBySubject(props.statements, props.subject, props.options)[0]
    };
    return _this;
  }

  FilterTag.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.statements && nextProps.statements.length > 0 && nextProps.subject && nextProps.statements.some(function (st) {
      return st.subject === nextProps.subject;
    })) {
      var statement = filterStatementBySubject(nextProps.statements, nextProps.subject, nextProps.options)[0];
      return {
        virtualStatement: (0, _merge3.default)({}, statement, prevState.virtualStatement)
      };
    }

    return prevState;
  };

  var _proto = FilterTag.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.isMenuOpen) {
      this.closeMenu();
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        options = _this$props2.options,
        subject = _this$props2.subject,
        statements = _this$props2.statements,
        alwaysVisible = _this$props2.alwaysVisible,
        getFilterLabel = _this$props2.getFilterLabel,
        subjectPlaceholder = _this$props2.subjectPlaceholder,
        onClickClear = _this$props2.onClickClear,
        isMoreOptions = _this$props2.isMoreOptions,
        onSubmitFilterStatement = _this$props2.onSubmitFilterStatement,
        submitFilterLable = _this$props2.submitFilterLable,
        newFilterLable = _this$props2.newFilterLable;
    var _this$state = this.state,
        isMenuOpen = _this$state.isMenuOpen,
        virtualStatement = _this$state.virtualStatement;
    var statement = filterStatementBySubject(statements, subject)[0];
    var isEmpty = !!(statements && (!statement || statement && !statement.object));
    var shouldOmitSubject = !isMoreOptions;
    var shouldOmitVerb = isMoreOptions ? false : options[subject].verbs.length === 1;
    return _react2.default.createElement("div", {
      ref: this.filterMenuContainer,
      style: _extends({}, isMenuOpen && OPEN_MENU_STYLE),
      className: "br-pill " + (isEmpty || isMoreOptions ? '' : 'pr4') + " pv1 dib bn " + (alwaysVisible && isEmpty ? 'bg-transparent hover-bg-muted-5' : isMoreOptions ? 'hover-bg-muted-5' : 'bg-action-secondary hover-bg-action-secondary') + " c-on-base"
    }, _react2.default.createElement("div", {
      className: "flex items-stretch"
    }, _react2.default.createElement(_Menu2.default, {
      open: isMenuOpen,
      align: "left",
      button: _react2.default.createElement("button", {
        type: "button",
        className: "bw1 ba br2 v-mid relative bg-transparent b--transparent c-action-primary pointer w-100 outline-0",
        onClick: isMenuOpen ? this.closeMenu : this.openMenu
      }, _react2.default.createElement("div", {
        className: "flex items-center justify-center h-100 ph3 "
      }, _react2.default.createElement("span", {
        className: "flex items-center nl1 nowrap"
      }, isMoreOptions ? _react2.default.createElement("span", {
        className: "fw5"
      }, getFilterLabel()) : _react2.default.createElement(_react.Fragment, null, _react2.default.createElement("span", null, options[subject].label + ":\xA0"), _react2.default.createElement("span", {
        className: "fw5"
      }, "\xA0" + getFilterLabel(filterStatementBySubject(statements, subject)))), _react2.default.createElement("div", {
        className: "ml2 nr2"
      }, _react2.default.createElement(_CaretDown2.default, {
        size: 11,
        color: "currentColor"
      })))))
    }, _react2.default.createElement("div", {
      className: "ma5"
    }, _react2.default.createElement("div", {
      className: "flex flex-wrap " + (isMoreOptions ? 'mb6' : 'mb3')
    }, isMoreOptions && _react2.default.createElement("span", {
      className: "f4 mh3"
    }, newFilterLable), _react2.default.createElement("div", {
      className: "flex flex-column"
    }, shouldOmitSubject && _react2.default.createElement("span", {
      className: "f4 mh3 mb5"
    }, options[subject].label), shouldOmitVerb && _react2.default.createElement("span", {
      className: "mh3"
    }, options[subject].verbs[0].label)), _react2.default.createElement("div", {
      className: "ml-auto mr3 items-center pointer",
      onClick: function onClick() {
        return _this2.closeMenu();
      }
    }, _react2.default.createElement(_Close2.default, {
      size: 18
    }))), _react2.default.createElement(_UncoupledStatement2.default, {
      isFullWidth: true,
      omitSubject: shouldOmitSubject,
      omitVerbs: shouldOmitVerb,
      options: options,
      subjectPlaceholder: subjectPlaceholder,
      statements: isMoreOptions ? [virtualStatement] : [(0, _merge3.default)({}, statement, virtualStatement)],
      onChangeStatement: this.handleChangeStatement,
      onChangeObjectCallback: function onChangeObjectCallback(value) {
        return _this2.handleChangeStatement(value, 'object');
      }
    }), _react2.default.createElement("div", {
      className: "flex justify-end mt4 mh3"
    }, _react2.default.createElement(_Button2.default, {
      type: "submit",
      disabled: virtualStatement && !virtualStatement.object,
      onClick: function onClick() {
        onSubmitFilterStatement(virtualStatement);

        _this2.resetVirtualStatement();

        _this2.closeMenu();
      }
    }, submitFilterLable)))), !isEmpty && !isMoreOptions && _react2.default.createElement("div", {
      className: "flex items-center c-link hover-c-link pointer",
      onClick: function onClick() {
        _this2.resetVirtualStatement();

        onClickClear();
      }
    }, _react2.default.createElement(_Clear2.default, {
      solid: true,
      size: 16
    }))));
  };

  return FilterTag;
}(_react.PureComponent);

FilterTag.defaultProps = {
  alwaysVisible: false,
  isMoreOptions: false,
  subjectPlaceholder: '…',
  newFilterLable: '…'
};
FilterTag.propTypes = {
  options: _propTypes2.default.object.isRequired,
  subject: _propTypes2.default.string,
  statements: _propTypes2.default.array,
  alwaysVisible: _propTypes2.default.bool,
  getFilterLabel: _propTypes2.default.func,
  subjectPlaceholder: _propTypes2.default.string,
  onClickClear: _propTypes2.default.func,
  isMoreOptions: _propTypes2.default.bool,
  onSubmitFilterStatement: _propTypes2.default.func.isRequired,
  submitFilterLable: _propTypes2.default.string.isRequired,
  newFilterLable: _propTypes2.default.string
};
exports.default = FilterTag;