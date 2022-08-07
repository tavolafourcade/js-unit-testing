import { expect, it } from 'vitest'
import { generateToken, generateTokenPromise } from './async-example'

it('should generate a token value', (done)=> {
  const testUserEmail = 'test@test.com'

  generateToken(testUserEmail, (err, token) => {
    try {
      expect(token).toBeDefined()
    // expect(token).toBe(2) // Wrong assertion
      done()
    } catch (error) {
      done(error)
    }
  })
})

// First way for testing promises
it('should generate a token value', () => {
  const testUserEmail = 'test@test.com'

  const token = generateTokenPromise(testUserEmail)

  expect(token).resolves.toBeDefined()
})

// Second way for testing promises
it('should generate a token value', async () => {
  const testUserEmail = 'test@test.com'

  const token = await generateTokenPromise(testUserEmail)

  expect(token).toBeDefined()
})