/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable function-paren-newline */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import { SplitPane } from '../../../src/index';


describe('Split-pane component', function () {
  before(function before() {
    const mockStore = configureMockStore();
    this.store = mockStore({});
  });

  it('should render correctly', function () {
    const wrapper = mount(
      <SplitPane store={this.store} id="1" minSize={100} defaultSize="50%">
        <div id="content1">Content 1</div>
        <div id="content2">Content 2</div>
      </SplitPane>,
    );

    expect(wrapper.find('#content1').text()).to.eql('Content 1');
    expect(wrapper.find('#content2').text()).to.eql('Content 2');
  });
});
