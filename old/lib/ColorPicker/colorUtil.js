"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var COLOR_CONSTS = {
  RGB_MAX_VALUE: 255
};
var COLOR_FORMAT = {
  HSV: 'hsv',
  RGB: 'rgb',
  HEX: 'hex'
  /** Convert RGB to HSV format */

};

var rgbTohsv = function rgbTohsv(rgb) {
  var r = rgb.r,
      g = rgb.g,
      b = rgb.b,
      a = rgb.a;
  var rAux = r / COLOR_CONSTS.RGB_MAX_VALUE;
  var gAux = g / COLOR_CONSTS.RGB_MAX_VALUE;
  var bAux = b / COLOR_CONSTS.RGB_MAX_VALUE;
  var cMax = Math.max(rAux, gAux, bAux);
  var cMin = Math.min(rAux, gAux, bAux);
  var theta = cMax - cMin;
  var h, s; // Calcule Hue

  if (theta === 0) {
    h = 0;
  } else {
    if (cMax === rAux) h = (gAux - bAux) / theta % 6;else if (cMax === gAux) h = (bAux - rAux) / theta + 2;else h = (rAux - gAux) / theta + 4;
  }

  h = Math.round(h * 60); // Calcule Saturation

  if (cMax === 0) {
    s = 0;
  } else {
    s = parseFloat((theta / cMax).toFixed(2));
  } // Calcule Value


  var v = parseFloat(cMax.toFixed(2));
  return {
    h: h,
    s: s,
    v: v,
    a: a
  };
};
/** Convert RGB to Hex*/


var rgbTohex = function rgbTohex(rgb) {
  var r = rgb.r,
      g = rgb.g,
      b = rgb.b;
  var rString = r.toString(16).toUpperCase();
  var gString = g.toString(16).toUpperCase();
  var bString = b.toString(16).toUpperCase();

  if (rString.length < 2) {
    rString = "0" + rString;
  }

  if (gString.length < 2) {
    gString = "0" + gString;
  }

  if (bString.length < 2) {
    bString = "0" + bString;
  }

  var hex = "#" + rString + gString + bString;
  return hex;
};
/** Convert HSV to RGB */


var hsvToRgb = function hsvToRgb(hsv) {
  var h = hsv.h,
      s = hsv.s,
      v = hsv.v,
      a = hsv.a;
  var c = v * s;
  var x = c * (1 - Math.abs(h / 60 % 2 - 1));
  var m = v - c;
  var rAux, gAux, bAux;

  if (h >= 0 && h < 60) {
    rAux = c;
    gAux = x;
    bAux = 0;
  } else if (h >= 60 && h < 120) {
    rAux = x;
    gAux = c;
    bAux = 0;
  } else if (h >= 120 && h < 180) {
    rAux = 0;
    gAux = c;
    bAux = x;
  } else if (h >= 180 && h < 240) {
    rAux = 0;
    gAux = x;
    bAux = c;
  } else if (h >= 240 && h < 300) {
    rAux = x;
    gAux = 0;
    bAux = c;
  } else {
    rAux = c;
    gAux = 0;
    bAux = x;
  }

  var r = Math.round((rAux + m) * COLOR_CONSTS.RGB_MAX_VALUE);
  var g = Math.round((gAux + m) * COLOR_CONSTS.RGB_MAX_VALUE);
  var b = Math.round((bAux + m) * COLOR_CONSTS.RGB_MAX_VALUE);
  return {
    r: r,
    g: g,
    b: b,
    a: a
  };
};
/** Convert HSV to Hex */


var hsvTohex = function hsvTohex(hsv) {
  var rgb = hsvToRgb(hsv);
  return rgbTohex(rgb);
};
/** Convert Hex to RGB */


var hexTorgb = function hexTorgb(hex) {
  var r = parseInt(hex.substring(1, 3), 16);
  var g = parseInt(hex.substring(3, 5), 16);
  var b = parseInt(hex.substring(5, 7), 16);
  return {
    r: r,
    g: g,
    b: b,
    a: 1
  };
};
/** Convert Hex to HSV */


var hexTohsv = function hexTohsv(hex) {
  var rgb = hexTorgb(hex);
  return rgbTohsv(rgb);
};

var validHex = function validHex(hex) {
  return /(^#[0-9A-F]{6}$)/i.test(hex);
};
/** Get color format */


var colorFormat = function colorFormat(color) {
  if (validHex(color)) return COLOR_FORMAT.HEX;else if ('h' in color && 's' in color && 'v' in color) return COLOR_FORMAT.HSV;else if ('r' in color && 'g' in color && 'b' in color) return COLOR_FORMAT.RGB;
};
/** Convert Any format suported(RGB, HSV and HEX) to RGB */


var anyTorgb = function anyTorgb(color) {
  var format = colorFormat(color);

  switch (format) {
    case COLOR_FORMAT.HEX:
      return hexTorgb(color);

    case COLOR_FORMAT.HSV:
      return hsvToRgb(color);

    case COLOR_FORMAT.RGB:
      return color;

    default:
      return;
  }
};
/** Convert Any format suported(RGB, HSV and HEX) to HSV */


var anyTohsv = function anyTohsv(color) {
  var format = colorFormat(color);

  switch (format) {
    case COLOR_FORMAT.HEX:
      return hexTohsv(color);

    case COLOR_FORMAT.HSV:
      return color;

    case COLOR_FORMAT.RGB:
      return rgbTohsv(color);

    default:
      return;
  }
};
/** Convert Any format suported(RGB, HSV and HEX) to HEX */


var anyTohex = function anyTohex(color) {
  var format = colorFormat(color);

  switch (format) {
    case COLOR_FORMAT.HEX:
      return color;

    case COLOR_FORMAT.HSV:
      return hsvTohex(color);

    case COLOR_FORMAT.RGB:
      return rgbTohex(color);

    default:
      return;
  }
};

exports.default = {
  rgb: {
    to: {
      hsv: rgbTohsv,
      hex: rgbTohex
    }
  },
  hsv: {
    to: {
      rgb: hsvToRgb,
      hex: hsvTohex
    }
  },
  hex: {
    to: {
      rgb: hexTorgb,
      hsv: hexTohsv
    }
  },
  any: {
    to: {
      rgb: anyTorgb,
      hsv: anyTohsv,
      hex: anyTohex
    }
  },
  validateHex: validHex
};