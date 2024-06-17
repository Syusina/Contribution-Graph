function getSundayDate(currentDate) {
  var day = currentDate.getDay();
  var sundayDate = new Date(currentDate);
  sundayDate.setDate(sundayDate.getDate() - day + 1);

  return sundayDate;
}

export function getWeekDates() {
  var dates = [];
  var currentDate = getSundayDate(new Date());
  var endDate = new Date();
  endDate.setMonth(endDate.getMonth() - 12);

  while (currentDate > endDate) {
  var weekDatesInWeek = [];
  for (var i = 0; i < 7; i++) {
    var dateInWeek = new Date(currentDate);
    dateInWeek.setDate(dateInWeek.getDate() + i);
    weekDatesInWeek.push(new Date(dateInWeek));
  }
  dates.push(weekDatesInWeek);
  currentDate.setDate(currentDate.getDate() - 7);
  }
  
  return dates;
}
