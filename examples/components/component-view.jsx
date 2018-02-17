import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import FluidColumnsContent from './fluid-columns.component';
import SplitPaneView from './split-pane-view.component';
import WizardView from './wizard-view.component';

import './component-view.scss';


export default function ComponentView() {
  return (
    <Tabs defaultActiveKey={1} id="react-layouts-tabs">
      <Tab eventKey={1} title="Fluid columns">
        <FluidColumnsContent />
      </Tab>
      <Tab eventKey={2} title="Wizard">
        <WizardView />
      </Tab>
      <Tab eventKey={3} title="Split pane">
        <SplitPaneView />
      </Tab>
    </Tabs>
  );
}
