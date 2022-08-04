import { it, expect } from 'vitest'
import { transformToNumber } from './numbers'

it('should transform a string number to a number of type number', () => {
  const value = '1'
  const result = transformToNumber(value)
  expect(result).toBe(+value)
})

it('should transform a string number to a number of type number', () => {
  const value = '1'
  const result = transformToNumber(value)
  expect(result).toBeTypeOf('number')
})

it('should yield NaN for non-transformable values', () => {
  const value = 'hola'
  const value2 = {}

  const result = transformToNumber(value)
  const result2 = transformToNumber(value2)

  // Multiple expectations does make sense here
  expect(result).toBeNaN()
  expect(result2).toBeNaN()
})