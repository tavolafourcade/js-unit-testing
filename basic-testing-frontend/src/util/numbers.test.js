import { it, expect } from 'vitest'
import { transformToNumber } from './numbers'

it('should transform a string number to a number of type number', () => {
  const value = '1'
  const result = transformToNumber(value)
  expect(result).toBeTypeOf('number')
})

it('should yield NaN for non-transformable values', () => {
  const value = 'hola'
  const result = transformToNumber(value)
  expect(result).toBeNaN()
})