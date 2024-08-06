import { RouterProvider } from 'react-router-dom';
import { RoutingStrategy, createRouter } from './router-factory';

export interface AppRouterProps {
  initialPathname?: string;
  routingStrategy?: RoutingStrategy;
}

export const AppRouter = ({
  initialPathname,
  routingStrategy,
}: AppRouterProps) => {
  return (
    <RouterProvider
      router={createRouter({ strategy: routingStrategy, initialPathname })}
    />
  );
};
