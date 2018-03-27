const mapFunc = collection => {
  //在这里写入代码
  const result = collection.map(x => (x % 2 === 0 ? x * 2 : x));

  return result;
};

export default mapFunc;
