// Array.prototype.flaten()

import flatenFunc from "../src/flaten.js";

describe('flatenFunc', function() {

  let collection = [1, [2], [3, 4]];

  it('把二维数组变成一维数组', function() {

    let result = flatenFunc(collection);

    // expect(result).toEqual([1, 2, 3, 4]);
  })
});
