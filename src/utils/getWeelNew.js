function getSundayDate(currentDate) {
  const day = currentDate.getDay();
  const sundayDate = new Date(currentDate);
  sundayDate.setDate(sundayDate.getDate() - day + 1);

  return sundayDate;
}

export function getWeekDatesNew() {
  const dates = [];
  let currentDate = getSundayDate(new Date());
  const endDate = new Date();
  endDate.setMonth(endDate.getMonth() - 12);

  while (currentDate > endDate) {
    const weekDatesInWeek = [];
    for (let i = 0; i < 7; i += 1) {
      const dateInWeek = new Date(currentDate);
      dateInWeek.setDate(dateInWeek.getDate() + i);
      const formatedDate = dateInWeek.toISOString().slice(0, 10);
      weekDatesInWeek.push(formatedDate);
    }
    dates.unshift(weekDatesInWeek);
    currentDate.setDate(currentDate.getDate() - 7);
  }
  
  return dates;
}
