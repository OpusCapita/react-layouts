'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

var _reactIcons = require('@opuscapita/react-icons');

require('./wizard-footer.component.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WizardFooter = (_temp2 = _class = function (_React$PureComponent) {
  _inherits(WizardFooter, _React$PureComponent);

  function WizardFooter() {
    var _temp, _this, _ret;

    _classCallCheck(this, WizardFooter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.getIndicators = function () {
      return _this.props.steps.map(function (step, i) {
        if (i === _this.props.currentStep) {
          return _react2.default.createElement('span', { key: step.id, className: 'tab-indicator tab-highlight' });
        }
        return _react2.default.createElement('span', { key: step.id, className: 'tab-indicator' });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  WizardFooter.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        currentStep = _props.currentStep,
        localizationTexts = _props.localizationTexts,
        showPageIndicator = _props.showPageIndicator,
        showSaveSuccess = _props.showSaveSuccess,
        steps = _props.steps;

    return _react2.default.createElement(
      'div',
      { id: 'wizard-footer' },
      _react2.default.createElement('section', { className: 'left column' }),
      _react2.default.createElement(
        'section',
        { className: 'center column' },
        showPageIndicator && _react2.default.createElement(
          'div',
          { id: 'bottom-indicators' },
          this.getIndicators()
        ),
        _react2.default.createElement(
          'div',
          { id: 'bottom-buttons' },
          _react2.default.createElement(
            'section',
            null,
            _react2.default.createElement(
              _reactBootstrap.Button,
              {
                disabled: currentStep === 0,
                id: 'previous-step',
                onClick: function onClick(event) {
                  return _this2.props.selectPage(event, currentStep - 1);
                }
              },
              _react2.default.createElement(_reactIcons.Icon, { type: 'indicator', name: 'CaretLeft', height: 30, width: 30 })
            )
          ),
          _react2.default.createElement(
            'section',
            null,
            _react2.default.createElement(
              _reactBootstrap.Button,
              {
                id: 'save-button',
                onClick: this.props.save,
                disabled: this.props.disableSave
              },
              localizationTexts.save
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              {
                id: 'cancel-button',
                onClick: this.props.cancel,
                disabled: this.props.disableCancel
              },
              localizationTexts.cancel
            )
          ),
          _react2.default.createElement(
            'section',
            null,
            _react2.default.createElement(
              _reactBootstrap.Button,
              {
                disabled: currentStep === steps.length - 1,
                id: 'next-step',
                onClick: function onClick(event) {
                  return _this2.props.selectPage(event, currentStep + 1);
                }
              },
              _react2.default.createElement(_reactIcons.Icon, { type: 'indicator', name: 'CaretRight', height: 30, width: 30 })
            )
          )
        )
      ),
      _react2.default.createElement(
        'section',
        { className: 'right column' },
        showSaveSuccess && _react2.default.createElement(
          'div',
          { className: 'save-success-container' },
          _react2.default.createElement(_reactIcons.Icon, { type: 'indicator', name: 'ok', height: 30, width: 30 }),
          localizationTexts.saved
        )
      )
    );
  };

  return WizardFooter;
}(_react2.default.PureComponent), _class.defaultProps = {
  showPageIndicator: true,
  disableSave: false,
  disableCancel: false,
  showSaveSuccess: false
}, _temp2);
exports.default = WizardFooter;