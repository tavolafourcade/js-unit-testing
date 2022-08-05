import { extractNumbers } from './src/parser.js';
import { generateResultText, outputResult } from './src/util/output.js';
import {
  validateStringNotEmpty,
  validateNumber,
} from './src/util/validation.js';
import { calculateResult } from './src/math.js';
import { transformToNumber } from './src/util/numbers.js';
import { extractEnteredNumberValues } from './src/parser.js';

const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();
  const numberValues = extractEnteredNumberValues(form)

  let result = calculateResult(numberValues);

  const resultText = generateResultText(result);

  outputResult(resultText)
}

form.addEventListener('submit', formSubmitHandler);
