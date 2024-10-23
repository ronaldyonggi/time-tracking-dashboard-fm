import avatarJeremy from '../../assets/images/image-jeremy.png';
import styles from './ProfileCard.module.css';

const timeframes = ['Daily', 'Weekly', 'Monthly'];

export default function ProfileCard({ selectedTimeframe }) {
  return (
    <div className={styles.container}>
      <div className={styles.profileInfo}>
        <div className={styles.imageContainer}>
          <img
            src={avatarJeremy}
            alt='Avatar of Jeremy'
            className={styles.avatar}
          />
        </div>
        <div className={styles.nameWrapper}>
          <p className={styles.reportFor}>Report for</p>
          <h1 className={styles.name}>Jeremy Robson</h1>
        </div>
      </div>
      <div className={styles.timeframeSelector}>
        {timeframes.map((t, index) => (
          <button
            key={index}
            className={`${styles.timeframe} ${
              selectedTimeframe === t ? styles.activeTimeframe : ''
            }`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
