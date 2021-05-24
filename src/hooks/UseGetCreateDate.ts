export const UseGetCreateDate = (timestamp: number) => {
  const createTime = new Date(timestamp * 1000);
  const time1 = new Date(createTime);
  const createDate = `${time1.getFullYear()}-${
    time1.getMonth() + 1
  }-${time1.getDate()}`;

  return { createDate };
};
