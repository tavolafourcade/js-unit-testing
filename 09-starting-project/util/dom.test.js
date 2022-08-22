import fs from 'fs'
import path from 'path' //Open a file and download its content (open and load index HTML file)

import { it, vi, expect, beforeEach } from 'vitest'
import { Window } from 'happy-dom'
import { showError } from './dom'

const htmlDocPath = path.join(process.cwd(), 'index.html') // path.join(__dirname, 'index.html')
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString() // The content of the index.html file

const window = new Window() // Create an emulated browser
const document = window.document // Get the document object

vi.stubGlobal('document', document) // Replace the global document object with the one we created

beforeEach(()=>{
  document.body.innerHTML = ''
  document.write(htmlDocumentContent) // Write the content of the index.html file to the document (renders the page in the browser)

})
it('should add an error paragraph to the id="errors" element', ()=> {
  showError('Test')

  const errorsEl = document.getElementById('errors')
  const errorParagraph = errorsEl.firstElementChild

  expect(errorParagraph).not.toBeNull() // Check if the element exists
})

it('should not contain an error paragraph initially', () => {
  const errorsEl = document.getElementById('errors')
  const errorParagraph = errorsEl.firstElementChild

  expect(errorParagraph).toBeNull() // Check if the element exists
})