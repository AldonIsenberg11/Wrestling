import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import WrestlerForm from './WrestlerForm';

function setup(saving) {
  let props = {
    wrestler: {}, saving: saving, errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<WrestlerForm {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('WrestlerForm via React Test Utils', () => {
  it('renders form and h1', () => {
    const { output } = setup();
    expect(output.type).toBe('form');
    let [h1] = output.props.children;
    expect(h1.type).toBe('h1');
  });

  it('save button islabeled "Save" when not saving', () => {
    const { output } = setup(false);
    const submitButton = output.props.children[20];
    expect(submitButton.props.value).toBe('Save');
  });

  it('save button islabeled "Saving..." when not saving', () => {
    const { output } = setup(true);
    const submitButton = output.props.children[20];
    expect(submitButton.props.value).toBe('Saving...');
  });
});
