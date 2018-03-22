import indexOfFunc from "../src/indexOf.js";

describe('indexOfFunc', function() {

  let arr = ['a', 'b', 'v', 'a', 'c'];

  it('查找a元素位置', function() {
    let result = indexOfFunc(arr);
    // expect(result).toEqual(0);
  });

});
