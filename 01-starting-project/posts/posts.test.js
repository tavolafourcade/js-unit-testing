import { beforeEach, describe, it, expect } from "vitest";
import { extractPostData } from "./posts";

const testTitle = 'testTitle'
const testContent = 'testContent'
let testFormData

describe('extractPostData()', ()=>{
  beforeEach(() => { // reset the form data before each test
    testFormData = {
      title: testTitle,
      content: testContent,
      get(identifier) {
        return this[identifier] // dynamic property access using []
      }
    }
  })
  it('should extract title and content from the provided form data', () => {
    
    const data = extractPostData(testFormData)

    expect(data.title).toBe(testTitle)
    expect(data.content).toBe(testContent)

  })
})