import {getFormattedValue} from '../utils'

test('checking if it working', () => {
  expect(getFormattedValue('1200.0')).toBe('1,200.0')
})
