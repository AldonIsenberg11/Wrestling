import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageWrestlerPage} from './ManageWrestlerPage';

describe ('Manage Wrestler Page',() => {
  it('sets error message when trying to save empty email',() => {
    const props = {
      authors: [],
      actions: {saveWrestler: () => { return Promise.resolve(); }},
      wrestler: {id: '',watchHref: '', email: '', authorId:'', length: '', category: ''}
    };
    const wrapper = mount(<ManageWrestlerPage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.email).toBe('Email must be at least 5 characters.');
  });
});
