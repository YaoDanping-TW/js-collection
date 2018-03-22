/**
 * Array.prototype.map()
 */

import mapFunc from "../src/map.js";

describe('mapFunc', function() {

  let collection = [1, 2, 3, 4, 5];

  it('将偶数double', function() {
    let result = mapFunc(collection);
    // expect(result).toEqual([1, 4, 3, 8, 5]);
  });

});
