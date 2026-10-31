import { App } from './App.jsx';
import { Index } from './pages/index.jsx';
import { Navigate } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Index /> },
      { path: '/v1', element: <Index /> },
    ],
    errorElement: <Navigate to="/" />,
  },
];

export { routes };
