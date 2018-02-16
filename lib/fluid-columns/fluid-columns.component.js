'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactImmutableProptypes = require('react-immutable-proptypes');

var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);

var _immutable = require('immutable');

require('./fluid-columns.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-typos */

var FluidColumns = function FluidColumns(props) {
  return _react2.default.createElement(
    'div',
    { className: 'oc-fluid-columns-container' },
    _react2.default.createElement(
      'div',
      { className: 'oc-fluid-columns-column' },
      props.children.map(function (child) {
        return _react2.default.createElement(
          'div',
          { className: 'oc-fluid-columns-child-item', key: 'child-item-' + (child.key || child.props.id) },
          child
        );
      })
    )
  );
};

FluidColumns.defaultProps = {
  children: (0, _immutable.List)()
};

exports.default = FluidColumns;