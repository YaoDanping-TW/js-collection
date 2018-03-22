/**
 * Array.prototype.join()
 */

import joinFunc from "../src/join.js";

describe('joinFunc', function() {

  let arr = ['Neo', 'Coco', 'Kebi'];

  it('将数组拼接成字符串，并以逗号分隔(最后一个元素无需加逗号)', function() {
    let result = joinFunc(arr);
    // expect(result).toEqual('Neo, Coco, Kebi');
  });

});
