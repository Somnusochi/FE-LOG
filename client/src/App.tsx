import { Suspense } from 'react';
import { useRoutes, Navigate } from 'react-router';

import routes from '~react-pages';

import './App.css';

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes([...routes, { path: '/index', element: <Navigate to="/" /> }])}
    </Suspense>
  );
}

export default App;
