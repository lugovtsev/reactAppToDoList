export const formatDate = (dateByNumber, flag) => {
  const addZero = (num) => {
    return (num < 10) ? '0' + num : num;
  }
  let normalDate = new Date(dateByNumber);
  let formattedDate;
  switch (flag) {
    case 'd':
      formattedDate = `${addZero(normalDate.getDate())}.${addZero(normalDate.getMonth()+1)}.${normalDate.getFullYear()}`;
      break;
    case 't':
      formattedDate = `${addZero(normalDate.getHours())}:${addZero(normalDate.getMinutes())}:${addZero(normalDate.getSeconds())}`;
      break;
      default:
      break;
  }
  return formattedDate;
}
