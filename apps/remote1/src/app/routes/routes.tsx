import { Outlet, RouteObject } from 'react-router-dom';
import NavigationManager from '../../shared/hocs/NavigationManager';
import { Home } from '../../pages/Home';
import { About } from '../../pages/About';

export const routeList: RouteObject[] = [
  {
    path: '/',
    element: (
      <NavigationManager>
        <Outlet />
      </NavigationManager>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },

  {
    path: '*',
    element: <p>404 NOT FOUND</p>,
  },
];
