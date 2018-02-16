import React from 'react';

import { FluidColumns } from '../../src';

import './fluid-columns.scss';


function FluidColumnsContent() {
  return (
    <div className="fluid-columns-container">
      <FluidColumns>
        <div className="content">content 1</div>
        <div className="content">content 2</div>
        <div className="content">content 3</div>
        <div className="content">content 4</div>
        <div className="content">content 5</div>
        <div className="content">content 6</div>
        <div className="content">content 7</div>
        <div className="content">content 8</div>
      </FluidColumns>
    </div>
  );
}

export default FluidColumnsContent;
