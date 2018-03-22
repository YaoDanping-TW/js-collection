import reduceFunc from "../src/reduce.js";

describe('reduceFunc', function() {

  let str = '12345';

  it('将字符串转成数字（不能使用parseInt()）', function() {
    let result = reduceFunc(str);
    // expect(result).toEqual(12345);
  });
});


// Try：用reduce实现join拼接字符串的功能
