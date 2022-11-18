import { render, screen } from '@testing-library/react';
import Navbar from './Navbar'

test('renders navbar', () => {
  const list = [{ title: 'render', path: 'home' }]
  render(<Navbar linkList={list} />);
  const linkElement = screen.getByText("render")
  expect(linkElement).toBeInTheDocument();
});