/**
 * Array.prototype.filter()
 */

import filterFunc from "../src/filter.js";

describe('filterFunc', function() {

  let collectionA = [4,7,9,25,16,21,64,32,35,49];
  let collectionB = [2,3,5];

  it('选出A集合中可以被B集合中整除的数', function() {
    let result = filterFunc(collectionA, collectionB);

    // expect(result).toEqual([4,9,25,16,21,64,32,35])
  })

});
