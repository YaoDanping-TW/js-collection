const concatFunc = (collection1, collection2) => {
  //在这里写入代码
  collection2.forEach(x => {
    if (collection1.indexOf(x) === -1) {
      collection1.push(x);
    }
  });
  return collection1;
};

const distinct = array => {};

export default concatFunc;
