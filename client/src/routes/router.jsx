import { Navigate, createBrowserRouter } from 'react-router-dom';
import { App } from './../App.jsx';
import { Index } from './../v2/layout/Index.jsx';
import { Index as V1 } from './../v1/components/index.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Index /> },
      { path: '/v1', element: <V1 /> },
    ],
    errorElement: <Navigate to="/" />,
  },
];

const router = createBrowserRouter(routes);

export { router };
