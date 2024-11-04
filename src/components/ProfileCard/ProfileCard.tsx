import avatarJeremy from '../../assets/images/image-jeremy.png';
import { Timeframe } from '../../types';
import styles from './ProfileCard.module.css';

const timeframes: Timeframe[] = ['daily', 'weekly', 'monthly'];

interface ProfileCardProps {
  timeframe: Timeframe;
  setTimeFrame: (timeframe: Timeframe) => void;
}

export default function ProfileCard({
  timeframe,
  setTimeFrame,
}: ProfileCardProps) {
  const handleClick = (timeframe: Timeframe) => {
    setTimeFrame(timeframe);
  };
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
              timeframe === t ? styles.activeTimeframe : ''
            }`}
            onClick={() => handleClick(t)}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
