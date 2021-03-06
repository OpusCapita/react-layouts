import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import { Icon } from '@opuscapita/react-icons';

import './wizard-footer.scss';


export default class WizardFooter extends React.PureComponent {
  static propTypes = {
    save: PropTypes.func.isRequired,
    disableSave: PropTypes.bool,
    cancel: PropTypes.func.isRequired,
    disableCancel: PropTypes.bool,
    localizationTexts: PropTypes.shape({
      save: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      cancel: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    }).isRequired,
    steps: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
      component: PropTypes.node.isRequired,
    })).isRequired,
    selectPage: PropTypes.func.isRequired,
    currentStep: PropTypes.number.isRequired,
    showPageIndicator: PropTypes.bool,
    showSaveSuccess: PropTypes.bool,
  };

  static defaultProps = {
    showPageIndicator: true,
    disableSave: false,
    disableCancel: false,
    showSaveSuccess: false,
  };

  getIndicators = () => (
    this.props.steps.map((step, i) => {
      if (i === this.props.currentStep) {
        return <span key={step.id} className="tab-indicator tab-highlight" />;
      }
      return <span key={step.id} className="tab-indicator" />;
    })
  );

  render() {
    const {
      currentStep, localizationTexts, showPageIndicator, showSaveSuccess,
      steps,
    } = this.props;
    return (
      <div id="wizard-footer">
        <section className="left column" />
        <section className="center column">
          {showPageIndicator &&
          <div id="bottom-indicators">
            {this.getIndicators()}
          </div>
          }
          <div id="bottom-buttons">
            <section>
              <Button
                disabled={currentStep === 0}
                id="previous-step"
                onClick={event => this.props.selectPage(event, currentStep - 1)}
              >
                <Icon type="indicator" name="CaretLeft" height={30} width={30} />
              </Button>
            </section>
            <section>
              <Button
                id="save-button"
                onClick={this.props.save}
                disabled={this.props.disableSave}
              >
                {localizationTexts.save}
              </Button>

              <Button
                id="cancel-button"
                onClick={this.props.cancel}
                disabled={this.props.disableCancel}
              >
                {localizationTexts.cancel}
              </Button>
            </section>
            <section>
              <Button
                disabled={currentStep === steps.length - 1}
                id="next-step"
                onClick={event => this.props.selectPage(event, currentStep + 1)}
              >
                <Icon type="indicator" name="CaretRight" height={30} width={30} />
              </Button>
            </section>
          </div>
        </section>
        <section className="right column">
          {showSaveSuccess &&
            <div className="save-success-container">
              <Icon type="indicator" name="ok" height={30} width={30} />
              {localizationTexts.saved}
            </div>
          }
        </section>
      </div>
    );
  }
}
