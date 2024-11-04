import './styles/reset.css';
import './styles/global.css';

import data from '../data.json';

import { createRoot } from 'react-dom/client';
import Dashboard from './components/Dashboard/Dashboard';

export function App() {
  return (
    <main>
      <Dashboard data={data} />
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
