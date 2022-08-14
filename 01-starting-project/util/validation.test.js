import { it, expect } from 'vitest'
import { validateNotEmpty } from './validation'

it('should throw an error if an empty string is provided as a value', () => {
  const testInput = ''

  const validationFn = () => validateNotEmpty(testInput) //pattern for testing for errors

  expect(validationFn).toThrow()
})

it('should throw an error if a non empty string is provided with only blank as a value', () => {
  const testInput = '   '

  const validationFn = () => validateNotEmpty(testInput) //pattern for testing for errors

  expect(validationFn).toThrow()
})