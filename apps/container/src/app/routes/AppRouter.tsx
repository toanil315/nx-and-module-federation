import { REMOTE_ROUTING_PREFIX } from '@/shared/constants/routing';
import { RoutingUtils } from '@/shared/utils/routing';
import { Suspense, lazy } from 'react';
import {
  Navigate,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

const Remote1Module = lazy(() => import('@/remotes/remote1/Module'));

const routeList: RouteObject[] = [
  {
    path: '/*',
    children: [
      {
        index: true,
        element: <Navigate to={REMOTE_ROUTING_PREFIX.REMOTE1} />,
      },
      RoutingUtils.getRemoteModuleRouteObject({
        prefix: REMOTE_ROUTING_PREFIX.REMOTE1,
        element: (
          <Suspense>
            <Remote1Module />
          </Suspense>
        ),
      }),
    ],
  },

  {
    path: '*',
    element: <p>404 NOT FOUND</p>,
  },
];

const router = createBrowserRouter(routeList);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
