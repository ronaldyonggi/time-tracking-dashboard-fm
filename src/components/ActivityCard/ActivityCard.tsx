import styles from './ActivityCard.module.css';
import ellipse from '../../assets/images/icon-ellipsis.svg';
import workIcon from '../../assets/images/icon-work.svg';
import playIcon from '../../assets/images/icon-play.svg';
import studyIcon from '../../assets/images/icon-study.svg';
import exerciseIcon from '../../assets/images/icon-exercise.svg';
import socialIcon from '../../assets/images/icon-social.svg';
import selfCareIcon from '../../assets/images/icon-self-care.svg';

interface ActivityCardProps {
  title: string;
  timeframe: 'Daily' | 'Weekly' | 'Monthly';
  current: number;
  previous: number;
}

export default function ActivityCard({
  title,
  timeframe,
  current,
  previous,
}: ActivityCardProps) {
  let previousTimeframe = '';

  const iconMap: { [key: string]: string } = {
    Work: workIcon,
    Play: playIcon,
    Study: studyIcon,
    Exercise: exerciseIcon,
    Social: socialIcon,
    'Self Care': selfCareIcon,
  };

  const normalizedTitle = title.toLowerCase().replace(' ', '');

  switch (timeframe) {
    case 'Daily':
      previousTimeframe = 'Yesterday';
      break;
    case 'Weekly':
      previousTimeframe = 'Last Week';
      break;
    case 'Monthly':
      previousTimeframe = 'Last Month';
      break;
    default:
      break;
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.coloredBackground} ${styles[normalizedTitle]}`}>
        <div className={styles.iconContainer}>
          <img
            src={iconMap[title]}
            alt='Icon'
            className={styles.icon}
            aria-hidden='true'
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <div>
            <img src={ellipse} alt='Ellipse icon' />
          </div>
        </div>
        <div className={styles.stats}>
          <p className={styles.hours}>{current}hrs</p>
          <p className={styles.previous}>
            {' '}
            {previousTimeframe} - {previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
}
