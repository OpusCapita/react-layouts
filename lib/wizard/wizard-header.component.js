'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

var _reactIcons = require('@opuscapita/react-icons');

require('./wizard-header.component.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WizardHeader = function (_React$PureComponent) {
  _inherits(WizardHeader, _React$PureComponent);

  function WizardHeader() {
    _classCallCheck(this, WizardHeader);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this));

    _this.updateScroll = function () {
      if (_this.scrollbar.offsetWidth !== _this.scrollbar.scrollWidth) {
        _this.setState({
          showScroll: true
        });
      } else {
        _this.setState({
          showScroll: false
        });
      }
    };

    _this.centerSelectedTab = function (tabIndex) {
      if (_this.scrollbar.offsetWidth !== _this.scrollbar.scrollWidth) {
        var offsetLeft = 0;
        for (var i = 0; i < tabIndex; i += 1) {
          offsetLeft += _this.tabElements[i].offsetWidth;
        }
        _this.scrollbar.scrollLeft = offsetLeft + _this.tabElements[tabIndex].offsetWidth / 2 - _this.scrollbar.offsetWidth / 2;
      }
    };

    _this.scrollLeft = function () {
      _this.scrollbar.scrollLeft -= _this.scrollStep;
    };

    _this.scrollRight = function () {
      _this.scrollbar.scrollLeft += _this.scrollStep;
    };

    _this.validateStep = function (step) {
      if ('isValid' in step && !step.isValid) {
        return _react2.default.createElement(_reactIcons.Icon, { type: 'indicator', name: 'error', height: 30, width: 30 });
      }
      return _react2.default.createElement('span', { style: { height: '30px' } });
    };

    _this.scrollStep = 50;

    _this.state = {
      showScroll: true
    };

    _this.tabElements = {};
    return _this;
  }

  WizardHeader.prototype.componentDidMount = function componentDidMount() {
    window.addEventListener('resize', this.updateScroll);
    this.updateScroll();
  };

  WizardHeader.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this.updateScroll);
  };

  WizardHeader.prototype.render = function render() {
    var _this2 = this;

    return _react2.default.createElement(
      'div',
      { id: 'wizard-header' },
      this.state.showScroll && _react2.default.createElement(
        'button',
        { className: 'hidden-button', onClick: this.scrollLeft },
        _react2.default.createElement(_reactIcons.Icon, { type: 'indicator', name: 'CaretLeft', height: 30, width: 30 })
      ),
      _react2.default.createElement(
        'ul',
        { ref: function ref(node) {
            _this2.scrollbar = node;
          } },
        this.props.steps.map(function (step, i) {
          var labelClassName = '';
          if (step.hasRequiredPropsErrors) {
            labelClassName = 'oc-mandatory-error';
          } else if (step.hasRequiredProps) {
            labelClassName = 'oc-mandatory';
          }
          return _react2.default.createElement(
            'li',
            {
              key: step.id,
              className: i === _this2.props.currentStep ? 'doing' : '',
              ref: function ref(node) {
                _this2.tabElements[i] = node;
              }
            },
            _react2.default.createElement(
              'a',
              {
                id: step.id,
                href: '#/',
                onClick: function onClick(event) {
                  _this2.props.selectPage(event, i);
                  _this2.centerSelectedTab(i);
                }
              },
              _react2.default.createElement(
                'span',
                { className: labelClassName },
                _react2.default.createElement(
                  _reactBootstrap.ControlLabel,
                  null,
                  step.name
                )
              ),
              _this2.validateStep(step)
            )
          );
        })
      ),
      this.state.showScroll && _react2.default.createElement(
        'button',
        { className: 'hidden-button', onClick: this.scrollRight },
        _react2.default.createElement(_reactIcons.Icon, { type: 'indicator', name: 'CaretRight', height: 30, width: 30 })
      )
    );
  };

  return WizardHeader;
}(_react2.default.PureComponent);

exports.default = WizardHeader;