import React from 'react';
import TopBanner from './topBanner';
import renderer from 'react-test-renderer';

it('renders TopBanner section correctly', () => {
  const tree = renderer.create(
    <TopBanner />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
