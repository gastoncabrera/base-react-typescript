import { render, screen } from '@testing-library/react';
import ButtonLink from './ButtonLink';

test('renders text welcome MeseroBot', () => {
  render(<ButtonLink title={'render'} path={'/'} />);
  const linkElement = screen.getByText("render")
  expect(linkElement).toBeInTheDocument();
});
