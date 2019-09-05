"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _debounce = require("lodash/debounce");

var _debounce2 = _interopRequireDefault(_debounce);

var _Tag = require("./Tag");

var _Tag2 = _interopRequireDefault(_Tag);

var _DropdownList = require("./DropdownList");

var _DropdownList2 = _interopRequireDefault(_DropdownList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MultiSelect =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(MultiSelect, _Component);

  function MultiSelect(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "handleFilter", (0, _debounce2.default)(
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(term) {
        var filteredOptions;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.filter(term);

              case 2:
                filteredOptions = _context.sent;

                _this.setState({
                  loading: false,
                  filteredOptions: filteredOptions
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), 275, {
      trailing: true
    }));

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function () {
      _this.setState({
        active: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      if (!_this.state.hovering) {
        _this.setState({
          active: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (event) {
      if (_this.state.searchTerm !== '') {
        if (event.key === 'Tab' || event.key === 'Enter') {
          event.preventDefault();

          _this.selectFocused();
        } else if (event.key === 'ArrowUp') {
          event.preventDefault();

          _this.moveFocusUp();
        } else if (event.key === 'ArrowDown') {
          event.preventDefault();

          _this.moveFocusDown();
        }
      } else if (event.key === 'Backspace') {
        _this.unselectLast();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearch", function (event) {
      var searchTerm = event.target.value;

      _this.setState(function () {
        return {
          searchTerm: searchTerm,
          focusedOption: 0,
          filteredOptions: [],
          loading: true
        };
      }, function () {
        _this.handleFilter(searchTerm);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelect", function (index) {
      _this.props.onChange([].concat(_this.props.selected, [_this.state.filteredOptions[index]]));

      _this.setState({
        hovering: false,
        searchTerm: ''
      }, function () {
        _this.searchInput.current.focus();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleUnselect", function (index) {
      _this.props.onChange(_this.props.selected.filter(function (opt, i) {
        return index !== i;
      }));

      _this.searchInput.current.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "filter", function (term) {
      if (_this.props.filter) {
        return _this.props.filter(term);
      }

      return _this.props.options.filter(function (opt) {
        return opt.label.toLowerCase().includes(term.toLowerCase());
      }).filter(function (opt) {
        for (var i = 0; i < _this.props.selected.length; i++) {
          if (_this.props.selected[i].value === opt.value) {
            return false;
          }
        }

        return true;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "moveFocusDown", function () {
      var newFocus = _this.state.focusedOption + 1;

      if (newFocus <= _this.state.filteredOptions.length - 1) {
        _this.setState({
          focusedOption: newFocus
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "moveFocusUp", function () {
      var newFocus = _this.state.focusedOption - 1;

      if (newFocus >= 0) {
        _this.setState({
          focusedOption: newFocus
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "selectFocused", function () {
      var index = _this.state.focusedOption;

      if (_this.state.filteredOptions.length > 0) {
        _this.handleSelect(index);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "unselectLast", function () {
      var length = _this.props.selected.length;

      if (length > 0) {
        _this.handleUnselect(length - 1);
      }
    });

    _this.searchInput = _react2.default.createRef();
    _this.state = {
      active: false,
      filteredOptions: [],
      focusedOption: 0,
      hovering: false,
      loading: false,
      searchTerm: ''
    };
    return _this;
  }

  var _proto = MultiSelect.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        disabled = _this$props.disabled,
        label = _this$props.label,
        loadingText = _this$props.loadingText,
        placeholder = _this$props.placeholder,
        selected = _this$props.selected;
    var emptyState = this.props.emptyState("<span className=\"fw5\">" + this.state.searchTerm + "</span>");
    var isDropdownVisible = this.state.active && this.state.searchTerm !== '';
    var tags = selected.map(function (tag, index) {
      return _react2.default.createElement("div", {
        className: "mr2 mv1 flex",
        key: index
      }, _react2.default.createElement(_Tag2.default, {
        disabled: disabled,
        onClick: function onClick() {
          _this2.handleUnselect(index);
        }
      }, tag.label));
    });
    var classes = disabled ? ' bg-muted-5 c-muted-2 ' : ' bg-base c-on-base ';
    classes += isDropdownVisible ? ' br--top ' : '';
    classes += this.state.active ? ' b--muted-2 ' : ' b--muted-4 ';
    classes += !this.state.active && !disabled ? ' hover-b--muted-3 ' : '';
    return _react2.default.createElement("div", {
      className: "relative"
    }, _react2.default.createElement("label", null, label && _react2.default.createElement("span", {
      className: "vtex-input__label db mb3 w-100 c-on-base"
    }, label), _react2.default.createElement("div", {
      className: "flex flex-wrap mt3 br2 b--solid bw1 pv2 ph5 " + classes
    }, _react2.default.createElement("input", {
      className: "t-small mv3 bn outline-0 flex-grow-1 order-last " + classes,
      disabled: disabled,
      onBlur: this.handleBlur,
      onChange: this.handleSearch,
      onFocus: this.handleFocus,
      onKeyDown: this.handleKeyPress,
      placeholder: placeholder,
      ref: this.searchInput,
      value: this.state.searchTerm,
      style: {
        WebkitAppearance: 'none'
      }
    }), tags)), _react2.default.createElement(_DropdownList2.default, {
      emptyState: emptyState,
      focused: this.state.focusedOption,
      formatOption: function formatOption(opt) {
        return opt.label.replace(new RegExp(_this2.state.searchTerm, 'i'), '<span className="fw5">$&</span>');
      },
      loading: this.state.loading,
      loadingText: loadingText,
      onFocus: function onFocus(opt) {
        return _this2.setState({
          focusedOption: opt
        });
      },
      onMouseEnter: function onMouseEnter() {
        return _this2.setState({
          hovering: true
        });
      },
      onMouseLeave: function onMouseLeave() {
        return _this2.setState({
          hovering: false
        });
      },
      onSelect: this.handleSelect,
      options: this.state.filteredOptions,
      isVisible: isDropdownVisible
    }));
  };

  return MultiSelect;
}(_react.Component);

exports.default = MultiSelect;
MultiSelect.defaultProps = {
  disabled: false,
  emptyState: function emptyState(term) {
    return "No results found for \"" + term + "\".";
  },
  options: [],
  placeholder: 'Search...',
  selected: []
};
MultiSelect.propTypes = {
  /** True if the component should be disabled */
  disabled: _propTypes2.default.bool,

  /** Returns a string that will be shown if no results are found. Usage: emptyState(search term) */
  emptyState: _propTypes2.default.func,

  /** Returns an array of filtered results. Usage: filter(search term) */
  filter: _propTypes2.default.func,

  /** Label */
  label: _propTypes2.default.string,

  /** Text that shows during load */
  loadingText: _propTypes2.default.string,

  /** Called when selected options change. Usage: onChange(selected array) */
  onChange: _propTypes2.default.func.isRequired,

  /** List of selectable options. */
  options: _propTypes2.default.array,

  /** Search input placeholder */
  placeholder: _propTypes2.default.string,

  /** List of selected options, which will be shown as tags */
  selected: _propTypes2.default.array
};