import { it, expect } from 'vitest'
import { add } from './math'
// First argument: Define what the test will test in a short sentence.
// Second argument: Define the test function (the actual test). We will write the actual testing code here.
it('should summarize all number values in an array', ()=> {
  const result = add([1,2,3,4,5])
  expect(result).toBe(15)
})