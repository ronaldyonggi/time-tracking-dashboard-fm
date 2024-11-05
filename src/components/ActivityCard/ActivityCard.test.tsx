import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ActivityCard from './ActivityCard';
import { Timeframe } from '../../types';

describe('ActivityCard', () => {
  it('renders title and timeframe correctly', () => {
    const props = {
      title: 'Work',
      timeframe: 'daily' as Timeframe,
      current: 5,
      previous: 3,
      className: 'activity-card',
    };
    const { findByText } = render(<ActivityCard {...props} />);
    expect(findByText('Work')).toBeDefined();
    expect(findByText('Yesterday')).toBeDefined();
  });

  it('renders current and previous values correctly', () => {
    const props = {
      title: 'Work',
      timeframe: 'daily' as Timeframe,
      current: 5,
      previous: 3,
      className: 'activity-card',
    };
    const { findByText } = render(<ActivityCard {...props} />);
    expect(findByText('5hrs')).toBeDefined();
    expect(findByText('3hrs')).toBeDefined();
  });

  it('renders icon correctly', () => {
    const props = {
      title: 'Work',
      timeframe: 'daily' as Timeframe,
      current: 5,
      previous: 3,
      className: 'activity-card',
    };
    const { getByAltText } = render(<ActivityCard {...props} />);
    expect(getByAltText('Icon')).toBeDefined();
  });

  it('renders different timeframe labels correctly', () => {
    const props = {
      title: 'Work',
      timeframe: 'weekly' as Timeframe,
      current: 5,
      previous: 3,
      className: 'activity-card',
    };
    const { findByText } = render(<ActivityCard {...props} />);
    expect(findByText('Last Week')).toBeDefined();

    props.timeframe = 'monthly';
    const { findByText: findByText2 } = render(<ActivityCard {...props} />);
    expect(findByText2('Last Month')).toBeDefined();
  });
});