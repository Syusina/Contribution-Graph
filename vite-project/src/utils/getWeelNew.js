function getSundayDate(currentDate) {
  var day = currentDate.getDay();
  var sundayDate = new Date(currentDate);
  sundayDate.setDate(sundayDate.getDate() - day + 1);
  return sundayDate;
}

export function getWeekDatesNew() {
  var dates = [];
  var currentDate = getSundayDate(new Date());
  var endDate = new Date();
  endDate.setMonth(endDate.getMonth() - 12);

  while (currentDate > endDate) {
    var weekDatesInWeek = [];
    for (var i = 0; i < 7; i++) {
      var dateInWeek = new Date(currentDate);
      dateInWeek.setDate(dateInWeek.getDate() + i);
      var formatedDate = dateInWeek.toISOString().slice(0,10);
      weekDatesInWeek.push(formatedDate);
    }
    dates.unshift(weekDatesInWeek);
    currentDate.setDate(currentDate.getDate() - 7);
  }
  return dates;
}