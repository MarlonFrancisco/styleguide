"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var NAMESPACE_PREFIX = exports.NAMESPACE_PREFIX = 'vtex-table-v2';
var NAMESPACES = exports.NAMESPACES = {
  CONTAINER: NAMESPACE_PREFIX + "__container",
  TABLE: "" + NAMESPACE_PREFIX,
  HEADER: NAMESPACE_PREFIX + "__header",
  ROW: NAMESPACE_PREFIX + "__row",
  CELL: NAMESPACE_PREFIX + "__cell",
  TOOLBAR: {
    CONTAINER: NAMESPACE_PREFIX + "__toolbar__container",
    INPUT_SEARCH: NAMESPACE_PREFIX + "__toolbar__input-search",
    BUTTON_GROUP: NAMESPACE_PREFIX + "__toolbar__button-group",
    BUTTON_DENSITY: NAMESPACE_PREFIX + "__toolbar__button-density",
    BUTTON_DOWNLOAD: NAMESPACE_PREFIX + "__toolbar__button-donwload",
    BUTTON_UPLOAD: NAMESPACE_PREFIX + "__toolbar__button-upload",
    BUTTON_NEWLINE: NAMESPACE_PREFIX + "__toolbar__button-newline",
    BUTTON_EXTRA_ACTIONS: NAMESPACE_PREFIX + "__toolbar__button-extra-actions"
  },
  PAGINATION: NAMESPACE_PREFIX + "__pagination"
};
var TABLE_DENSITIES = exports.TABLE_DENSITIES = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high'
};
var DENSITY_OPTIONS = exports.DENSITY_OPTIONS = [TABLE_DENSITIES.LOW, TABLE_DENSITIES.MEDIUM, TABLE_DENSITIES.HIGH];
var TABLE_HEADER_HEIGHT = exports.TABLE_HEADER_HEIGHT = 36;
var EMPTY_STATE_SIZE_IN_ROWS = exports.EMPTY_STATE_SIZE_IN_ROWS = 5;
var DEFAULT_SCROLLBAR_WIDTH = exports.DEFAULT_SCROLLBAR_WIDTH = 17;
var FIELDS_BOX_ITEM_HEIGHT = exports.FIELDS_BOX_ITEM_HEIGHT = 36;
var NESTED_ROW_PREFIX_WIDTH = exports.NESTED_ROW_PREFIX_WIDTH = 36;
var ICON_SIZE = exports.ICON_SIZE = {
  HEAVY: 13,
  MEDIUM: 14,
  LIGHT: 16
};
var BUTTON = exports.BUTTON = {
  SIZE: {
    SMALL: 'small',
    REGULAR: 'regular',
    LARGE: 'large'
  },
  VARIATION: {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    TERTIARY: 'tertiary'
  }
};
var BOX_ALIGNMENT = exports.BOX_ALIGNMENT = {
  RIGHT: 'right',
  LEFT: 'left'
};
var JUSTIFY_OPTIONS = exports.JUSTIFY_OPTIONS = {
  BETWEEN: 'between',
  END: 'end',
  START: 'start',
  AROUND: 'around',
  CENTER: 'center'
};