import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, waitFor } from '@testing-library/react';
import ProfileCard from './ProfileCard';

describe('ProfileCard', () => {
  it('updates timeframe on button click', async () => {
    const setTimeFrame = vi.fn();
    const { getByText } = render(
      <ProfileCard timeframe='daily' setTimeFrame={setTimeFrame} />
    );
    const weeklyButton = getByText('weekly');
    fireEvent.click(weeklyButton);
    await waitFor(() => expect(setTimeFrame).toHaveBeenCalledTimes(1));
    expect(setTimeFrame).toHaveBeenCalledWith('weekly');
  });

  it('renders timeframe buttons correctly', () => {
    const setTimeFrame = vi.fn();
    const { getAllByRole } = render(
      <ProfileCard timeframe='daily' setTimeFrame={setTimeFrame} />
    );
    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(3);
    expect(buttons[0].textContent).toBe('daily');
    expect(buttons[1].textContent).toBe('weekly');
    expect(buttons[2].textContent).toBe('monthly');
  });

  it('renders avatar and name correctly', () => {
    const setTimeFrame = vi.fn();
    const { getByAltText, getByText } = render(
      <ProfileCard timeframe='daily' setTimeFrame={setTimeFrame} />
    );
    const avatar = getByAltText('Avatar of Jeremy');
    expect(avatar.src).toContain('image-jeremy.png');
    const name = getByText('Jeremy Robson');
    expect(name.className).toContain('name');
  });

  it('updates selected timeframe on prop update', async () => {
    const setTimeFrame = vi.fn();
    const { rerender, getByText } = render(
      <ProfileCard timeframe='daily' setTimeFrame={setTimeFrame} />
    );
    rerender(<ProfileCard timeframe='monthly' setTimeFrame={setTimeFrame} />);
    await waitFor(() => getByText('monthly'));
    const monthlyButton = getByText('monthly');
    expect(monthlyButton.className).toContain('activeTimeframe');
  });
});
