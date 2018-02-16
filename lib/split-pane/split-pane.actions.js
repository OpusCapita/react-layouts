'use strict';

exports.__esModule = true;
var TYPES = exports.TYPES = {
  PLATFORM_SPLITPANE_RESIZE: 'PLATFORM_SPLITPANE_RESIZE'
};

var resize = exports.resize = function resize(id, size) {
  return function (dispatch) {
    sessionStorage['splitpane_' + id + '_size'] = size;
    return dispatch({
      type: TYPES.PLATFORM_SPLITPANE_RESIZE,
      id: id,
      size: size
    });
  };
};