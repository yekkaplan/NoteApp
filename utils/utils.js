/**
 *
 * @returns current date
 */
const getCurrentDate = () => {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  var hours = new Date().getHours();
  var minute = new Date().getMinutes();
  return date + '/' + month + '/' + year + ' ' + hours + ':' + minute;
};

export {getCurrentDate};
