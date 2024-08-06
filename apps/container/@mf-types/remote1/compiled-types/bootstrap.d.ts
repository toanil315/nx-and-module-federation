import { RoutingStrategy } from './app/routes/router-factory';
interface MountParams {
    mountPoint: HTMLElement;
    initialPathname?: string;
    routingStrategy?: RoutingStrategy;
}
declare const mount: ({ mountPoint, initialPathname, routingStrategy, }: MountParams) => void;
export { mount };
