export const  getUpdateDate = (updatedAt: number) => {
  const updateTime = new Date(updatedAt * 1000);
  const time2 = new Date(updateTime);
  const updateDate = `${time2.getFullYear()}-${
    time2.getMonth() + 1
  }-${time2.getDate()}`;

  return updateDate
}