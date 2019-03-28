global.window = global;
global.assert = require('chai').assert;
require('../src/data/lol');
require('./data.spec.js');

describe('data', () => {
  
  it('debería ser un objeto', () => {
    assert.equal(typeof data, 'object');
  });

  it('debería ser una función', () => {
    assert.equal(typeof getData, 'function');
  });
})

//expect().toequal
//expect().toBe
