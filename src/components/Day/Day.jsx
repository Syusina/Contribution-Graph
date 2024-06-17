import { useState } from 'react';
import styles from './Day.module.css';
import PopUp from '../PopUp/PopUp';
import clsx from 'clsx';
import { formatDate } from '../../utils/getFormatFullDate';

const Day = ({ date, value }) => {
  const [showPopup, setShowPopup] = useState(false);
  let styleName = 'day';


  if (value >= 30) {
    styleName = 'more30';
  } else if (value >= 20) {
    styleName = 'more20';
  } else if (value >= 10) {
    styleName = 'more10';
  } else if (value >= 1) {
    styleName = 'more1';
  } 

  const handleMove = () => {
    setShowPopup(true);
  };

  const handleLeave = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div
        className={clsx(styles.day, styles[styleName])}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        {showPopup && <PopUp contributions={value} date={formatDate(date)}/>}
      </div>
      
    </>
  );
};

export default Day;