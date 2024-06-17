import { useDispatch, useSelector } from 'react-redux';
import styles from './App.module.css'
import Day from './components/Day/Day'
import { useEffect } from 'react';
import { getDays, selectDays } from './store/daysSlice';
import getWeeksObject from './utils/getWeek';

const App = () => {
  const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",];
  const weeks = ["Пн", "", "Ср", "", "Пт", "", ""];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDays());
  }, []); 

  const days = useSelector(selectDays);
  const getWeek = getWeeksObject();
  const firstMonthNum = new Date(Object.values(getWeek)[0][0]).getMonth();
  const firstMonthName = months[firstMonthNum - 1];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.weeks}>
          {weeks.map((week, ind) => {
            return <span className={styles.week} key={ind}>{week}</span>
          })}
        </div>
        <div className={styles.wrapper}>
          {Object.values(getWeek).map((week, index) => {
            return (
              <div key={index}>
                {week.map((day, ind) => {
                  const contribDay = days[day];
                  if (days[day]) {
                    return <Day key={ind} date={day} value={contribDay}/>
                  }
                  return <Day key={ind} date={day} />
                })}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App;
