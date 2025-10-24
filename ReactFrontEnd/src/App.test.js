import { render, screen } from '@testing-library/react';
import App from './App';

test('renders demo heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/React \+ .NET CI\/CD Demo/i);
  expect(headingElement).toBeInTheDocument();
});