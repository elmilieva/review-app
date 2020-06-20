import React from 'react';
import { render } from '@testing-library/react';
import ReviewApp from './ReviewApp';

test('renders learn react link', () => {
  const { getByText } = render(<ReviewApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
