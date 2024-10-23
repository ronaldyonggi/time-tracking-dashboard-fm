import './styles/reset.css';
import './styles/global.css';

import { createRoot } from 'react-dom/client';
import ProfileCard from './components/ProfileCard/ProfileCard';
import ActivityCard from './components/ActivityCard/ActivityCard';

export function App() {
  return <ActivityCard title='Work' timeframe='Daily' current={5} previous={7} />;
}

createRoot(document.getElementById('root')!).render(<App />);
