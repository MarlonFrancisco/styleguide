"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _UncoupledStatement = require("../UncoupledStatement");

var _UncoupledStatement2 = _interopRequireDefault(_UncoupledStatement);

var _Collapsible = require("../Collapsible");

var _Collapsible2 = _interopRequireDefault(_Collapsible);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FilterColapsible =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(FilterColapsible, _PureComponent);

  function FilterColapsible(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "handleChangeStatement", function (newValue, structure) {
      var _extends2;

      var statement = _this.props.statement;
      return _this.props.onChangeStatement(_extends({}, statement, (_extends2 = {}, _extends2[structure] = newValue, _extends2)));
    });

    _this.state = {
      isCollapsibleOpen: props.beginWithOpenCollapsibles
    };
    return _this;
  }

  var _proto = FilterColapsible.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        options = _this$props.options,
        subject = _this$props.subject,
        statement = _this$props.statement;
    var isCollapsibleOpen = this.state.isCollapsibleOpen;
    var shouldOmitVerb = options[subject].verbs.length === 1;
    return _react2.default.createElement("div", {
      className: "flex items-stretch"
    }, _react2.default.createElement(_Collapsible2.default, {
      isOpen: isCollapsibleOpen,
      align: "left",
      caretColor: "base",
      header: _react2.default.createElement("div", {
        className: "flex items-center h-100 ph4 pv5"
      }, _react2.default.createElement("span", {
        className: "flex nl3 "
      }, _react2.default.createElement("span", {
        className: "fw5 f4"
      }, options[subject].label))),
      onClick: function onClick(e) {
        return _this2.setState({
          isCollapsibleOpen: e.target.isOpen
        });
      }
    }, _react2.default.createElement("div", {
      className: "ma5"
    }, isCollapsibleOpen && _react2.default.createElement(_UncoupledStatement2.default, {
      isFullWidth: true,
      omitSubject: true,
      omitVerbs: shouldOmitVerb,
      options: options,
      subjectPlaceholder: '…',
      statements: [statement],
      onChangeStatement: this.handleChangeStatement,
      onChangeObjectCallback: function onChangeObjectCallback(value) {
        return _this2.handleChangeStatement(value, 'object');
      }
    }))));
  };

  return FilterColapsible;
}(_react.PureComponent);

FilterColapsible.defaultProps = {
  statement: {
    subject: null,
    verb: null,
    object: null,
    error: null
  }
};
FilterColapsible.propTypes = {
  options: _propTypes2.default.object.isRequired,
  subject: _propTypes2.default.string.isRequired,
  statement: _propTypes2.default.objectOf(_propTypes2.default.shape({
    subject: _propTypes2.default.string,
    verb: _propTypes2.default.string.isRequired,
    object: _propTypes2.default.object,
    error: _propTypes2.default.any
  })),
  onChangeStatement: _propTypes2.default.func.isRequired,
  beginWithOpenCollapsibles: _propTypes2.default.bool
};
exports.default = FilterColapsible;