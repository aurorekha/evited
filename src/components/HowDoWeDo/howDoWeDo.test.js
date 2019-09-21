import React from 'react';
import HowDoWeDo from './howDoWeDo';
import renderer from 'react-test-renderer';

it('renders HowDoWeDo section correctly', () => {
  const tree = renderer.create(
    <HowDoWeDo />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
