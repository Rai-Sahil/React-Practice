import { render, screen } from '@testing-library/react';
import { App, History } from './App';

test('renders learn react link', () => {
  render(<History />);
  const linkElement = screen.getByText(/Our History/);
  expect(linkElement).toBeInTheDocument();
});
