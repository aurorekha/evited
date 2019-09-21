import React from 'react';
import WhatWeDo from './whatWeDo';
import renderer from 'react-test-renderer';

it('renders WhatWeDo section correctly', () => {
  const tree = renderer.create(
    <WhatWeDo />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
