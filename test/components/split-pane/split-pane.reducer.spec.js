/* eslint-disable prefer-arrow-callback */

import { expect } from 'chai';
import { Map } from 'immutable';

import { TYPES } from '../../../src/split-pane/split-pane.actions';
import { INITIAL_STATE } from '../../../src/split-pane/split-pane.constants';
import { splitPaneReducer } from '../../../src/index';


describe('Split-pane reducer', function describe() {
  it('handles resize action', function it() {
    const action = {
      type: TYPES.PLATFORM_SPLITPANE_RESIZE,
      id: '1',
      size: 10,
    };

    const newState = splitPaneReducer(INITIAL_STATE, action);

    expect(newState).to.eql(Map({
      1: Map({
        size: 10,
      }),
    }));
  });
});
