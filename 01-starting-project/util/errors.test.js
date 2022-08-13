import { HttpError } from './errors'
import { describe, expect, it } from 'vitest'

describe('class HttpError', ()=>{
  it('should contain the provided status code, message and data', () => {
    const testStatus = 1
    const testMessage = 'Test'
    const testData = {key: 'test'}

    const testError = new HttpError(testStatus, testMessage, testData)

    expect(testError.statusCode).toBe(testStatus)
    expect(testError.message).toBe(testMessage)
    expect(testError.data).toBe(testData)

  })
})