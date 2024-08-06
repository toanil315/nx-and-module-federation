import { RoutingStrategy } from './router-factory';
export interface AppRouterProps {
    initialPathname?: string;
    routingStrategy?: RoutingStrategy;
}
export declare const AppRouter: ({ initialPathname, routingStrategy, }: AppRouterProps) => import("react/jsx-runtime").JSX.Element;
