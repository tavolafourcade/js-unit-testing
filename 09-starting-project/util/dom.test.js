import fs from 'fs'
import path from 'path' //Open a file and download its content (open and load index HTML file)

import { it, vi } from 'vitest'
import { Window } from 'happy-dom'
import { showError } from './dom'

const htmlDocPath = path.join(process.cwd(), 'index.html') // path.join(__dirname, 'index.html')
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString() // The content of the index.html file

const window = new Window() // Create an emulated browser
const document = window.document // Get the document object
document.write(htmlDocumentContent) // Write the content of the index.html file to the document (renders the page in the browser)

vi.stubGlobal('document', document) // Replace the global document object with the one we created

it('first test', ()=> {
  showError('test')
})