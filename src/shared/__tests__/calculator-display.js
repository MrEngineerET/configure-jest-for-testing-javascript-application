import React from 'react'
import {render} from '@testing-library/react'
import CalculatorDisplay from '../calculator-display'

test('renders calculator display', () => {
  const {container} = render(<CalculatorDisplay value="3" />)
  expect(container).toMatchSnapshot()
})
