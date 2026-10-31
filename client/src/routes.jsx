import { Navigate } from 'react-router-dom';
import { App } from './App.jsx';
import { Index } from './components/v1/index.jsx';

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
