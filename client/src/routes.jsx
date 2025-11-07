import { App } from './App.jsx';
import { Index } from './pages/index.jsx';
import { Navigate } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [{ index: '/', element: <Index /> }],
  },
  {
    path: '/*',
    element: <Navigate to="/" />,
  },
];

export { routes };
