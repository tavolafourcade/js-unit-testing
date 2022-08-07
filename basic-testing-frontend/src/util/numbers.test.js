import { describe, it, expect } from 'vitest'
import { transformToNumber, cleanNumbers } from './numbers'

describe('transformToNumber()', ()=> {
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
})


describe('cleanNumbers()', () => {
  it('should return an array of number values if an array of string number values is provided', () => {
    const numbersValues = ['1', '2', '3']
    
    const cleanedNumbers = cleanNumbers(numbersValues)

    // expect(cleanedNumbers[0]).toBeTypeOf('number')
    // expect(cleanedNumbers).toBe([1, 2, 3]) // Throw error because arrays are reference values.
    expect(cleanedNumbers).toEqual([1, 2, 3])


  })

  it('should throw an error if an array with at least one empty string is provided', () => {
    const numbersValues = ['', 1]
    
    const cleanFn = () => cleanedNumbers(numbersValues)

    expect(cleanFn).toThrow()
  })
})