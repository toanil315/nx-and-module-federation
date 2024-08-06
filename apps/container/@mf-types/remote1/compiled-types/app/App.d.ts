import { RoutingStrategy } from './routes/router-factory';
interface Props {
    initialPathname?: string;
    routingStrategy?: RoutingStrategy;
}
declare const App: ({ initialPathname, routingStrategy }: Props) => import("react/jsx-runtime").JSX.Element;
export default App;
