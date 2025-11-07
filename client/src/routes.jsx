import { App } from './App.jsx';
import { Index } from './pages/index.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [{ index: '/', element: <Index /> }],
  },
];

export { routes };
