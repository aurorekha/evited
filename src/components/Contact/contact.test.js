import React from 'react';
import Contact from './contact';
import renderer from 'react-test-renderer';

it('renders Contact section correctly', () => {
  const tree = renderer.create(
    <Contact />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
