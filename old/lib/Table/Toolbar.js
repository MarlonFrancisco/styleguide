"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ActionMenu = require("../ActionMenu");

var _ActionMenu2 = _interopRequireDefault(_ActionMenu);

var _InputSearch = require("../InputSearch");

var _InputSearch2 = _interopRequireDefault(_InputSearch);

var _Button = require("../Button");

var _Button2 = _interopRequireDefault(_Button);

var _ButtonWithIcon = require("../ButtonWithIcon");

var _ButtonWithIcon2 = _interopRequireDefault(_ButtonWithIcon);

var _ButtonGroup = require("../ButtonGroup");

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _Toggle = require("../Toggle");

var _Toggle2 = _interopRequireDefault(_Toggle);

var _Columns = require("../icon/Columns");

var _Columns2 = _interopRequireDefault(_Columns);

var _Density = require("../icon/Density");

var _Density2 = _interopRequireDefault(_Density);

var _Download = require("../icon/Download");

var _Download2 = _interopRequireDefault(_Download);

var _Plus = require("../icon/Plus");

var _Plus2 = _interopRequireDefault(_Plus);

var _Upload = require("../icon/Upload");

var _Upload2 = _interopRequireDefault(_Upload);

var _OptionsDots = require("../icon/OptionsDots");

var _OptionsDots2 = _interopRequireDefault(_OptionsDots);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MAX_FIELDS_BOX_HEIGHT = 192;
var FIELDS_BOX_ITEM_HEIGHT = 36;
var FIELDS_BOX_WIDTH = 292;
var BOX_SHADOW_STYLE = {
  boxShadow: '0px 1px 18px rgba(0, 0, 0, 0.14)'
};
var DENSITY_OPTIONS = ['low', 'medium', 'high'];
var ICON_OPTICAL_COMPENSATION = {
  marginTop: '1.5px'
};
var LIGHT_ICON_SIZE = 16;
var MEDIUM_ICON_SIZE = 14;
var HEAVY_ICON_SIZE = 13;

var Toolbar =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Toolbar, _PureComponent);

  function Toolbar(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "handleToggleBox", function (boxKey) {
      var _this$setState;

      var isBoxVisible = _this.state[boxKey];

      if (isBoxVisible) {
        document.removeEventListener('mousedown', _this.handleClickOutside);
      } else {
        document.addEventListener('mousedown', _this.handleClickOutside);
      }

      _this.setState((_this$setState = {}, _this$setState["" + boxKey] = !isBoxVisible, _this$setState));
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (e) {
      if ( // handle clicks outside the show/hide fields btn or box
      _this.fieldsBtnRef && _this.fieldsBtnRef.current && !_this.fieldsBtnRef.current.contains(e.target) && _this.state.isFieldsBoxVisible) {
        // closes the box if it's open
        _this.handleToggleBox('isFieldsBoxVisible');
      }

      if (_this.densityBtnRef && _this.densityBtnRef.current && !_this.densityBtnRef.current.contains(e.target) && _this.state.isDensityBoxVisible) {
        _this.handleToggleBox('isDensityBoxVisible');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "calculateFieldsBoxHeight", function () {
      var schema = _this.props.schema;
      var estimate = Object.keys(schema.properties).length * FIELDS_BOX_ITEM_HEIGHT;
      return estimate > MAX_FIELDS_BOX_HEIGHT ? MAX_FIELDS_BOX_HEIGHT : estimate;
    });

    _defineProperty(_assertThisInitialized(_this), "calculateExtraActionsBoxHeight", function () {
      var extraActions = _this.props.actions.extraActions;
      var estimate = extraActions.actions.length * FIELDS_BOX_ITEM_HEIGHT;
      return estimate > MAX_FIELDS_BOX_HEIGHT ? MAX_FIELDS_BOX_HEIGHT : estimate;
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputSearchSubmit", function (e) {
      _this.props.onDeselectAllLines && _this.props.onDeselectAllLines();
      _this.props.actions.inputSearch.onSubmit && _this.props.actions.inputSearch.onSubmit(e);
    });

    _this.fieldsBtnRef = _react2.default.createRef();
    _this.extraActionsBtnRef = _react2.default.createRef();
    _this.densityBtnRef = _react2.default.createRef();
    _this.state = {
      isFieldsBoxVisible: false,
      isDensityBoxVisible: false
    };
    return _this;
  }

  var _proto = Toolbar.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        _this$props$actions = _this$props.actions,
        inputSearch = _this$props$actions.inputSearch,
        download = _this$props$actions.download,
        upload = _this$props$actions.upload,
        fields = _this$props$actions.fields,
        extraActions = _this$props$actions.extraActions,
        newLine = _this$props$actions.newLine,
        density = _this$props$actions.density,
        hiddenFields = _this$props.hiddenFields,
        schema = _this$props.schema,
        onHideAllColumns = _this$props.onHideAllColumns,
        onShowAllColumns = _this$props.onShowAllColumns,
        onToggleColumn = _this$props.onToggleColumn,
        onToggleDensity = _this$props.onToggleDensity,
        selectedDensity = _this$props.selectedDensity,
        loading = _this$props.loading;
    var _this$state = this.state,
        isFieldsBoxVisible = _this$state.isFieldsBoxVisible,
        isDensityBoxVisible = _this$state.isDensityBoxVisible;
    var isDownloadVisible = download && download.handleCallback;
    var isUploadVisible = upload && upload.handleCallback;
    var isFieldsVisible = fields && fields.showAllLabel && fields.hideAllLabel;
    var isExtraActionsVisible = extraActions && extraActions.label && extraActions.actions.length > 0;
    var isNewLineVisible = newLine && newLine.label;
    var isSearchBarVisible = !!inputSearch;
    var isDensityVisible = density && density.buttonLabel && density.lowOptionLabel && density.mediumOptionLabel && density.highOptionLabel;
    var newLineButtonProps = {
      disabled: loading || newLine && newLine.disabled,
      isLoading: newLine && newLine.isLoading,
      variation: 'primary',
      size: 'small'
    };
    var forcedColor = 'c-on-base';
    return _react2.default.createElement("div", {
      id: "toolbar",
      className: "mb5 flex flex-row w-100 " + (isSearchBarVisible ? 'justify-between' : 'justify-end')
    }, inputSearch && _react2.default.createElement("form", {
      className: "w-40",
      onSubmit: this.handleInputSearchSubmit
    }, _react2.default.createElement(_InputSearch2.default, _extends({
      disabled: loading
    }, inputSearch))), _react2.default.createElement("div", {
      className: "flex flex-row items-center"
    }, isDensityVisible && _react2.default.createElement("div", {
      id: "toggleDensity",
      title: density.buttonLabel,
      ref: this.densityBtnRef,
      className: "relative mh2"
    }, _react2.default.createElement(_ButtonWithIcon2.default, {
      icon: _react2.default.createElement("span", {
        className: "c-on-base mh2",
        style: ICON_OPTICAL_COMPENSATION
      }, _react2.default.createElement(_Density2.default, {
        size: MEDIUM_ICON_SIZE
      })),
      disabled: loading,
      variation: "tertiary",
      size: "small",
      onClick: function onClick() {
        return _this2.handleToggleBox('isDensityBoxVisible');
      }
    }), isDensityBoxVisible && _react2.default.createElement("div", {
      className: "absolute " + (density.alignMenu === 'right' ? 'right-0' : 'left-0') + " z-999 ba b--muted-4 br2 mt2 mh2",
      style: BOX_SHADOW_STYLE
    }, _react2.default.createElement("div", {
      className: "w-100 b2 br2 bg-base"
    }, _react2.default.createElement("div", {
      style: {
        height: 3 * FIELDS_BOX_ITEM_HEIGHT
      },
      className: "overflow-auto"
    }, DENSITY_OPTIONS.map(function (key, index) {
      var isKeySelected = selectedDensity === key;
      return _react2.default.createElement("div", {
        key: index,
        className: "flex justify-between ph6 pv3 " + (isKeySelected ? 'b--emphasis' : 'b--transparent') + " pointer hover-bg-muted-5 bl bw1",
        onClick: function onClick() {
          onToggleDensity(key);

          _this2.handleToggleBox('isDensityBoxVisible');

          density.handleCallback && density.handleCallback(key);
        }
      }, _react2.default.createElement("span", {
        className: "w-100 " + (isKeySelected ? 'fw5' : '')
      }, density[key + "OptionLabel"]));
    }))))), isFieldsVisible && _react2.default.createElement("div", {
      id: "toggleFieldsBtn",
      title: fields.label,
      ref: this.fieldsBtnRef,
      className: "relative mh2"
    }, _react2.default.createElement(_ButtonWithIcon2.default, {
      icon: _react2.default.createElement("span", {
        className: "c-on-base mh2",
        style: ICON_OPTICAL_COMPENSATION
      }, _react2.default.createElement(_Columns2.default, {
        size: MEDIUM_ICON_SIZE
      })),
      disabled: loading,
      variation: "tertiary",
      size: "small",
      onClick: function onClick() {
        return _this2.handleToggleBox('isFieldsBoxVisible');
      }
    }), isFieldsBoxVisible && _react2.default.createElement("div", {
      className: "absolute " + (fields.alignMenu === 'right' ? 'right-0' : 'left-0') + " z-999 ba b--muted-4 br2 mt2 mh2"
    }, _react2.default.createElement("div", {
      className: "w-100 b2 br2 bg-base",
      style: _extends({}, BOX_SHADOW_STYLE, {
        width: FIELDS_BOX_WIDTH
      })
    }, _react2.default.createElement("div", {
      className: "flex inline-flex bb b--muted-4 w-100 pl6 pv4"
    }, _react2.default.createElement(_Button2.default, {
      variation: "secondary",
      size: "small",
      onClick: onShowAllColumns
    }, fields.showAllLabel), _react2.default.createElement("div", {
      className: "mh4"
    }, _react2.default.createElement(_Button2.default, {
      variation: "secondary",
      size: "small",
      onClick: onHideAllColumns
    }, fields.hideAllLabel))), _react2.default.createElement("div", {
      style: {
        height: this.calculateFieldsBoxHeight()
      },
      className: "overflow-auto"
    }, Object.keys(schema.properties).map(function (field, index) {
      return _react2.default.createElement("div", {
        key: index,
        className: "flex justify-between ph6 pv3 pointer hover-bg-muted-5",
        onClick: function onClick() {
          return onToggleColumn(field);
        }
      }, _react2.default.createElement("span", {
        className: "w-70 truncate"
      }, schema.properties[field].title || field), _react2.default.createElement(_Toggle2.default, {
        size: "small",
        checked: !hiddenFields.includes(field)
      }));
    }))))), isDownloadVisible && _react2.default.createElement("div", {
      title: download.label,
      className: "mh2"
    }, _react2.default.createElement(_ButtonWithIcon2.default, {
      icon: _react2.default.createElement("span", {
        className: (download.disabled ? '' : forcedColor) + " mh2"
      }, _react2.default.createElement(_Download2.default, {
        size: MEDIUM_ICON_SIZE
      })),
      variation: "tertiary",
      disabled: download.disabled,
      isLoading: download.isLoading,
      size: "small",
      onClick: download.handleCallback
    }, download.label && _react2.default.createElement("span", {
      className: "" + (download.disabled ? '' : forcedColor)
    }, download.label))), isUploadVisible && _react2.default.createElement("div", {
      title: upload.label,
      className: "mh2"
    }, _react2.default.createElement(_ButtonWithIcon2.default, {
      icon: _react2.default.createElement("span", {
        className: (upload.disabled ? '' : forcedColor) + " mh2",
        style: ICON_OPTICAL_COMPENSATION
      }, _react2.default.createElement(_Upload2.default, {
        size: HEAVY_ICON_SIZE
      })),
      variation: "tertiary",
      disabled: upload.disabled,
      isLoading: upload.isLoading,
      size: "small",
      onClick: upload.handleCallback
    }, upload.label && _react2.default.createElement("span", {
      className: "" + (upload.disabled ? '' : forcedColor)
    }, upload.label))), isExtraActionsVisible && _react2.default.createElement("div", {
      title: extraActions.label,
      className: "mh2"
    }, _react2.default.createElement(_ActionMenu2.default, {
      hideCaretIcon: true,
      buttonProps: {
        variation: 'tertiary',
        icon: _react2.default.createElement("span", {
          className: "c-on-base"
        }, _react2.default.createElement(_OptionsDots2.default, null)),
        size: 'small'
      },
      options: extraActions.actions.map(function (action) {
        return {
          label: action.label,
          onClick: action.handleCallback
        };
      })
    })), isNewLineVisible && (newLine.actions ? _react2.default.createElement(_ButtonGroup2.default, {
      buttons: [_react2.default.createElement(_ButtonWithIcon2.default, _extends({
        isActiveOfGroup: true,
        key: "new-line-button",
        icon: _react2.default.createElement(_Plus2.default, {
          solid: true,
          size: LIGHT_ICON_SIZE
        }),
        onClick: newLine.handleCallback
      }, newLineButtonProps), newLine.label), _react2.default.createElement(_ActionMenu2.default, {
        isActiveOfGroup: true,
        key: "actions-button",
        buttonProps: newLineButtonProps,
        options: newLine.actions
      })]
    }) : _react2.default.createElement(_ButtonWithIcon2.default, _extends({
      icon: _react2.default.createElement(_Plus2.default, {
        solid: true,
        size: LIGHT_ICON_SIZE
      }),
      onClick: newLine.handleCallback
    }, newLineButtonProps), newLine.label))));
  };

  return Toolbar;
}(_react.PureComponent);

Toolbar.defaultProps = {
  actions: {
    extraActions: {
      actions: []
    }
  }
};
Toolbar.propTypes = {
  actions: _propTypes2.default.shape({
    inputSearch: _propTypes2.default.shape({
      onSubmit: _propTypes2.default.func
    }),
    density: _propTypes2.default.shape({
      buttonLabel: _propTypes2.default.string,
      lowOptionLabel: _propTypes2.default.string,
      handleCallback: _propTypes2.default.func,
      mediumOptionLabel: _propTypes2.default.string,
      highOptionLabel: _propTypes2.default.string,
      alignMenu: _propTypes2.default.oneOf(['right', 'left'])
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
      isLoading: _propTypes2.default.bool,
      disabled: _propTypes2.default.bool
    }),
    upload: _propTypes2.default.shape({
      label: _propTypes2.default.string,
      handleCallback: _propTypes2.default.func,
      isLoading: _propTypes2.default.bool,
      disabled: _propTypes2.default.bool
    }),
    extraActions: _propTypes2.default.shape({
      label: _propTypes2.default.string,
      actions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        label: _propTypes2.default.string,
        handleCallback: _propTypes2.default.func
      })),
      alignMenu: _propTypes2.default.oneOf(['right', 'left']),
      isLoading: _propTypes2.default.bool
    }),
    newLine: _propTypes2.default.shape({
      label: _propTypes2.default.string.isRequired,
      handleCallback: _propTypes2.default.func.isRequired,
      disabled: _propTypes2.default.bool,
      isLoading: _propTypes2.default.bool,
      actions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        label: _propTypes2.default.string,
        handleCallback: _propTypes2.default.func,
        toggle: _propTypes2.default.shape({
          checked: _propTypes2.default.bool,
          semantic: _propTypes2.default.bool
        })
      }))
    })
  }),
  schema: _propTypes2.default.object.isRequired,
  hiddenFields: _propTypes2.default.array,
  onToggleColumn: _propTypes2.default.func,
  onDeselectAllLines: _propTypes2.default.func,
  onHideAllColumns: _propTypes2.default.func,
  onShowAllColumns: _propTypes2.default.func,
  onToggleDensity: _propTypes2.default.func,
  selectedDensity: _propTypes2.default.string,
  loading: _propTypes2.default.bool
};
exports.default = Toolbar;