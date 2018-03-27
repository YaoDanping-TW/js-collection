const filterFunc = (collectionA, collectionB) => {
  //在这里写入代码
  const result = collectionA.filter(x => collectionB.some(y => x % y === 0));
  return result;
};

export default filterFunc;
