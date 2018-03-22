/**
 * Array.prototype.map()
 */

import mapFunc from "../src/map.js";

describe('mapFunc', function() {

  let collectionA = [1, 2, 3, 4, 5];
  let collectionB = ['a', 'b', 'c', 'd', 'e'];

  it('数字映射为字母', function() {
    let result = mapFunc(collectionA);
    // expect(result).toEqual(collectionB);
  });

});
