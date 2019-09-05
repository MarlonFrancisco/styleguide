"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SubjectAtom = require("./Atoms/SubjectAtom");

var _SubjectAtom2 = _interopRequireDefault(_SubjectAtom);

var _VerbAtom = require("./Atoms/VerbAtom");

var _VerbAtom2 = _interopRequireDefault(_VerbAtom);

var _ObjectAtom = require("./Atoms/ObjectAtom");

var _ObjectAtom2 = _interopRequireDefault(_ObjectAtom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Statement =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Statement, _Component);

  function Statement() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "handleChangeStatement", function (newValue, structure) {
      _this.props.onChangeStatement(newValue, structure);
    });

    _defineProperty(_assertThisInitialized(_this), "resetPredicate", function (subjectValue) {
      var options = _this.props.options;

      _this.handleChangeStatement(options[subjectValue].verbs[0].value || Statement.defaultProps.statements[0].verb, 'verb');

      _this.handleChangeStatement(Statement.defaultProps.statements[0].object, 'object');

      _this.handleChangeStatement(null, 'error');
    });

    return _this;
  }

  var _proto = Statement.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        options = _this$props.options,
        subjectPlaceholder = _this$props.subjectPlaceholder,
        isFullWidth = _this$props.isFullWidth,
        statements = _this$props.statements,
        statementIndex = _this$props.statementIndex,
        omitSubject = _this$props.omitSubject,
        omitVerbs = _this$props.omitVerbs,
        onChangeObjectCallback = _this$props.onChangeObjectCallback;
    var condition = statements[statementIndex];
    var atomProps = {
      statements: statements,
      options: options,
      isFullWidth: isFullWidth,
      statementIndex: statementIndex,
      onChangeObjectCallback: onChangeObjectCallback
    };
    return _react2.default.createElement("div", null, _react2.default.createElement("div", {
      className: "flex-column w-100 mv3"
    }, _react2.default.createElement("div", {
      className: "flex w-100 items-start " + (isFullWidth ? 'flex-column items-stretch' : '')
    }, omitSubject ? omitVerbs ? _react2.default.createElement(_ObjectAtom2.default, _extends({
      key: "object"
    }, atomProps)) : _react2.default.createElement(_react.Fragment, null, condition.subject && _react2.default.createElement(_VerbAtom2.default, _extends({
      key: "verb"
    }, atomProps, {
      onChangeStatement: function onChangeStatement(value, structure) {
        _this2.handleChangeStatement(value, structure);
      }
    })), condition.verb && _react2.default.createElement(_ObjectAtom2.default, _extends({
      key: "object"
    }, atomProps))) : _react2.default.createElement(_react.Fragment, null, _react2.default.createElement(_SubjectAtom2.default, _extends({
      key: "subject"
    }, atomProps, {
      placeholder: subjectPlaceholder,
      onChangeStatement: function onChangeStatement(value, structure) {
        _this2.handleChangeStatement(value, structure);

        _this2.resetPredicate(value);
      }
    })), condition.subject && _react2.default.createElement(_VerbAtom2.default, _extends({
      key: "verb"
    }, atomProps, {
      onChangeStatement: function onChangeStatement(value, structure) {
        _this2.handleChangeStatement(value, structure);
      }
    })), condition.verb && _react2.default.createElement(_ObjectAtom2.default, _extends({
      key: "object"
    }, atomProps)))), condition.error && condition.error.message && _react2.default.createElement("div", {
      className: "red t-small mh3 mt2 lh-title"
    }, condition.error.message)));
  };

  return Statement;
}(_react.Component);

Statement.defaultProps = {
  onRemoveStatement: function onRemoveStatement() {},
  onChangeStatement: function onChangeStatement() {},
  onChangeObjectCallback: function onChangeObjectCallback() {},
  statements: [{
    subject: '',
    verb: '',
    object: null,
    error: null
  }],
  isFullWidth: false,
  statementIndex: 0,
  omitSubject: false,
  omitVerbs: false
};
Statement.propTypes = {
  /** Current selected options for this Statement */
  statements: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    subject: _propTypes2.default.string,
    verb: _propTypes2.default.string,
    object: _propTypes2.default.any,
    error: _propTypes2.default.string
  })),

  /** Possible options and respective data types, verb options */
  options: _propTypes2.default.object.isRequired,

  /** Placeholder for subject dropdown */
  subjectPlaceholder: _propTypes2.default.string.isRequired,

  /** Stretch component to 100% of the width */
  isFullWidth: _propTypes2.default.bool,

  /** Statement change callback */
  onChangeStatement: _propTypes2.default.func,

  /** To which row does this Statement belong to?  */
  statementIndex: _propTypes2.default.number,

  /** Omits statement subject */
  omitSubject: _propTypes2.default.bool,

  /** Omits statement verb */
  omitVerbs: _propTypes2.default.bool,

  /** callback injected in object atom onChange so the state can be controlled by a HOC */
  onChangeObjectCallback: _propTypes2.default.func
};
exports.default = Statement;