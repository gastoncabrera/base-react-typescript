import { fireEvent, render, screen } from '@testing-library/react';
import ButtonClose from './ButtonClose';


test('click show menu', () => {
  const setShow = jest.fn()
  render(<ButtonClose setShow={setShow} />);
  fireEvent.click(screen.getByText(/show/i))
  expect(setShow).toHaveBeenCalledTimes(1)
});
