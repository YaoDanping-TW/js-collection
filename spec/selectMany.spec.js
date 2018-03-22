
import selectManyFunc from "../src/selectMany.js";

describe('selectManyFunc', function() {
  
  let arr = [
    { name: 'Neo', 
      hobby: [
        'music', 'basketball'
      ]
    }, 
    { name: 'coco', 
      hobby: [
        'reading', 'movie'
      ]
    }
  ];

  it('用js实现C#中selectMany()方法', function() {
    let result = selectManyFunc(arr);
    // expect(result).toEqual(['music', 'basketball', 'reading', 'movie']);
  });

});
