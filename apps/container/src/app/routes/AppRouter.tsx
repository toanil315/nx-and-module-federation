import { REMOTE_ROUTING_PREFIX } from '@/shared/constants/routing';
import { RoutingUtils } from '@/shared/utils/routing';
import { loadRemote } from '@module-federation/enhanced/runtime';
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
      {
        path: RoutingUtils.getPathFromRoutingPrefix(
          REMOTE_ROUTING_PREFIX.REMOTE1
        ),
        element: (
          <Suspense fallback={<p>Loading remote 1...</p>}>
            <Remote1Module />
          </Suspense>
        ),
        loader: async () => {
          return await loadRemote(`${REMOTE_ROUTING_PREFIX.REMOTE1}/Module`);
        },
      },
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
