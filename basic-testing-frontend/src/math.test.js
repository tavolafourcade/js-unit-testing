import { it, expect } from 'vitest'
import { add } from './math'
// First argument: Define what the test will test in a short sentence.
// Second argument: Define the test function (the actual test). We will write the actual testing code here.
it('should summarize all number values in an array', ()=> {
  // Arrange
  const numbers = [1,2,3,4,5]
  // Act
  const result = add(numbers)
  // Assert
  const expectedResult = numbers.reduce((prevValue, curValue)=> prevValue + curValue, 0)
  expect(result).toBe(expectedResult)
})

it('should yield NaN if a least one invalid number is provided', ()=> {
  // Arrange
  const numbers = ['invalid', 1]

  // Act
  const result = add(numbers)

  // Assert
  expect(result).toBeNaN()
})

it('should yield a correct sum if an array of numeric string values is provided', ()=> {
  const numbers = ['1', '2']

  const result = add(numbers)
  
  const expectedResult = numbers.reduce((prevValue, curValue)=> +prevValue + +curValue, 0) // + force to convert string to number
  expect(result).toBe(expectedResult)
})