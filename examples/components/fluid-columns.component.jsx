import React from 'react';

import { FluidColumns } from '../../src';

import './fluid-columns.scss';


function FluidColumnsContent() {
  return (
    <div className="fluid-columns-container">
      <FluidColumns>
        <div id="1" className="content">content 1</div>
        <div id="2" className="content">content 2</div>
        <div id="3" className="content">content 3</div>
        <div id="4" className="content">content 4</div>
        <div id="5" className="content">content 5</div>
        <div id="6" className="content">content 6</div>
        <div id="7" className="content">content 7</div>
        <div id="8" className="content">content 8</div>
      </FluidColumns>
    </div>
  );
}

export default FluidColumnsContent;
