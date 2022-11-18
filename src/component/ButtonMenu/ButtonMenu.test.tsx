import { fireEvent,render, screen } from '@testing-library/react';
import ButtonMenu from './ButtonMenu';

test('renders text welcome MeseroBot', () => {
  const setShow = jest.fn()
  render(<ButtonMenu show={true} setShow={setShow}/>);
  fireEvent.click(screen.getByText(/show/i))
  expect(setShow).toHaveBeenCalledTimes(1)
});