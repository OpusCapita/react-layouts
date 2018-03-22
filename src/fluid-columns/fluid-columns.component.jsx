import React from 'react';
import PropTypes from 'prop-types';

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
  children: PropTypes.node,
};

FluidColumns.defaultProps = {
  children: [],
};

export default FluidColumns;
