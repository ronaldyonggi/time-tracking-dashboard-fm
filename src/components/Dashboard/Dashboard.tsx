import { useState } from 'react';
import ProfileCard from '../ProfileCard/ProfileCard';
import { ActivityData, Timeframe } from '../../types';
import ActivityCard from '../ActivityCard/ActivityCard';
import styles from './Dashboard.module.css';

interface DashboardProps {
  data: ActivityData[];
}

export default function Dashboard({ data }: DashboardProps) {
  const [selectedTimeframe, setSelectedTimeframe] =
    useState<Timeframe>('daily');
  return (
    <div className={styles.dashboard}>
      <div className={styles.profileCardWrapper}>
        <ProfileCard
          timeframe={selectedTimeframe}
          setTimeFrame={setSelectedTimeframe}
        />
      </div>
        {data.map((d, index) => (
          <ActivityCard
            key={index}
            title={d.title}
            timeframe={selectedTimeframe}
            current={d.timeframes[selectedTimeframe].current}
            previous={d.timeframes[selectedTimeframe].previous}
            className={styles[`activityCard${index + 1}`]}
          />
        ))}
    </div>
  );
}
