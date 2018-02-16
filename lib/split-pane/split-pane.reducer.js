'use strict';

exports.__esModule = true;
exports.default = splitPaneReducer;

var _splitPane = require('./split-pane.actions');

var _splitPane2 = require('./split-pane.constants');

var _splitPane3 = _interopRequireDefault(_splitPane2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function splitPaneReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _splitPane3.default;
  var action = arguments[1];

  switch (action.type) {
    case _splitPane.TYPES.PLATFORM_SPLITPANE_RESIZE:
      return state.setIn([action.id, 'size'], action.size);
    default:
      return state;
  }
}