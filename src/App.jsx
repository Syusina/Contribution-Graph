import { useDispatch, useSelector } from 'react-redux';
import styles from './App.module.css'
import Day from './components/Day/Day'
import { useEffect, useState } from 'react';
import { getDays, selectDays } from './store/daysSlice';
import { getWeekDatesNew } from './utils/getWeelNew';

const App = () => {
  const dayNow = new Date();
  const currentMonth = dayNow.getMonth();
  const [weeks, setWeeks] = useState(["Пн", "", "Ср", "", "Пт", "", ""]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDays());
  }, []); 

  const days = useSelector(selectDays);
  const getWeekNew = getWeekDatesNew();

  return (
    <>
      <div className={styles.container}>
        <div></div>
        <div className={styles.month}></div>
        <div className={styles.week}>
          {weeks.map((week) => {
            return <span>{week}</span>
          })}
        </div>
        <div className={styles.wrapper}>
          {getWeekNew.map((week, index) => {
            return (
              <div key={index}>
                {week.map((day) => {
                  const contribDay = days[day];
                  if (days[day]) {
                    return <Day date={day} value={contribDay}/>
                  }
                  return <Day date={day} />
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
