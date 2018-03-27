/**
 * Array.prototype.concat()
 */

import concatFunc from "../src/concat.js";

describe("concatFunc", function() {
  let collectionA = [1, 2, 3, 4, 5];
  let collectionB = [4, 5, 6, 7];

  it("合并数组并去重", function() {
    let result = concatFunc(collectionA, collectionB);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
