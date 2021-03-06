import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactSplitPane from 'react-split-pane';

import { resize } from './split-pane.actions';

import './split-pane.component.scss';

const getFromStorage = (id) => {
  const item = sessionStorage.getItem(`splitpane_${id}_size`);
  if (item) {
    return parseInt(item, 10);
  }
  return undefined;
};

const mapStateToProps = (state, ownProps) => (
  {
    size: state.splitpane ? state.splitpane.getIn(
      [ownProps.id, 'size'],
      getFromStorage(ownProps.id),
    ) : getFromStorage(ownProps.id),
  }
);

const mapDispatchToProps = {
  resize,
};

@connect(mapStateToProps, mapDispatchToProps)
export default class SplitPane extends React.Component {
  static propTypes = {
    defaultSize: PropTypes.string,
    id: PropTypes.string.isRequired,
    size: PropTypes.number,
    resize: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };

  static defaultProps = {
    defaultSize: '50%',
    size: null,
    children: null,
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.size) {
      this.onSizeChange();
    }
  }

  // Fire resize event to recalculate component sizes, eg. datagrid
  onSizeChange = () => {
    if (document.createEvent) {
      const evt = document.createEvent('HTMLEvents');
      evt.initEvent('resize', true, false);
      window.dispatchEvent(evt);
    }
  };

  onChange = (size) => {
    this.props.resize(this.props.id, size);
    this.onSizeChange();
  };

  render() {
    const {
      id,
      children,
      size,
      defaultSize,
      ...otherProps
    } = this.props;
    return (
      <ReactSplitPane
        {...otherProps}
        defaultSize={size || defaultSize}
        onChange={this.onChange}
      >
        { children }
      </ReactSplitPane>
    );
  }
}
