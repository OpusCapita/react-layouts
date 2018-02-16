'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _reactSplitPane = require('react-split-pane');

var _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);

var _splitPane = require('./split-pane.actions');

require('./split-pane.component.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getFromStorage = function getFromStorage(id) {
  var item = sessionStorage.getItem('splitpane_' + id + '_size');
  if (item) {
    return parseInt(item, 10);
  }
  return undefined;
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    size: state.splitpane ? state.splitpane.getIn([ownProps.id, 'size'], getFromStorage(ownProps.id)) : getFromStorage(ownProps.id)
  };
};

var mapDispatchToProps = {
  resize: _splitPane.resize
};

var SplitPane = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = (_temp2 = _class2 = function (_React$Component) {
  _inherits(SplitPane, _React$Component);

  function SplitPane() {
    var _temp, _this, _ret;

    _classCallCheck(this, SplitPane);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onSizeChange = function () {
      if (document.createEvent) {
        var evt = document.createEvent('HTMLEvents');
        evt.initEvent('resize', true, false);
        window.dispatchEvent(evt);
      }
    }, _this.onChange = function (size) {
      _this.props.resize(_this.props.id, size);
      _this.onSizeChange();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SplitPane.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (!nextProps.size) {
      this.onSizeChange();
    }
  };

  // Fire resize event to recalculate component sizes, eg. datagrid


  SplitPane.prototype.render = function render() {
    var _props = this.props,
        id = _props.id,
        children = _props.children,
        size = _props.size,
        defaultSize = _props.defaultSize,
        otherProps = _objectWithoutProperties(_props, ['id', 'children', 'size', 'defaultSize']);

    return _react2.default.createElement(
      _reactSplitPane2.default,
      _extends({}, otherProps, {
        defaultSize: size || defaultSize,
        onChange: this.onChange
      }),
      children
    );
  };

  return SplitPane;
}(_react2.default.Component), _class2.defaultProps = {
  defaultSize: '50%',
  size: null,
  children: null
}, _temp2)) || _class);
exports.default = SplitPane;