'use strict';
const products = [
  { id: 1, title: 'Глечик керамічний', category: 'Кераміка', price: 850, region: 'Опішня' },
  { id: 2, title: 'Рушник вишитий', category: 'Вишивка', price: 1400, region: 'Полтавщина' },
  { id: 3, title: 'Шкатулка різьблена', category: 'Різьблення', price: 1100, region: 'Карпати' }
];
function findProducts(query = '') {
  const normalized = String(query).trim().toLocaleLowerCase('uk');
  return products.filter(item => [item.title, item.category, item.region]
    .some(value => value.toLocaleLowerCase('uk').includes(normalized)));
}
module.exports = { products, findProducts };
