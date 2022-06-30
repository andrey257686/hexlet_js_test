import { capitalize } from '../src/capitalize.js';
import { strict as assert } from 'assert';

//if (capitalize('hello') !== 'Hello') {
//  throw new Error('Функция работает неверно!');
//}

//if (capitalize('') !== '') {
//  throw new Error('Функция работает неверно!');
//}

assert.equal(capitalize(''),'');
assert.equal(capitalize('hello'), 'Hello');

console.log('Все тесты пройдены!');
