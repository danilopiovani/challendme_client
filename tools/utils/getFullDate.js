export const getFullDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${year}-${month.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}-${day.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}`;
};
