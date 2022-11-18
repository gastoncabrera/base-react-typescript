import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text welcome MeseroBot', () => {
  render(<App />);
  const linkElement = screen.getByText("Bienvenido a MeseroBot");
  expect(linkElement).toBeInTheDocument();
});
