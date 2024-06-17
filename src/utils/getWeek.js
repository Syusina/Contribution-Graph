import { getFormatFullDate } from "./getFormatFullDate";

function getWeeksObject() {
  const currentDate = new Date('2023-10-26');
  const dayOfWeek = currentDate.getDay(); 
  const mondayOfCurrentWeek = new Date(currentDate.getTime() - (dayOfWeek * 24 * 60 * 60 * 1000));
  const fiftyWeeksAgo = new Date(mondayOfCurrentWeek.getTime() - (50 * 7 * 24 * 60 * 60 * 1000));

  const weeksObject = {};

  let currentWeek = new Date(fiftyWeeksAgo);
  let weekCount = 1;

  while (currentWeek <= currentDate) {
    const daysOfWeek = [];
    for (let i = 0; i < 7; i += 1) {
      daysOfWeek.push(getFormatFullDate(new Date(currentWeek)));
      currentWeek.setDate(currentWeek.getDate() + 1);
    }
    weeksObject['Week' + weekCount] = daysOfWeek;
    weekCount += 1;
  }

  return weeksObject;
}

export default getWeeksObject;

