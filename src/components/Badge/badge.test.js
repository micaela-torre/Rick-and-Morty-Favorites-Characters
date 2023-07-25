import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Badge from './Badge';

describe('Badge', () => {
  test('renders with children', () => {
    const { getByText } = render(<Badge>My Badge</Badge>);
    const badgeElement = getByText('My Badge');
    expect(badgeElement).toBeInTheDocument();
  });

  test('sets the background color correctly', () => {
    const { container } = render(<Badge color="#ff0000">Red Badge</Badge>);
    const badgeContainer = container.firstChild;
    expect(badgeContainer).toHaveStyle('background: #ff0000');
  });

  test('uses default color if none is provided', () => {
    const { container } = render(<Badge>Default Badge</Badge>);
    const badgeContainer = container.firstChild;
    expect(badgeContainer).toHaveStyle('background: #b5b5b5');
  });
});
