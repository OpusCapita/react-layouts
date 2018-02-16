/* eslint-disable react/no-typos */

import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { List } from 'immutable';
import './fluid-columns.scss';

const FluidColumns = props => (
  <div className="oc-fluid-columns-container">
    <div className="oc-fluid-columns-column">
      {
        props.children.map(child => (
          <div className="oc-fluid-columns-child-item" key={`child-item-${child.key || child.props.id}`}>
            {child}
          </div>
        ))
      }
    </div>
  </div>
);

FluidColumns.propTypes = {
  children: ImmutablePropTypes.list,
};

FluidColumns.defaultProps = {
  children: List(),
};

export default FluidColumns;
