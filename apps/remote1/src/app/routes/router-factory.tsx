import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import { routeList } from './routes';

export type RoutingStrategy = 'memory' | 'browser';

interface CreateRouterProps {
  strategy?: RoutingStrategy;
  initialPathname?: string;
}

export function createRouter({ strategy, initialPathname }: CreateRouterProps) {
  if (strategy === 'browser') {
    return createBrowserRouter(routeList);
  }

  const initialEntries = [initialPathname || '/'];
  return createMemoryRouter(routeList, { initialEntries: initialEntries });
}
