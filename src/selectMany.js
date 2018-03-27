const selectManyFunc = arr => {
  //在这里写入代码
  let array = [];
  arr.forEach(x => {
    array = array.concat(getArrayProperty(x));
  });

  return array;
};

const getArrayProperty = ArrayItem => {
  let result = [];
  Object.keys(ArrayItem).forEach(property => {
    if (ArrayItem[property] instanceof Array) {
      result = result.concat(ArrayItem[property]);
    }
  });
  return result;
};

export default selectManyFunc;
