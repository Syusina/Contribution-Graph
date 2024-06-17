import styles from './PopUp.module.css';

const PopUp = ({contributions, date}) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.contributions}>{contributions ? contributions : 0} contributions </p>
      <p className={styles.date}>{date}</p>
    </div>
  )
};

export default PopUp;