import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Calculator from '../calculator'

test('render Calculator component', () => {
  const calculator = render(<Calculator />)
  const clearButton = calculator.getByText('AC')

  fireEvent.click(calculator.getByText(/3/))
  //   expect(clearButton.textContent).toBe('C')
  expect(clearButton).toHaveTextContent('C')

  fireEvent.click(clearButton)
  //   expect(clearButton.textContent).toBe('AC')
  expect(clearButton).toHaveTextContent('AC')
})
