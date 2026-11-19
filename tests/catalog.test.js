'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const {products,findProducts} = require('../src/catalog');
test('каталог містить навчальні товари', () => assert.equal(products.length, 3));
test('пошук працює за категорією', () => assert.equal(findProducts('кераміка').length, 1));
test('пошук нечутливий до регістру', () => assert.equal(findProducts('ОПІШНЯ')[0].id, 1));
test('невідомий запит повертає порожній список', () => assert.deepEqual(findProducts('невідоме'), []));
